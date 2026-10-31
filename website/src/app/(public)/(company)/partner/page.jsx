"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Shield,
  Users,
  Award,
  CheckCircle,
  Upload,
  User,
  Star,
  ArrowRight,
  Handshake,
} from "lucide-react";
import axiosInstance from "@/lib/axiosInstance";
import EmailSuccessPopup from "@/components/forms/EmailSuccessPopup";
import PhoneInput from "react-phone-input-2";

// ✅ Validation Schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .min(7, "Mobile number must contain at least 7 digits")
    .required("Phone number is required"),

  pinCode: Yup.string().required("Pincode is required"),

  country: Yup.string(),
  state: Yup.string(),

  companyName: Yup.string().min(
    3,
    "Company name must be at least 3 characters"
  ),

  staffSize: Yup.string(),

  gstCertificate: Yup.mixed()
    .required("GST Certificate is required")
    .test(
      "fileSize",
      "GST Certificate must be less than 2 MB",
      (value) => value && value.size <= 2 * 1024 * 1024
    ),

  panCard: Yup.mixed()
    .required("PAN Card is required")
    .test(
      "fileSize",
      "PAN Card must be less than 2 MB",
      (value) => value && value.size <= 2 * 1024 * 1024
    ),
});

const PartnerPage = () => {
  // const [submitStatus, setSubmitStatus] = useState(null);
  const [dial, setDial] = useState("971");
  const [isSuccess, setIsSuccess] = useState(false);

  // ✅ Initial form values
  const initialValues = {
    name: "",
    email: "",
    phone: `+${dial} `,
    landline: "",
    address: "",
    pinCode: "",
    country: "",
    state: "",
    companyName: "",
    staffSize: "",
    gstCertificate: null,
    panCard: null,
  };

  // ✅ Dropdown options
  const teamSizeOptions = [
    "1-5 members",
    "6-10 members",
    "11-20 members",
    "21-50 members",
    "More than 50 members",
  ];

  const handlePartnerSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    setIsSuccess(false);
    try {
      const formData = new FormData();

      // Append all fields
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      // Debug check
      for (let [key, val] of formData.entries()) {
        console.log(key, val);
      }

      // const newPartner = await axiosInstance.post(`/form/partner`, formData);

      // console.log("newPartner", newPartner);

      // if (newPartner?.status === 200) {
      //   resetForm();
      //   setIsSuccess(true);
      // }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        // Map backend validation errors into Formik
        setErrors(error.response.data.errors);
      } else {
        console.error("Unexpected error", error);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isSuccess && <EmailSuccessPopup />}
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#d63438] rounded-full flex items-center justify-center">
              <Handshake className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            Join Our Partner Network
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Become a BiometricPro partner and unlock new opportunities in the
            growing biometric technology market
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Shield className="w-12 h-12 text-[#d63438] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                Exclusive Territory
              </h3>
              <p className="text-gray-600">
                Get exclusive rights in your region
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Award className="w-12 h-12 text-[#d63438] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                Training & Support
              </h3>
              <p className="text-gray-600">
                Comprehensive training and support
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Star className="w-12 h-12 text-[#d63438] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                High Margins
              </h3>
              <p className="text-gray-600">Attractive profit margins</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-[#d63438] to-[#6d6f72] p-8 text-center">
              <h2 className="text-[1.5rem] md:text-3xl font-bold text-white mb-2">
                Partner Registration
              </h2>
              <p className="text-white/90">
                Fill out the form below to start your partnership journey
              </p>
            </div>

            <div className="p-8">
              {/* ================= FORM START ================= */}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handlePartnerSubmit}
              >
                {({ isSubmitting, setFieldValue, values }) => (
                  <Form className="space-y-8">
                    {/* ---------- Personal Info ---------- */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#6d6f72] mb-6 flex items-center">
                        <User className="w-6 h-6 mr-3" /> Information
                      </h3>

                      <div className="grid md:grid-cols-6 gap-6">
                        {/* Full Name */}
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Field
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438]"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        {/* Email */}
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Field
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438]"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        {/* Phone */}
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Mobile Number *
                          </label>
                          <PhoneInput
                            country={"in"}
                            value={values.phone || "test"}
                            onChange={(rawValue, country) => {
                              const dialCode = country.dialCode;
                              const numberWithoutCode = rawValue.slice(
                                dialCode.length
                              );
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
                        </div>

                        {/* Landline */}
                        <div className="md:col-span-3">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Landline
                          </label>
                          <Field
                            name="landline"
                            type="text"
                            placeholder="011-12345678"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438]"
                          />
                        </div>

                        {/* Address */}
                        <div className="md:col-span-3">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Address *
                          </label>
                          <Field
                            name="address"
                            placeholder="Complete address"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438]"
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>

                      {/* pinCode / Country / State */}
                      <div className="grid md:grid-cols-3 gap-6 mt-6">
                        {/* pinCode */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            zipCode {"(P.O. Box)"} *
                          </label>
                          <Field
                            name="pinCode"
                            type="text"
                            placeholder="110001"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438]"
                          />
                          <ErrorMessage
                            name="pinCode"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        {/* Country */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Country *
                          </label>
                          <Field
                            name="country"
                            type="text"
                            placeholder="Your Country"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438]"
                          />
                          <ErrorMessage
                            name="country"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        {/* <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Country *
                          </label>
                          <Field
                            name="country"
                            as="select"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438]"
                          >
                            <option value="">Select</option>
                            <option value="India">India</option>
                            <option value="Uae">Uae</option>
                          </Field>
                        </div> */}

                        {/* State */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            State *
                          </label>
                          <Field
                            name="state"
                            type="text"
                            placeholder="Your state"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438]"
                          />
                          <ErrorMessage
                            name="state"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* ---------- Company Info ---------- */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Company Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <Field
                          name="companyName"
                          type="text"
                          placeholder="ABC Pvt. Ltd."
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438]"
                        />
                        <ErrorMessage
                          name="companyName"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Staff Size */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Number of Staff *
                        </label>
                        <Field
                          name="staffSize"
                          as="select"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438]"
                        >
                          <option value="">Select Team Size</option>
                          {teamSizeOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="staffSize"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>

                    {/* ---------- Document Uploads ---------- */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* GST Certificate */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          GST Certificate *
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                              setFieldValue(
                                "gstCertificate",
                                e.currentTarget.files[0]
                              )
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl file:bg-[#d63438] file:text-white file:rounded-full file:py-2 file:px-4"
                          />
                          <Upload className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                        <ErrorMessage
                          name="gstCertificate"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* PAN Card */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          PAN Card *
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                              setFieldValue("panCard", e.currentTarget.files[0])
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl file:bg-[#d63438] file:text-white file:rounded-full file:py-2 file:px-4"
                          />
                          <Upload className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                        <ErrorMessage
                          name="panCard"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>

                    {/* ---------- Submit Button ---------- */}
                    <div className="text-center pt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-[#d63438] to-[#6d6f72] text-white px-6 md:px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 flex items-center mx-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            Join As A Partner
                            <ArrowRight className="w-6 h-6 ml-3" />
                          </>
                        )}
                      </button>
                      <p className="text-gray-500 text-sm mt-4">
                        By submitting this form, you agree to our terms and
                        conditions
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#6d6f72] mb-4">
              Why Partner With BiometricPro?
            </h2>
            <p className="text-xl text-gray-600">
              Join a growing network of successful partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d63438] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                Market Leader
              </h3>
              <p className="text-gray-600">
                Partner with the industry's most trusted brand
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#6d6f72] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                Proven Success
              </h3>
              <p className="text-gray-600">
                Track record of helping partners grow their business
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                Dedicated Support
              </h3>
              <p className="text-gray-600">
                24/7 technical and sales support for all partners
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                High ROI
              </h3>
              <p className="text-gray-600">
                Competitive margins and attractive incentive programs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
