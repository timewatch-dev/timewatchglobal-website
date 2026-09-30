"use client";

import React from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import DeleteConfirm from "./DeleteConfirm";
import { useCategories, useDeleteCategory } from "../store/categories.queries";
import toast from "react-hot-toast";

const getErrorMessage = (error, fallback) =>
  error?.response?.data?.message || error?.message || fallback;

export default function CategoryTable() {
  const { data: categories = [], isLoading } = useCategories();
  const deleteCategory = useDeleteCategory();

  const handleDeleteCategory = (categoryId) => {
    deleteCategory.mutate(categoryId, {
      onSuccess: () => toast.success("Category deleted"),
      onError: (error) => {
        toast.error(getErrorMessage(error, "Failed to delete category"));
      },
    });
  };

  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full rounded-md" />
        ))}
      </div>
    );
  }

  return (
    <div className="border border-border rounded-md bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Sub-categories</TableHead>
            <TableHead className="w-20 text-center">Count</TableHead>
            <TableHead className="w-16">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                No categories yet.
              </TableCell>
            </TableRow>
          ) : (
            categories.map((category) => (
              <TableRow key={category._id}>
                <TableCell className="whitespace-normal align-top">
                  <p className="font-semibold text-foreground">{category.categoryName}</p>
                  <p className="text-xs text-muted-foreground">{category.categorySlug}</p>
                </TableCell>
                <TableCell className="whitespace-normal align-top">
                  {category.subCategories.length === 0 ? (
                    <span className="text-sm text-muted-foreground">—</span>
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {category.subCategories.map((sub) => (
                        <Badge key={sub._id} variant="secondary">
                          {sub.subCategoryName}
                        </Badge>
                      ))}
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-center align-top">
                  {category.subCategories.length}
                </TableCell>
                <TableCell className="align-top">
                  <DeleteConfirm
                    title="Delete this category?"
                    description={`This will permanently delete "${category.categoryName}". If any products still use it, deletion will be blocked.`}
                    onConfirm={() => handleDeleteCategory(category._id)}
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </DeleteConfirm>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
