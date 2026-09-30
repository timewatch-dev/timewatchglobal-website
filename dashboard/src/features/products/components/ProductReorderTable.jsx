"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Image from "next/image";
import Link from "next/link";
import { Edit, Trash2, Copy, Download } from "lucide-react";
import { getImageUrl } from "@/lib/getImageUrl";
import { formatRelativeTime, formatDateTime, isWithinHours } from "@/lib/formatDate";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import QuickFileEditSheet from "./QuickFileEditSheet";
import {
  useReorderProducts,
  useDuplicateProduct,
  useSetProductPopular,
} from "../store/products.queries";
import { productsAPI } from "../api/products.api";
import {
  buildExportFile,
  currentSource,
  downloadJson,
  exportFileName,
} from "../utils/productJson";
import toast from "react-hot-toast";

const FILE_BADGES = [
  { key: "datasheetFile", label: "DS" },
  { key: "connectionDiagramFile", label: "CD" },
  { key: "userManualFile", label: "UM" },
];

const FILE_BADGE_AVAILABLE =
  "bg-green-100 text-green-700 border-green-200 hover:bg-green-200 dark:bg-green-500/15 dark:text-green-400 dark:border-green-500/30 dark:hover:bg-green-500/25";
const FILE_BADGE_MISSING = "bg-muted text-muted-foreground border-border";

const STATUS_STYLES = {
  published:
    "bg-green-100 text-green-800 border-green-200 dark:bg-green-500/15 dark:text-green-400 dark:border-green-500/30",
  draft:
    "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-500/15 dark:text-yellow-400 dark:border-yellow-500/30",
  pending:
    "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-500/15 dark:text-orange-400 dark:border-orange-500/30",
};
const STATUS_STYLE_FALLBACK = "bg-muted text-muted-foreground border-border";

// Total column count for the group-heading row's colSpan.
const COLUMN_COUNT = 11;

// How recently a product must have been touched to get the "Updated" badge.
const RECENTLY_UPDATED_HOURS = 48;

function AlertDialogDelete({ productId, onDelete, children }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the product from the server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onDelete(productId)}
            className="cursor-pointer bg-destructive hover:bg-destructive/90 text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// Groups products by subcategory (matching the original dashboard) so drag order
// is scoped per-subcategory — cross-group drags are rejected in onDragEnd.
export default function ProductReorderTable({
  products,
  onDelete,
  dragEnabled = false,
  selectedIds,
  onToggleSelect,
  onToggleSelectAll,
  selectAllState = false,
}) {
  const [groups, setGroups] = useState([]);
  const reorderMutation = useReorderProducts();
  const duplicateMutation = useDuplicateProduct();
  const popularMutation = useSetProductPopular();
  const router = useRouter();

  const handleTogglePopular = (product, checked) => {
    popularMutation.mutate(
      { id: product._id, isPopular: checked === true },
      {
        onSuccess: () =>
          toast.success(
            checked
              ? `"${product.productName}" marked as popular`
              : `"${product.productName}" removed from popular`
          ),
        onError: (error) =>
          toast.error(error.message || "Could not update popular flag"),
      }
    );
  };

  const handleDuplicate = (productId) => {
    duplicateMutation.mutate(productId, {
      onSuccess: (data) => {
        toast.success("Product duplicated — edit the copy now");
        if (data?.product?._id) {
          router.push(`/dashboard/edit/${data.product._id}`);
        }
      },
      onError: (error) => {
        toast.error(error.message || "Failed to duplicate product");
      },
    });
  };

  // Re-fetches the product before writing the file: the list is loaded with a
  // projection that leaves out features, FAQ and keywords, and an export must
  // not quietly drop them.
  const handleExport = async (product) => {
    const toastId = toast.loading("Preparing export...");
    try {
      const full = (await productsAPI.getById(product._id)) || product;
      downloadJson(exportFileName(full), buildExportFile(full, currentSource()));
      toast.success(`Exported "${full.productName}"`, { id: toastId });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message || "Could not export that product",
        { id: toastId }
      );
    }
  };

  useEffect(() => {
    const order = [];
    const grouped = {};
    (products || []).forEach((p) => {
      const key = p.subCategoryName || "Uncategorized";
      if (!grouped[key]) {
        grouped[key] = { id: key, title: key, items: [] };
        order.push(key);
      }
      grouped[key].items.push(p);
    });
    setGroups(order.map((key) => grouped[key]));
  }, [products]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) return;
    if (source.index === destination.index) return;

    const groupIndex = groups.findIndex((g) => g.id === source.droppableId);
    if (groupIndex === -1) return;

    const group = groups[groupIndex];
    const newItems = Array.from(group.items);
    const [moved] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, moved);

    const previousGroups = groups;
    const updatedGroups = [...groups];
    updatedGroups[groupIndex] = { ...group, items: newItems };
    setGroups(updatedGroups);

    reorderMutation.mutate(
      {
        subCategoryName: group.title,
        orderedIds: newItems.map((item) => item._id),
      },
      {
        onError: (error) => {
          toast.error(error.message || "Failed to save order");
          setGroups(previousGroups);
        },
      }
    );
  };

  if (!groups.length) {
    return <p className="text-muted-foreground py-8 text-center">No products found.</p>;
  }

  return (
    <div className="border border-border rounded-md bg-card">
      <Table>
        {/* Main table heading — appears once for the whole list, not per subcategory group */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-8" />
            <TableHead className="w-8">
              <Checkbox
                checked={selectAllState}
                onCheckedChange={(checked) => onToggleSelectAll?.(checked === true)}
                aria-label="Select all products"
                className="cursor-pointer"
              />
            </TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Product</TableHead>
            <TableHead className="hidden md:table-cell">Category</TableHead>
            <TableHead className="hidden md:table-cell">Subcategory</TableHead>
            <TableHead>Files</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-center">Popular</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <DragDropContext onDragEnd={onDragEnd}>
          {groups.map((group) => (
            <Droppable droppableId={group.id} key={group.id}>
              {(provided) => (
                <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                  <TableRow className="bg-muted hover:bg-muted">
                    <TableCell colSpan={COLUMN_COUNT} className="font-semibold whitespace-normal text-md text-foreground px-4 py-2">
                      {group.title}{" "}
                      <span className="text-muted-foreground font-normal">({group.items.length})</span>
                    </TableCell>
                  </TableRow>

                  {group.items.map((item, index) => (
                    <Draggable
                      key={item._id}
                      draggableId={item._id}
                      index={index}
                      isDragDisabled={!dragEnabled}
                    >
                      {(dragProvided, snapshot) => (
                        <TableRow
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                          className={snapshot.isDragging ? "bg-accent" : ""}
                        >
                          <TableCell
                            className={
                              dragEnabled
                                ? "text-muted-foreground font-bold cursor-grab"
                                : "text-muted-foreground/40 font-bold cursor-not-allowed"
                            }
                          >
                            ☰
                          </TableCell>

                          <TableCell onClick={(e) => e.stopPropagation()}>
                            <Checkbox
                              checked={selectedIds?.has(item._id) || false}
                              onCheckedChange={(checked) =>
                                onToggleSelect?.(item._id, checked === true)
                              }
                              aria-label={`Select ${item.productName}`}
                              className="cursor-pointer"
                            />
                          </TableCell>

                          <TableCell>
                            <div className="w-12 h-12 relative shrink-0 rounded border overflow-hidden bg-muted">
                              {item.productImage && (
                                <Image
                                  src={getImageUrl(item.productImage)}
                                  alt={item.productName}
                                  fill
                                  className="object-contain"
                                  sizes="48px"
                                  unoptimized
                                />
                              )}
                            </div>
                          </TableCell>

                          <TableCell className="whitespace-normal">
                            <p className="font-semibold text-foreground truncate max-w-[200px]">
                              {item.productName}
                            </p>
                            <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                              {item.productSlug}
                            </p>
                          </TableCell>

                          <TableCell className="hidden md:table-cell whitespace-normal">
                            <p className="text-sm text-foreground truncate max-w-[150px]">
                              {item.categoryName}
                            </p>
                            <p className="text-xs text-muted-foreground truncate max-w-[150px]">
                              {item.categorySlug}
                            </p>
                          </TableCell>

                          <TableCell className="hidden md:table-cell whitespace-normal">
                            <p className="text-sm text-foreground truncate max-w-[150px]">
                              {item.subCategoryName}
                            </p>
                            <p className="text-xs text-muted-foreground truncate max-w-[150px]">
                              {item.subCategorySlug}
                            </p>
                          </TableCell>

                          <TableCell>
                            <div className="flex items-center gap-1">
                              {FILE_BADGES.map(({ key, label }) => {
                                const url = item[key];
                                return url ? (
                                  <a
                                    key={key}
                                    href={getImageUrl(url)}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={`Open ${label}`}
                                    className={`inline-flex items-center justify-center w-7 h-6 rounded text-[10px] font-semibold border transition-colors ${FILE_BADGE_AVAILABLE}`}
                                  >
                                    {label}
                                  </a>
                                ) : (
                                  <span
                                    key={key}
                                    title={`${label}: not uploaded`}
                                    className={`inline-flex items-center justify-center w-7 h-6 rounded text-[10px] font-semibold border ${FILE_BADGE_MISSING}`}
                                  >
                                    {label}
                                  </span>
                                );
                              })}
                            </div>
                          </TableCell>

                          <TableCell>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                                STATUS_STYLES[item.status] || STATUS_STYLE_FALLBACK
                              }`}
                            >
                              {item.status || "draft"}
                            </span>
                          </TableCell>

                          <TableCell
                            className="whitespace-normal"
                            title={formatDateTime(item.updatedAt)}
                          >
                            <p className="text-sm text-foreground">
                              {formatRelativeTime(item.updatedAt)}
                            </p>
                            {isWithinHours(item.updatedAt, RECENTLY_UPDATED_HOURS) && (
                              <span className="inline-flex items-center px-1.5 py-0.5 mt-0.5 rounded-full text-[10px] font-medium border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/30">
                                Updated
                              </span>
                            )}
                          </TableCell>

                          <TableCell
                            className="text-center"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Checkbox
                              checked={!!item.isPopular}
                              disabled={popularMutation.isPending}
                              onCheckedChange={(checked) =>
                                handleTogglePopular(item, checked)
                              }
                              aria-label="Toggle popular"
                              className="cursor-pointer"
                            />
                          </TableCell>

                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Link
                                href={`/dashboard/edit/${item._id}`}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <Edit className="w-5 h-5" />
                              </Link>
                              <QuickFileEditSheet product={item} />
                              <button
                                type="button"
                                title="Duplicate product"
                                disabled={duplicateMutation.isPending}
                                onClick={() => handleDuplicate(item._id)}
                                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Copy className="w-5 h-5" />
                              </button>
                              <button
                                type="button"
                                title="Export as JSON"
                                onClick={() => handleExport(item)}
                                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                              >
                                <Download className="w-5 h-5" />
                              </button>
                              <AlertDialogDelete productId={item._id} onDelete={onDelete}>
                                <button
                                  type="button"
                                  className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </AlertDialogDelete>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </Draggable>
                  ))}

                  {/* Hidden row keeps the droppable's spacer valid inside a <tbody> */}
                  <tr style={{ display: "none" }}>
                    <td>{provided.placeholder}</td>
                  </tr>
                </TableBody>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </Table>
    </div>
  );
}
