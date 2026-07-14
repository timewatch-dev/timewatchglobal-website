"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";
import * as Yup from "yup";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import EmailSuccessPopup from "./forms/EmailSuccessPopup";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^\+?[0-9\s]+$/, "Phone can only contain digits and +") // optional regex for allowed chars
    .min(10, "Phone must be at least 7 digits")
    .max(15, "Phone must be at most 15 digits"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  type: Yup.string().required("Type is required"),
  location: Yup.string(),
  message: Yup.string(),
});

const HomePageForm = ({ col, isRedirect = false, enquiryPage }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [dial, setDial] = useState("971");
  const router = useRouter();

  const initialValues = {
    name: "",
    phone: `+${dial} `, // starts with +91 initially
    email: "",
    location: "",
    message: "",
    type: "",
  };

  const handleSubmit = async (values, { resetForm, setErrors }) => {
    try {
      // reset success state before new attempt
      setIsSuccess(false);

      const newCustomer = await axiosInstance.post(`/form/customer`, values);

      if (newCustomer?.status === 201) {
        resetForm({
          values: {
            ...initialValues,
            phone: `+${dial} `,
          },
        });
        if (isRedirect) {
          router.push(`/thankyou-ppc`);
        } else {
          setIsSuccess(true);
        }
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        // Map backend validation errors into Formik
        setErrors(error.response.data.errors);
      } else {
        console.error("Unexpected error", error);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="space-y-6">
          {isSuccess && <EmailSuccessPopup />}

          <div
            className={`grid md:${col ? "grid-cols-1" : "grid-cols-2"} gap-6`}
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[#6d6f72] mb-2">
                Name
              </label>
              <Field
                type="text"
                name="name"
                placeholder="John"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#6d6f72] mb-2">
                Phone
              </label>
              <PhoneInput
                country={"in"}
                value={values.phone || "test"}
                onChange={(rawValue, country) => {
                  const dialCode = country.dialCode;
                  const numberWithoutCode = rawValue.slice(dialCode.length);
                  const formatted = `+${dialCode} ${numberWithoutCode.trim()}`;
                  setDial(dialCode);
                  setFieldValue("phone", formatted);
                }}
                enableSearch
                searchPlaceholder="Search country..."
                inputClass="!w-full !pl-12 !overflow-hidden !py-6 !rounded-xl !bg-transparent !border !border-gray-300 focus:!ring-2 focus:!ring-[#d63438] focus:!border-transparent !outline-none !transition-all"
                disableCountryCode={false} // keep country code visible
                disableDropdown={false} // allow changing if you want
                countryCodeEditable={false} // ✅ prevents removing +91
              />

              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#6d6f72] mb-2">
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            {/* type */}
            <div>
              <label className="block text-sm font-medium text-[#6d6f72] mb-2">
                Enquiry Type
              </label>

              <select
                name="type"
                value={values.type}
                onChange={(e) => setFieldValue("type", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
              >
                <option value="">-- Select --</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
              </select>

              <ErrorMessage
                name="type"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-[#6d6f72] mb-2">
              Location <span className="font-semibold">{`(Optional)`}</span>
            </label>
            <Field
              type="text"
              name="location"
              placeholder="Your Location"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#6d6f72] mb-2">
              Message <span className="font-semibold">{`(Optional)`}</span>
            </label>
            <Field
              as="textarea"
              rows="3"
              name="message"
              placeholder="Tell us about your requirements..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#d63438] focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-[#d63438] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b82c30] transition-all flex items-center justify-center space-x-2"
          >
            <span>Send Message</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default HomePageForm;
