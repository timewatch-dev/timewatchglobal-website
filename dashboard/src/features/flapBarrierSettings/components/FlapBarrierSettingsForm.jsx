"use client";

import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { flapBarrierSettingsSchema } from "../validations/flapBarrierSettings.schema";
import {
  useFlapBarrierSettings,
  useUpdateFlapBarrierSettings,
} from "../store/flapBarrierSettings.queries";

export default function FlapBarrierSettingsForm() {
  const { data: settings, isLoading } = useFlapBarrierSettings();
  const updateMutation = useUpdateFlapBarrierSettings();

  const initialValues = {
    wideLaneMinWidth: settings?.wideLaneMinWidth ?? 600,
    wideLaneMaxWidth: settings?.wideLaneMaxWidth ?? 1000,
  };

  const handleSubmit = (values) => {
    updateMutation.mutate(
      {
        wideLaneMinWidth: Number(values.wideLaneMinWidth),
        wideLaneMaxWidth: Number(values.wideLaneMaxWidth),
      },
      {
        onSuccess: () => toast.success("Flap barrier settings updated"),
        onError: (error) =>
          toast.error(
            error?.response?.data?.message || error.message || "Failed to update settings"
          ),
      }
    );
  };

  if (isLoading) {
    return <p className="text-muted-foreground text-sm">Loading settings...</p>;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={flapBarrierSettingsSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, handleChange }) => (
        <Form className="flex flex-col gap-4 max-w-sm bg-muted p-4 rounded-sm">
          <div>
            <Label>Barrier Width — Minimum (mm)</Label>
            <Input
              type="number"
              name="wideLaneMinWidth"
              value={values.wideLaneMinWidth}
              onChange={handleChange}
            />
            <ErrorMessage
              name="wideLaneMinWidth"
              component="div"
              className="text-destructive text-sm mt-1"
            />
          </div>

          <div>
            <Label>Barrier Width — Maximum (mm)</Label>
            <Input
              type="number"
              name="wideLaneMaxWidth"
              value={values.wideLaneMaxWidth}
              onChange={handleChange}
            />
            <ErrorMessage
              name="wideLaneMaxWidth"
              component="div"
              className="text-destructive text-sm mt-1"
            />
          </div>

          <p className="text-xs text-muted-foreground">
            Customers on the Flap Barrier Layout Configurator can set their barrier width
            anywhere within this range. The number of barriers shown is simply how many
            times that width fits into their total available width.
          </p>

          <Button
            type="submit"
            disabled={updateMutation.isPending}
            className="mt-2 w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold"
          >
            {updateMutation.isPending ? "Saving..." : "Save Settings"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
