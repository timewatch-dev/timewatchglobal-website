"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactFormSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

export default function ServiceSidebarForm() {
  const handleSubmit = (values, actions) => {
    console.log("Form submitted:", values);
    // TODO: send data to backend or email API
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
     <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <Field
                name="fullName"
                as={Input}
                placeholder="Full Name"
                className="border-gray-300 focus-visible:ring-red-500"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                as={Input}
                placeholder="Email"
                className="border-gray-300 focus-visible:ring-red-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div>
              <Field
                name="phone"
                type="tel"
                as={Input}
                placeholder="Phone"
                className="border-gray-300 focus-visible:ring-red-500"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div>
              <Field
                name="message"
                as={Textarea}
                placeholder="Your message..."
                rows={3}
                className="resize-none border-gray-300 focus-visible:ring-red-500"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#d63438] hover:bg-[#c12e31] transition-opacity"
            >
              {isSubmitting ? "Sending..." : "Send Now"}
            </Button>
          </Form>
        )}
      </Formik>
  );
}
