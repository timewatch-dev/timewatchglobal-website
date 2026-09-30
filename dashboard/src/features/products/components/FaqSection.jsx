import React from "react";
import { FieldArray } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function FaqSection({ productFaq, setFieldValue, handleChange }) {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <div className="col-span-3">
      <Label className="font-semibold block mb-2 text-foreground">Product FAQs</Label>
      <FieldArray name="productFaq">
        {({ push, remove }) => (
          <div className="space-y-2">
            <DragDropContext
              onDragEnd={(result) => {
                if (!result.destination) return;
                const items = reorder(
                  productFaq,
                  result.source.index,
                  result.destination.index
                );
                setFieldValue("productFaq", items);
              }}
            >
              <Droppable droppableId="faq-list">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-2"
                  >
                    {productFaq.map((faq, index) => (
                      <Draggable
                        key={`faq-${index}`}
                        draggableId={`faq-${index}`}
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
                              name={`productFaq[${index}].column1`}
                              placeholder="Question"
                              value={faq.column1}
                              onChange={handleChange}
                              className="flex-1"
                            />
                            <Textarea
                              name={`productFaq[${index}].column2`}
                              placeholder="Answer"
                              value={faq.column2}
                              onChange={handleChange}
                              className="flex-1 min-h-[40px]"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              onClick={() => remove(index)}
                              className="h-9 w-9 flex items-center justify-center shrink-0"
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
              <Plus className="mr-1 h-4 w-4" /> Add FAQ
            </Button>
          </div>
        )}
      </FieldArray>
    </div>
  );
}
