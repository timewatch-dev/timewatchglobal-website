"use client";

import React, { useState, useMemo } from "react";
import StaticBreadcrumb from "@/components/DynamicBreadcrumb";
import ProductReorderTable from "@/features/products/components/ProductReorderTable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Link from "next/link";
import { Plus, X, Download, FileText } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts, useDeleteProduct } from "@/features/products/store/products.queries";
import { productsAPI } from "@/features/products/api/products.api";
import {
  buildExportFile,
  currentSource,
  downloadJson,
} from "@/features/products/utils/productJson";
import { isWithinHours } from "@/lib/formatDate";
import toast from "react-hot-toast";

const STATUS_OPTIONS = [
  { value: "draft", label: "Draft" },
  { value: "pending", label: "Pending" },
  { value: "published", label: "Published" },
];

const FILES_OPTIONS = [
  { value: "has-datasheet", label: "Has Datasheet" },
  { value: "has-diagram", label: "Has Connection Diagram" },
  { value: "has-manual", label: "Has User Manual" },
  { value: "complete", label: "All Files Uploaded" },
  { value: "none", label: "No Files Uploaded" },
  { value: "missing-datasheet", label: "Missing Datasheet" },
  { value: "missing-diagram", label: "Missing Connection Diagram" },
  { value: "missing-manual", label: "Missing User Manual" },
  { value: "missing-any", label: "Missing Any File" },
];

const UPDATED_OPTIONS = [
  { value: "24h", label: "Last 24 hours" },
  { value: "3d", label: "Last 3 days" },
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
];
const UPDATED_HOURS = { "24h": 24, "3d": 72, "7d": 168, "30d": 720 };

const SORT_OPTIONS = [
  { value: "default", label: "Default order" },
  { value: "updated-desc", label: "Recently updated first" },
  { value: "updated-asc", label: "Oldest updated first" },
];

// Chunk sizes offered for the "Quick select" range badges (1–25, 26–50, ...).
const BATCH_SIZE_OPTIONS = [25, 50, 100];

// Bulk "open in new tab" actions for the selection toolbar.
const BULK_FILE_TYPES = [
  { key: "datasheetFile", label: "Datasheets" },
  { key: "connectionDiagramFile", label: "Diagrams" },
  { key: "userManualFile", label: "User Manuals" },
];

export default function ProductListPage() {
  const { data: products = [], isLoading } = useProducts();
  const deleteMutation = useDeleteProduct();
  const [filterText, setFilterText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [subCategoryFilter, setSubCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [filesFilter, setFilesFilter] = useState("all");
  const [updatedFilter, setUpdatedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [dragEnabled, setDragEnabled] = useState(false);
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const [batchSize, setBatchSize] = useState(25);

  // Sorting by anything other than the saved display order would make a drag
  // silently save the wrong order, so the two are mutually exclusive.
  const handleDragEnabledChange = (checked) => {
    setDragEnabled(checked);
    if (checked) setSortBy("default");
  };
  const handleSortChange = (value) => {
    setSortBy(value);
    if (value !== "default") setDragEnabled(false);
  };

  const categoryOptions = useMemo(() => {
    const set = new Set(products.map((p) => p.categoryName).filter(Boolean));
    return Array.from(set).sort();
  }, [products]);

  const subCategoryOptions = useMemo(() => {
    const relevant =
      categoryFilter === "all"
        ? products
        : products.filter((p) => p.categoryName === categoryFilter);
    const set = new Set(relevant.map((p) => p.subCategoryName).filter(Boolean));
    return Array.from(set).sort();
  }, [products, categoryFilter]);

  const hasActiveFilters =
    filterText ||
    categoryFilter !== "all" ||
    subCategoryFilter !== "all" ||
    statusFilter !== "all" ||
    filesFilter !== "all" ||
    updatedFilter !== "all" ||
    sortBy !== "default";

  const clearFilters = () => {
    setFilterText("");
    setCategoryFilter("all");
    setSubCategoryFilter("all");
    setStatusFilter("all");
    setFilesFilter("all");
    setUpdatedFilter("all");
    setSortBy("default");
  };

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (
        filterText &&
        !product.productName?.toLowerCase().includes(filterText.toLowerCase())
      ) {
        return false;
      }
      if (categoryFilter !== "all" && product.categoryName !== categoryFilter) {
        return false;
      }
      if (subCategoryFilter !== "all" && product.subCategoryName !== subCategoryFilter) {
        return false;
      }
      if (statusFilter !== "all" && (product.status || "draft") !== statusFilter) {
        return false;
      }
      if (filesFilter !== "all") {
        const hasDatasheet = !!product.datasheetFile;
        const hasDiagram = !!product.connectionDiagramFile;
        const hasManual = !!product.userManualFile;
        const isComplete = hasDatasheet && hasDiagram && hasManual;
        const hasNone = !hasDatasheet && !hasDiagram && !hasManual;

        if (filesFilter === "has-datasheet" && !hasDatasheet) return false;
        if (filesFilter === "has-diagram" && !hasDiagram) return false;
        if (filesFilter === "has-manual" && !hasManual) return false;
        if (filesFilter === "missing-datasheet" && hasDatasheet) return false;
        if (filesFilter === "missing-diagram" && hasDiagram) return false;
        if (filesFilter === "missing-manual" && hasManual) return false;
        if (filesFilter === "missing-any" && isComplete) return false;
        if (filesFilter === "complete" && !isComplete) return false;
        if (filesFilter === "none" && !hasNone) return false;
      }
      if (updatedFilter !== "all" && !isWithinHours(product.updatedAt, UPDATED_HOURS[updatedFilter])) {
        return false;
      }
      return true;
    });

    if (sortBy === "updated-desc" || sortBy === "updated-asc") {
      const sorted = [...filtered].sort((a, b) => {
        const diff = new Date(a.updatedAt || 0) - new Date(b.updatedAt || 0);
        return sortBy === "updated-desc" ? -diff : diff;
      });
      return sorted;
    }

    return filtered;
  }, [
    products,
    filterText,
    categoryFilter,
    subCategoryFilter,
    statusFilter,
    filesFilter,
    updatedFilter,
    sortBy,
  ]);

  const toggleSelect = (id, checked) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  // Select-all only ever acts on the currently visible (filtered) rows.
  const allVisibleSelected =
    filteredProducts.length > 0 && filteredProducts.every((p) => selectedIds.has(p._id));
  const someVisibleSelected =
    !allVisibleSelected && filteredProducts.some((p) => selectedIds.has(p._id));
  const selectAllState = allVisibleSelected ? true : someVisibleSelected ? "indeterminate" : false;

  const toggleSelectAll = (checked) => {
    setSelectedIds(checked ? new Set(filteredProducts.map((p) => p._id)) : new Set());
  };

  const clearSelection = () => setSelectedIds(new Set());

  // Batches of `batchSize` products, in the order currently shown (respects
  // active filters/sort) — so "1–25", "26–50" etc. line up with the table.
  const selectionBatches = useMemo(() => {
    const batches = [];
    for (let i = 0; i < filteredProducts.length; i += batchSize) {
      const slice = filteredProducts.slice(i, i + batchSize);
      batches.push({
        start: i + 1,
        end: i + slice.length,
        ids: slice.map((p) => p._id),
      });
    }
    return batches;
  }, [filteredProducts, batchSize]);

  const isBatchSelected = (ids) =>
    ids.length > 0 && ids.length === selectedIds.size && ids.every((id) => selectedIds.has(id));

  const selectBatch = (ids) => setSelectedIds(new Set(ids));

  const selectedProducts = useMemo(
    () => products.filter((p) => selectedIds.has(p._id)),
    [products, selectedIds]
  );

  // Files already come back as full URLs from the backend (see
  // backend/src/utils/serializeProduct.js) — open them as-is, one tab per file.
  // window.open() returns null when the popup blocker ate that tab — but ALSO
  // whenever the "noopener" feature is passed, even on success (per spec), so
  // we can't pass noopener here and still tell the two cases apart. Instead we
  // sever window.opener by hand right after a successful open, which gives
  // the same tabnabbing protection without losing the return value.
  const handleBulkOpen = (fileKey, label) => {
    const urls = selectedProducts.map((p) => p[fileKey]).filter(Boolean);
    if (!urls.length) {
      toast.error(`None of the selected products have a ${label.toLowerCase().replace(/s$/, "")}`);
      return;
    }

    let opened = 0;
    urls.forEach((url) => {
      const win = window.open(url, "_blank");
      if (win) {
        win.opener = null;
        opened++;
      }
    });

    if (opened === urls.length) {
      toast.success(`Opened ${opened} ${label.toLowerCase()}`);
      return;
    }
    if (opened === 0) {
      toast.error(
        `Your browser blocked all ${urls.length} tabs. Click the "popup blocked" icon in the address bar → "Always allow pop-ups and redirects" for this site, then try again.`,
        { duration: 7000 }
      );
      return;
    }
    toast.error(
      `Only ${opened} of ${urls.length} tabs opened — the rest were blocked. Allow pop-ups for this site (icon in the address bar) so all of them open next time.`,
      { duration: 7000 }
    );
  };

  // Uses the dedicated export endpoint rather than the list already in memory,
  // which is loaded with a projection that omits features, FAQ and keywords.
  const handleExportAll = async () => {
    const toastId = toast.loading("Preparing export...");
    try {
      const full = await productsAPI.exportAll();
      const stamp = new Date().toISOString().slice(0, 10);
      downloadJson(`products-${stamp}.json`, buildExportFile(full, currentSource()));
      toast.success(`Exported ${full.length} products`, { id: toastId });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message || "Export failed",
        { id: toastId }
      );
    }
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        toast.success("Product deleted permanently");
      },
      onError: (error) => {
        toast.error(error.message || "Failed to delete product");
      },
    });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <StaticBreadcrumb
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Products" },
            ]}
          />
          <h1 className="font-bold text-2xl text-foreground mt-2">
            All Products{" "}
            <span className="text-muted-foreground font-normal">
              ({filteredProducts.length}
              {hasActiveFilters ? ` of ${products.length}` : ""})
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="drag-enabled"
              checked={dragEnabled}
              onCheckedChange={handleDragEnabledChange}
            />
            <Label htmlFor="drag-enabled" className="cursor-pointer">
              Enable reordering
            </Label>
          </div>
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer"
            onClick={handleExportAll}
          >
            <Download className="mr-2 h-4 w-4" /> Export JSON
          </Button>
          <Link href="/dashboard/create">
            <Button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold">
              <Plus className="mr-2 h-4 w-4" /> Create Product
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 py-4">
        <Input
          placeholder="Filter products by name..."
          value={filterText}
          onChange={(event) => setFilterText(event.target.value)}
          className="max-w-sm"
        />

        <Select
          value={categoryFilter}
          onValueChange={(val) => {
            setCategoryFilter(val);
            setSubCategoryFilter("all");
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categoryOptions.map((cat) => (
              <SelectItem value={cat} key={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={subCategoryFilter} onValueChange={setSubCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Subcategory" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subcategories</SelectItem>
            {subCategoryOptions.map((sub) => (
              <SelectItem value={sub} key={sub}>
                {sub}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {STATUS_OPTIONS.map((opt) => (
              <SelectItem value={opt.value} key={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filesFilter} onValueChange={setFilesFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Files" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Files</SelectItem>
            {FILES_OPTIONS.map((opt) => (
              <SelectItem value={opt.value} key={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={updatedFilter} onValueChange={setUpdatedFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Last Updated" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any time</SelectItem>
            {UPDATED_OPTIONS.map((opt) => (
              <SelectItem value={opt.value} key={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="w-[190px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((opt) => (
              <SelectItem value={opt.value} key={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <X className="mr-1 h-4 w-4" /> Clear filters
          </Button>
        )}
      </div>

      {filteredProducts.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground shrink-0">Quick select:</span>

          <div className="flex items-center gap-1 mr-1">
            {BATCH_SIZE_OPTIONS.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setBatchSize(size)}
                className={`px-2 py-0.5 rounded text-xs font-medium border cursor-pointer transition-colors ${
                  batchSize === size
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:bg-accent"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {selectionBatches.map((batch) => (
            <button
              key={batch.start}
              type="button"
              onClick={() => selectBatch(batch.ids)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border cursor-pointer transition-colors ${
                isBatchSelected(batch.ids)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-muted text-foreground border-border hover:bg-accent"
              }`}
            >
              {batch.start}–{batch.end}
            </button>
          ))}
        </div>
      )}

      {selectedIds.size > 0 && (
        <div className="flex flex-wrap items-center gap-3 mb-4 p-3 rounded-md border border-border bg-muted">
          <span className="text-sm font-medium text-foreground">
            {selectedIds.size} selected
          </span>
          {BULK_FILE_TYPES.map(({ key, label }) => (
            <Button
              key={key}
              type="button"
              variant="outline"
              size="sm"
              className="cursor-pointer"
              onClick={() => handleBulkOpen(key, label)}
            >
              <FileText className="mr-1.5 h-4 w-4" /> Open {label}
            </Button>
          ))}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearSelection}
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <X className="mr-1 h-4 w-4" /> Clear selection
          </Button>
        </div>
      )}

      {isLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4 border p-4 rounded-md">
              <Skeleton className="h-10 w-10 rounded" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
              <Skeleton className="h-8 w-20" />
            </div>
          ))}
        </div>
      ) : (
        <ProductReorderTable
          products={filteredProducts}
          onDelete={handleDelete}
          dragEnabled={dragEnabled}
          selectedIds={selectedIds}
          onToggleSelect={toggleSelect}
          onToggleSelectAll={toggleSelectAll}
          selectAllState={selectAllState}
        />
      )}
    </div>
  );
}
