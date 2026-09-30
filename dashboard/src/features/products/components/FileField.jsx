import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { getOriginalFilename } from "@/lib/stringChanges";
import { getImageUrl } from "@/lib/getImageUrl";

export default function FileField({ label, fieldName, value, setFieldValue }) {
  const isExistingFile = typeof value === "string" && value !== "";

  return (
    <div>
      <Label>{label}</Label>
      {isExistingFile ? (
        <div className="flex items-center justify-between bg-card p-2 rounded border mt-1">
          <span className="text-sm text-foreground truncate max-w-[200px]">
            <a
              href={getImageUrl(value)}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              {getOriginalFilename(value.split("/").pop())}
            </a>
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-destructive hover:text-destructive/80"
            onClick={() => setFieldValue(fieldName, "")}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <Input
          type="file"
          name={fieldName}
          className="mt-1"
          onChange={(e) => {
            setFieldValue(fieldName, e.currentTarget.files[0]);
          }}
        />
      )}
    </div>
  );
}
