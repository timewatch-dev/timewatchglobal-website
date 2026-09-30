import React from "react";
import { FieldArray } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, X } from "lucide-react";
import Image from "next/image";
import { getImageUrl } from "@/lib/getImageUrl";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function FeaturesSection({ features, setFieldValue, handleChange }) {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <div className="col-span-3">
      <Label className="font-semibold block mb-2 text-foreground">Features</Label>
      <FieldArray name="features">
        {({ push, remove }) => (
          <div className="space-y-2">
            <DragDropContext
              onDragEnd={(result) => {
                if (!result.destination) return;
                const items = reorder(
                  features,
                  result.source.index,
                  result.destination.index
                );
                setFieldValue("features", items);
              }}
            >
              <Droppable droppableId="features-list">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-3"
                  >
                    {features.map((feature, index) => (
                      <Draggable
                        key={`feature-${index}`}
                        draggableId={`feature-${index}`}
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
                              name={`features[${index}].title`}
                              placeholder="Feature Title"
                              value={feature.title}
                              onChange={handleChange}
                              className="flex-1"
                            />
                            {typeof feature.image === "string" && feature.image ? (
                              <div className="flex items-center gap-2">
                                <div className="relative w-16 h-10 border rounded overflow-hidden">
                                  <Image
                                    src={getImageUrl(feature.image)}
                                    alt="feature"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                  />
                                </div>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  className="text-destructive hover:text-destructive/80 h-8 w-8"
                                  onClick={() => setFieldValue(`features[${index}].image`, "")}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            ) : (
                              <Input
                                type="file"
                                className="w-full md:w-auto"
                                onChange={(e) =>
                                  setFieldValue(
                                    `features[${index}].image`,
                                    e.currentTarget.files[0]
                                  )
                                }
                              />
                            )}
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
              onClick={() => push({ title: "", image: "" })}
            >
              <Plus className="mr-1 h-4 w-4" /> Add Feature
            </Button>
          </div>
        )}
      </FieldArray>
    </div>
  );
}
