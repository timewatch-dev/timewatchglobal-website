"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import LandingPopupForm from "@/components/forms/LandingPopupForm"; // ✅ your existing success popup
import axiosInstance from "@/lib/axiosInstance";

export default function CatalogueDownload({ downloadLink, buttonVariant }) {
  const [open, setOpen] = useState(false); // controls the form popup
  const [success, setSuccess] = useState(false); // controls the success popup

  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // ✅ POST request using axiosInstance
        const res = await axiosInstance.post("/form/landing-popup", values);

        // Optional: check success response
        if (res.status !== 201 || !res.data.success) {
          throw new Error("Submission failed");
        }

        // ✅ Reset form and show success popup
        resetForm();
        setOpen(false);
        setSuccess(true);

        // ✅ Trigger the catalogue download automatically
        const link = document.createElement("a");
        link.href = downloadLink; // update this path
        link.download = "Timewatch-Catalogue.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
      } catch (err) {
        console.error("Error submitting form:", err);
        alert("Something went wrong. Please try again later.");
      }
    },
  });

  return (
    <>
      {/* ✅ The button anywhere on your site */}
      <Button
        onClick={() => setOpen(true)}
        variant={buttonVariant}
        className="px-8 !py-[28px]"
      >
        Download Catalogue
      </Button>

      {/* ✅ Popup Form */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl shadow-xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center">
              Download Our Catalogue
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
            {/* Name */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit & Download"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* ✅ Success Popup */}
      {success && (
        <LandingPopupForm
          heading="Thank You!"
          download="/downloads/timewatch-catalogue.pdf"
        />
      )}
    </>
  );
}
