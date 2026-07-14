"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Phone, Mail, MapPin, Send, MessageCircle, User } from "lucide-react";
import axiosInstance from "@/lib/axiosInstance";
import EmailSuccessPopup from "./forms/EmailSuccessPopup";

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  };
  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    location: Yup.string()
      .min(3, "Location must be at least 3 characters")
      .max(100, "Location must be less than 100 characters")
      .required("Location is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must be less than 500 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      // reset success state before new attempt
      setSubmitting(true);
      setIsSuccess(false);

      const newCustomer = await axiosInstance.post(`/form/customer`, values);

      if (newCustomer?.status === 201) {
        setSubmitting(false);
        resetForm();
        setIsSuccess(true);
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
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className="space-y-4">
              {isSuccess && <EmailSuccessPopup />}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Full Name *
              </label>
              <Field
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-0"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Phone Number *
              </label>
              <Field
                name="phone"
                type="text"
                placeholder="Enter your 10-digit phone number"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-0"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email Address *
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-0"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Location *
              </label>
              <Field
                name="location"
                type="text"
                placeholder="Enter your city/location"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
              />
              <ErrorMessage
                name="location"
                component="div"
                className="text-red-500 text-sm mt-0"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message *
              </label>
              <Field
                name="message"
                as="textarea"
                rows="3"
                placeholder="Tell us about your requirements, questions, or how we can help you..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors resize-none"
              />
              <div className="flex justify-between items-center mt-1">
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
                {/* <div className="text-xs text-gray-400">
                  {values.message.length}
                </div> */}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#d63438] to-[#6d6f72] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 ml-3" />
                </>
              )}
            </button>

            {/* <p className="text-gray-500 text-sm text-center">
              We typically respond within 24 hours during business days
            </p> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
