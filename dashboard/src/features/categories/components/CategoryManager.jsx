"use client";

import React, { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import DeleteConfirm from "./DeleteConfirm";
import {
  useCategories,
  useCreateCategory,
  useAddSubCategory,
  useDeleteCategory,
  useDeleteSubCategory,
} from "../store/categories.queries";
import toast from "react-hot-toast";

const getErrorMessage = (error, fallback) =>
  error?.response?.data?.message || error?.message || fallback;

export default function CategoryManager() {
  const { data: categories = [], isLoading } = useCategories();
  const [newCategoryName, setNewCategoryName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState("");
  const [newSubCategoryName, setNewSubCategoryName] = useState("");

  const createCategory = useCreateCategory();
  const addSubCategory = useAddSubCategory();
  const deleteCategory = useDeleteCategory();
  const deleteSubCategory = useDeleteSubCategory();

  const selectedCategory = categories.find((c) => c._id === selectedCategoryId);

  // Keep the selected category valid as the list refreshes (e.g. after a delete)
  useEffect(() => {
    if (selectedCategoryId && !categories.some((c) => c._id === selectedCategoryId)) {
      setSelectedCategoryId("");
    }
  }, [categories, selectedCategoryId]);

  useEffect(() => {
    setSelectedSubCategoryId("");
  }, [selectedCategoryId]);

  const handleCreateCategory = () => {
    if (!newCategoryName.trim()) return;
    createCategory.mutate(newCategoryName.trim(), {
      onSuccess: () => {
        toast.success("Category created");
        setNewCategoryName("");
      },
      onError: (error) => {
        toast.error(getErrorMessage(error, "Failed to create category"));
      },
    });
  };

  const handleAddSubCategory = () => {
    if (!newSubCategoryName.trim() || !selectedCategoryId) return;
    addSubCategory.mutate(
      { categoryId: selectedCategoryId, subCategoryName: newSubCategoryName.trim() },
      {
        onSuccess: () => {
          toast.success("Sub-category added");
          setNewSubCategoryName("");
        },
        onError: (error) => {
          toast.error(getErrorMessage(error, "Failed to add sub-category"));
        },
      }
    );
  };

  const handleDeleteCategory = () => {
    deleteCategory.mutate(selectedCategoryId, {
      onSuccess: () => {
        toast.success("Category deleted");
        setSelectedCategoryId("");
      },
      onError: (error) => {
        toast.error(getErrorMessage(error, "Failed to delete category"));
      },
    });
  };

  const handleDeleteSubCategory = () => {
    deleteSubCategory.mutate(
      { categoryId: selectedCategoryId, subCategoryId: selectedSubCategoryId },
      {
        onSuccess: () => {
          toast.success("Sub-category deleted");
          setSelectedSubCategoryId("");
        },
        onError: (error) => {
          toast.error(getErrorMessage(error, "Failed to delete sub-category"));
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="space-y-4 max-w-xl">
        <Skeleton className="h-20 w-full rounded-md" />
        <Skeleton className="h-20 w-full rounded-md" />
      </div>
    );
  }

  const selectedSubCategory = selectedCategory?.subCategories.find(
    (s) => s._id === selectedSubCategoryId
  );

  return (
    <div className="flex gap-6">
      {/* Add category */}
      <div className="bg-muted p-4 rounded-sm flex-1">
        <Label className="font-semibold block mb-2">Add New Category</Label>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Category name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreateCategory()}
            className="flex-1"
          />
          <Button
            type="button"
            disabled={createCategory.isPending || !newCategoryName.trim()}
            onClick={handleCreateCategory}
            className="bg-red-600 hover:bg-red-700 text-white font-bold shrink-0"
          >
            <Plus className="mr-1 h-4 w-4" /> Add
          </Button>
        </div>
      </div>

      {/* Select category to manage */}
      <div className="bg-muted p-4 rounded-sm flex-1">
        <Label className="font-semibold block mb-2">Select Category</Label>
        <div className="flex items-center gap-2">
          <Select value={selectedCategoryId} onValueChange={setSelectedCategoryId}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a category to manage" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat._id} value={cat._id}>
                  {cat.categoryName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedCategory && (
            <DeleteConfirm
              title="Delete this category?"
              description={`This will permanently delete "${selectedCategory.categoryName}". If any products still use it, deletion will be blocked.`}
              onConfirm={handleDeleteCategory}
            >
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="text-muted-foreground hover:text-destructive shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </DeleteConfirm>
          )}
        </div>
      </div>

      {/* Sub-categories for the selected category */}
      {selectedCategory && (
        <div className="bg-muted p-4 rounded-sm">
          <Label className="font-semibold block mb-2">
            Sub-categories in "{selectedCategory.categoryName}"
          </Label>

          <div className="flex items-center gap-2">
            <Select value={selectedSubCategoryId} onValueChange={setSelectedSubCategoryId}>
              <SelectTrigger className="w-full" disabled={!selectedCategory.subCategories.length}>
                <SelectValue
                  placeholder={
                    selectedCategory.subCategories.length
                      ? "Choose a sub-category"
                      : "No sub-categories yet"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {selectedCategory.subCategories.map((sub) => (
                  <SelectItem key={sub._id} value={sub._id}>
                    {sub.subCategoryName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedSubCategory && (
              <DeleteConfirm
                title="Delete this sub-category?"
                description={`This will permanently delete "${selectedSubCategory.subCategoryName}". If any products still use it, deletion will be blocked.`}
                onConfirm={handleDeleteSubCategory}
              >
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </DeleteConfirm>
            )}
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Input
              placeholder="New sub-category name"
              value={newSubCategoryName}
              onChange={(e) => setNewSubCategoryName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddSubCategory()}
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              disabled={addSubCategory.isPending || !newSubCategoryName.trim()}
              onClick={handleAddSubCategory}
              className="shrink-0"
            >
              <Plus className="mr-1 h-4 w-4" /> Add
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
