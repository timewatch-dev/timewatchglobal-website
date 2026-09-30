import React, { useRef, useState } from "react";
import { FieldArray } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Sparkles, X } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { extractSpecsFromImage } from "../utils/extractWithAI";

export default function SpecsSection({ table, setFieldValue, handleChange }) {
  const specImageInputRef = useRef(null);
  const [aiSpecsLoading, setAiSpecsLoading] = useState(false);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleSpecImageSelected = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    const newRows = await extractSpecsFromImage(file, setAiSpecsLoading);
    if (newRows) {
      setFieldValue("table", [...table, ...newRows]);
    }
  };

  return (
    <div className="col-span-3">
      <div className="flex items-center justify-between mb-2">
        <Label className="font-semibold text-foreground">Technical Specifications</Label>
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
          {table.length > 0 && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="text-destructive hover:text-destructive"
              onClick={() => setFieldValue("table", [])}
            >
              <X className="mr-1 h-4 w-4" /> Clear All
            </Button>
          )}
        </div>
      </div>
      <FieldArray name="table">
        {({ push, remove }) => (
          <div className="space-y-2">
            <DragDropContext
              onDragEnd={(result) => {
                if (!result.destination) return;
                const items = reorder(
                  table,
                  result.source.index,
                  result.destination.index
                );
                setFieldValue("table", items);
              }}
            >
              <Droppable droppableId="table-list">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-2"
                  >
                    {table.map((row, index) => (
                      <Draggable
                        key={`table-${index}`}
                        draggableId={`table-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="border border-border bg-card p-3 rounded flex flex-col md:flex-row gap-2 items-center shadow-sm"
                          >
                            <span className="text-muted-foreground font-bold cursor-grab pr-2">☰</span>
                            <Input
                              name={`table[${index}].column1`}
                              placeholder="Specification Key (e.g. Dimensions)"
                              value={row.column1}
                              onChange={handleChange}
                              className="flex-1"
                            />
                            <Input
                              name={`table[${index}].column2`}
                              placeholder="Specification Value (e.g. 150x80x20 mm)"
                              value={row.column2}
                              onChange={handleChange}
                              className="flex-1"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              onClick={() => remove(index)}
                              className="h-9 w-9 flex items-center justify-center"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <Button
              type="button"
              variant="outline"
              className="mt-2"
              onClick={() => push({ column1: "", column2: "" })}
            >
              <Plus className="mr-1 h-4 w-4" /> Add Specification
            </Button>
          </div>
        )}
      </FieldArray>
    </div>
  );
}
