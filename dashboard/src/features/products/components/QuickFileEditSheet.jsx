"use client";

import React, { useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FileEdit, Sparkles, Plus, Trash2, X } from "lucide-react";
import { useUpdateProduct } from "../store/products.queries";
import { getImageUrl } from "@/lib/getImageUrl";
import { getOriginalFilename } from "@/lib/stringChanges";
import { generateDescriptionFromImage, extractSpecsFromImage } from "../utils/extractWithAI";
import toast from "react-hot-toast";

const FILE_FIELDS = [
  { key: "datasheetFile", label: "Datasheet (DS)" },
  { key: "connectionDiagramFile", label: "Connection Diagram (CD)" },
  { key: "userManualFile", label: "User Manual (UM)" },
];

const initialDescription = (product) => product.description || "";
const initialKeyFeatures = (product) => (product.keyFeatures || []).join("\n");
const initialSpecs = (product) => (product.table?.length ? product.table : []);

export default function QuickFileEditSheet({ product }) {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState({});
  const [status, setStatus] = useState(product.status || "draft");
  const [description, setDescription] = useState(initialDescription(product));
  const [keyFeatures, setKeyFeatures] = useState(initialKeyFeatures(product));
  const [specs, setSpecs] = useState(initialSpecs(product));
  const [aiDescLoading, setAiDescLoading] = useState(false);
  const [aiSpecsLoading, setAiSpecsLoading] = useState(false);
  const updateMutation = useUpdateProduct();

  const descImageInputRef = useRef(null);
  const specImageInputRef = useRef(null);

  const handleFileChange = (key, file) => {
    setFiles((prev) => ({ ...prev, [key]: file }));
  };

  const handleOpenChange = (next) => {
    if (next) {
      setFiles({});
      setStatus(product.status || "draft");
      setDescription(initialDescription(product));
      setKeyFeatures(initialKeyFeatures(product));
      setSpecs(initialSpecs(product));
    }
    setOpen(next);
  };

  const handleDescImageSelected = async (e) => {
    const imageFile = e.target.files?.[0];
    e.target.value = "";
    if (!imageFile) return;

    const result = await generateDescriptionFromImage(imageFile, setAiDescLoading);
    if (result) {
      setDescription(result.description);
      if (result.keyFeatures.length) {
        setKeyFeatures(result.keyFeatures.join("\n"));
      }
    }
  };

  const handleSpecImageSelected = async (e) => {
    const imageFile = e.target.files?.[0];
    e.target.value = "";
    if (!imageFile) return;

    const newRows = await extractSpecsFromImage(imageFile, setAiSpecsLoading);
    if (newRows) {
      setSpecs((prev) => [...prev, ...newRows]);
    }
  };

  const updateSpecRow = (index, key, value) => {
    setSpecs((prev) => prev.map((row, i) => (i === index ? { ...row, [key]: value } : row)));
  };

  const removeSpecRow = (index) => {
    setSpecs((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const formData = new FormData();
    let hasChange = false;

    FILE_FIELDS.forEach(({ key }) => {
      if (files[key] instanceof File) {
        formData.append(key, files[key]);
        hasChange = true;
      }
    });

    if (status !== (product.status || "draft")) {
      formData.append("status", status);
      hasChange = true;
    }

    if (description !== initialDescription(product)) {
      formData.append("description", description);
      hasChange = true;
    }

    if (keyFeatures !== initialKeyFeatures(product)) {
      keyFeatures
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean)
        .forEach((feature, index) => {
          formData.append(`keyFeatures[${index}]`, feature);
        });
      hasChange = true;
    }

    if (JSON.stringify(specs) !== JSON.stringify(initialSpecs(product))) {
      // Sentinel lets the backend tell "cleared to zero rows" apart from "not sent"
      formData.append("tableTouched", "true");
      specs.forEach((row, index) => {
        formData.append(`table[${index}][column1]`, row.column1 || "");
        formData.append(`table[${index}][column2]`, row.column2 || "");
      });
      hasChange = true;
    }

    if (!hasChange) {
      toast.error("Change something before saving.");
      return;
    }

    updateMutation.mutate(
      { id: product._id, formData },
      {
        onSuccess: () => {
          toast.success("Product updated successfully");
          setFiles({});
          setOpen(false);
        },
        onError: (error) => {
          toast.error(error.message || "Failed to update product");
        },
      }
    );
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          title="Quick edit"
        >
          <FileEdit className="w-5 h-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-xl flex flex-col">
        <SheetHeader>
          <SheetTitle>Quick Edit</SheetTitle>
          <SheetDescription>{product.productName}</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto flex flex-col gap-4 px-4 pb-4">
          <div>
            <Label>Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description + Key Features, AI-generatable from an image */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <Label>Description</Label>
              <input
                type="file"
                accept="image/*"
                ref={descImageInputRef}
                className="hidden"
                onChange={handleDescImageSelected}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={aiDescLoading}
                onClick={() => descImageInputRef.current?.click()}
              >
                <Sparkles className="mr-1 h-4 w-4" />
                {aiDescLoading ? "Analyzing image..." : "Generate from image"}
              </Button>
            </div>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div>
            <Label>Key Features (one per line)</Label>
            <Textarea
              value={keyFeatures}
              onChange={(e) => setKeyFeatures(e.target.value)}
              placeholder="Enter each key feature on a new line"
              className="min-h-[80px] mt-1"
            />
          </div>

          {/* Technical specs, AI-extractable from an image */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <Label>Technical Specifications</Label>
              <input
                type="file"
                accept="image/*"
                ref={specImageInputRef}
                className="hidden"
                onChange={handleSpecImageSelected}
              />
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={aiSpecsLoading}
                  onClick={() => specImageInputRef.current?.click()}
                >
                  <Sparkles className="mr-1 h-4 w-4" />
                  {aiSpecsLoading ? "Extracting..." : "Extract from image"}
                </Button>
                {specs.length > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => setSpecs([])}
                  >
                    <X className="mr-1 h-4 w-4" /> Clear All
                  </Button>
                )}
              </div>
            </div>
            <div className="space-y-2 mt-1">
              {specs.map((row, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Input
                    placeholder="Key"
                    value={row.column1}
                    onChange={(e) => updateSpecRow(index, "column1", e.target.value)}
                    className="flex-1"
                  />
                  <Input
                    placeholder="Value"
                    value={row.column2}
                    onChange={(e) => updateSpecRow(index, "column2", e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeSpecRow(index)}
                    className="h-9 w-9 shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setSpecs((prev) => [...prev, { column1: "", column2: "" }])}
              >
                <Plus className="mr-1 h-4 w-4" /> Add Row
              </Button>
            </div>
          </div>

          {FILE_FIELDS.map(({ key, label }) => {
            const current = product[key];
            const selected = files[key];
            return (
              <div key={key}>
                <Label>{label}</Label>
                {current && (
                  <a
                    href={getImageUrl(current)}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm text-primary underline truncate mt-1"
                  >
                    View current: {getOriginalFilename(current.split("/").pop())}
                  </a>
                )}
                {selected && (
                  <p className="text-sm text-foreground mt-1 truncate">
                    Replacing with: {selected.name}
                  </p>
                )}
                <input
                  type="file"
                  className="mt-1 block w-full text-sm"
                  onChange={(e) => handleFileChange(key, e.target.files?.[0])}
                />
              </div>
            );
          })}
        </div>

        <SheetFooter>
          <Button
            type="button"
            disabled={updateMutation.isPending}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
            onClick={handleSave}
          >
            {updateMutation.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
