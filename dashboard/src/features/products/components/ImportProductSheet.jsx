"use client";

import React, { useMemo, useRef, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileJson, Search, Check } from "lucide-react";
import toast from "react-hot-toast";
import { useProducts } from "../store/products.queries";
import { parseProductJson, productJsonToFormValues } from "../utils/productJson";

export default function ImportProductSheet({ onImport }) {
  const [open, setOpen] = useState(false);
  const [parsed, setParsed] = useState([]);
  // Kept so a relative attachment path can be resolved against the site the
  // file was exported from.
  const [meta, setMeta] = useState(null);
  const [search, setSearch] = useState("");
  const [pasted, setPasted] = useState("");
  const fileInputRef = useRef(null);

  const { data: existingProducts = [] } = useProducts();

  // Lets the picker flag entries this site already has, which is the whole point
  // when you are filling gaps between two sites.
  const existingNames = useMemo(
    () =>
      new Set(
        existingProducts
          .map((product) => product.productName?.trim().toLowerCase())
          .filter(Boolean)
      ),
    [existingProducts]
  );

  const reset = () => {
    setParsed([]);
    setMeta(null);
    setSearch("");
    setPasted("");
  };

  const load = (text, label) => {
    try {
      const { products, meta: fileMeta } = parseProductJson(text);
      setParsed(products);
      setMeta(fileMeta);
      setSearch("");
      toast.success(
        products.length === 1
          ? `Loaded 1 product from ${label}`
          : `Loaded ${products.length} products from ${label}`
      );
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      load(await file.text(), file.name);
    } catch {
      toast.error("Could not read that file.");
    }
  };

  const handlePaste = () => {
    if (!pasted.trim()) {
      toast.error("Paste some JSON first.");
      return;
    }
    load(pasted, "pasted JSON");
  };

  const choose = (product) => {
    onImport(productJsonToFormValues(product, meta));
    setOpen(false);
    reset();
  };

  const visible = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return parsed;
    return parsed.filter((product) =>
      [product.productName, product.categoryName, product.subCategoryName]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase().includes(term))
    );
  }, [parsed, search]);

  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) reset();
      }}
    >
      <SheetTrigger asChild>
        <Button type="button" variant="outline" className="cursor-pointer">
          <FileJson className="mr-2 h-4 w-4" /> Import JSON
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Import product from JSON</SheetTitle>
          <SheetDescription>
            Accepts a file exported from any Timewatch dashboard, or a raw
            <code className="mx-1 rounded bg-muted px-1 py-0.5 text-xs">/api/product/</code>
            response. Images and documents are copied onto this site when you save.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-5 px-4 pb-4">
          <div>
            <Label className="mb-2 block">Choose a .json file</Label>
            <input
              type="file"
              accept="application/json,.json"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFile}
            />
            <Button
              type="button"
              variant="secondary"
              className="w-full cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mr-2 h-4 w-4" /> Select JSON file
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-2 text-xs uppercase text-muted-foreground">
                or paste it
              </span>
            </div>
          </div>

          <div>
            <Textarea
              value={pasted}
              onChange={(event) => setPasted(event.target.value)}
              placeholder="Paste the JSON here..."
              className="min-h-[110px] font-mono text-xs"
            />
            <Button
              type="button"
              variant="secondary"
              className="mt-2 w-full cursor-pointer"
              onClick={handlePaste}
            >
              Load pasted JSON
            </Button>
          </div>

          {parsed.length > 0 && (
            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <Label>
                  Pick a product{" "}
                  <span className="font-normal text-muted-foreground">
                    ({visible.length} of {parsed.length})
                  </span>
                </Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer text-muted-foreground"
                  onClick={reset}
                >
                  Clear
                </Button>
              </div>

              {parsed.length > 1 && (
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search by name or category..."
                    className="pl-8"
                  />
                </div>
              )}

              <div className="max-h-[45vh] space-y-2 overflow-y-auto pr-1">
                {visible.map((product, index) => {
                  const alreadyHere = existingNames.has(
                    product.productName?.trim().toLowerCase()
                  );

                  return (
                    <button
                      key={`${product.productSlug || product.productName}-${index}`}
                      type="button"
                      onClick={() => choose(product)}
                      className="w-full cursor-pointer rounded border border-border bg-card p-3 text-left transition-colors hover:border-primary hover:bg-muted"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-medium text-foreground">
                          {product.productName}
                        </span>
                        {alreadyHere && (
                          <span className="flex shrink-0 items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                            <Check className="h-3 w-3" /> already here
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {[product.categoryName, product.subCategoryName]
                          .filter(Boolean)
                          .join(" / ") || "No category"}
                      </p>
                    </button>
                  );
                })}

                {visible.length === 0 && (
                  <p className="py-6 text-center text-sm text-muted-foreground">
                    No product matches that search.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <SheetFooter>
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
