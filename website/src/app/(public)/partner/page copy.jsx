"use client"
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Shield,
  Users,
  Award,
  CheckCircle,
  Upload,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  Building,
  FileText,
  Star,
  ArrowRight,
  Handshake,
} from "lucide-react";

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  // landline: Yup.string()
  //   .matches(/^[0-9\s\-\+\(\)]{7,15}$/, "Invalid landline number"),
  // address: Yup.string()
  //   .min(10, "Address must be at least 10 characters")
  //   .required("Address is required"),
  pincode: Yup.string()
    .required("Pincode is required"),
  country: Yup.string(),
  state: Yup.string(),
  companyName: Yup.string()
    .min(3, "Company name must be at least 3 characters"),
  // dateOfEstablishment: Yup.date(),
  //   .max(new Date(), "Date cannot be in the future")
  //   .required("Date of establishment is required"),
  // experienceInBusinessLine: Yup.string().required("Experience is required"),
  // annualTurnover: Yup.string().required("Annual turnover is required"),
  // productsDealing: Yup.string().required("Products dealing is required"),
  // salesTeamSize: Yup.string().required("Sales team size is required"),
  // fieldStaffSize: Yup.string().required("Field staff size is required"),
  staffSize: Yup.string(),
  gstCertificate: Yup.mixed().required("GST Certificate is required"),
  panCard: Yup.mixed().required("PAN Card is required"),
});

const PartnerPage = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    mobileNumber: "",
    landline: "",
    address: "",
    pincode: "",
    country: "India",
    state: "",
    companyName: "",
    // dateOfEstablishment: "",
    // experienceInBusinessLine: "",
    // annualTurnover: "",
    // productsDealing: "",
    // salesTeamSize: "",
    fieldStaffSize: "",
    staffSize: "",
    gstCertificate: null,
    panCard: null,
  };

  const experienceOptions = [
    "Less than 1 year",
    "1-3 years",
    "3-5 years",
    "5-10 years",
    "More than 10 years",
  ];

  const turnoverOptions = [
    "Less than 1 Crore",
    "1-5 Crores",
    "5-10 Crores",
    "10-50 Crores",
    "More than 50 Crores",
  ];

  const productOptions = [
    "Biometric Devices",
    "Access Control Systems",
    "Time Attendance Systems",
    "Security Solutions",
    "Software Solutions",
    "All of the above",
  ];

  const teamSizeOptions = [
    "1-5 members",
    "6-10 members",
    "11-20 members",
    "21-50 members",
    "More than 50 members",
  ];

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log("Form submitted:", values);
      setSubmitStatus("success");
      resetForm();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
            Become a BiometricPro partner and unlock new opportunities in the growing biometric technology market
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Shield className="w-12 h-12 text-[#d63438] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">Exclusive Territory</h3>
              <p className="text-gray-600">Get exclusive rights in your region</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Award className="w-12 h-12 text-[#d63438] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">Training & Support</h3>
              <p className="text-gray-600">Comprehensive training and ongoing support</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Star className="w-12 h-12 text-[#d63438] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">High Margins</h3>
              <p className="text-gray-600">Attractive profit margins and incentives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#d63438] to-[#6d6f72] p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Partner Registration</h2>
              <p className="text-white/90">Fill out the form below to start your partnership journey</p>
            </div>

            <div className="p-8">
              {submitStatus === "success" && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-green-800">Application Submitted Successfully!</h4>
                    <p className="text-green-600">We'll review your application and get back to you within 2-3 business days.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 font-semibold">There was an error submitting your application. Please try again.</p>
                </div>
              )}

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, setFieldValue, values }) => (
                  <Form className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#6d6f72] mb-6 flex items-center">
                        <User className="w-6 h-6 mr-3" />
                        Information
                      </h3>
                      <div className="grid md:grid-cols-6 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Field
                            name="name"
                            type="text"
                            placeholder="e.g., John Doe"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
                          />
                          <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Field
                            name="email"
                            type="email"
                            placeholder="e.g., john@example.com"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Mobile Number *
                          </label>
                          <Field
                            name="mobileNumber"
                            type="text"
                            placeholder="e.g., 9876543210"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
                          />
                          <ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="md:col-span-3">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Landline
                          </label>
                          <Field
                            name="landline"
                            type="text"
                            placeholder="e.g., 011-12345678"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
                          />
                          <ErrorMessage name="landline" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="md:col-span-3">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Address *
                          </label>
                          <Field
                            name="address"
                            // as="textarea"
                            // rows="3"
                            placeholder="Enter your complete address"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors resize-none"
                          />
                          <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Pincode *
                          </label>
                          <Field
                            name="pincode"
                            type="text"
                            placeholder="e.g., 110001"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
                          />
                          <ErrorMessage name="pincode" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Country *
                          </label>
                          <Field
                            name="country"
                            as="select"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
                          >
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                          </Field>
                          <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            State *
                          </label>
                          <Field
                            name="state"
                            type="text"
                            placeholder="Enter your state"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
                          />
                          <ErrorMessage name="state" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                    </div>

                    {/* Company Information */}
                    <div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Company Name *
                          </label>
                          <Field
                            name="companyName"
                            type="text"
                            placeholder="e.g., ABC Pvt. Ltd."
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
                          />
                          <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

 <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Number of Staff *
                          </label>
                          <Field
                            name="staffSize"
                            as="select"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors"
                          >
                            <option value="">Select Team Size</option>
                            {teamSizeOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </Field>
                          <ErrorMessage name="staffSize" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                    </div>

                  

                    {/* Document Upload */}
                    <div>
                  
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            GST Certificate  *
                          </label>
                          <div className="relative">
                            <input
                              type="file"
                              accept=".pdf"
                              onChange={(event) => {
                                setFieldValue("gstCertificate", event.currentTarget.files[0]);
                              }}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#d63438] file:text-white hover:file:bg-[#d63438]/90"
                            />
                            <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          </div>
                          <ErrorMessage name="gstCertificate" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            PAN Card *
                          </label>
                          <div className="relative">
                            <input
                              type="file"
                              accept=".pdf"
                              onChange={(event) => {
                                setFieldValue("panCard", event.currentTarget.files[0]);
                              }}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d63438] focus:ring-0 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#d63438] file:text-white hover:file:bg-[#d63438]/90"
                            />
                            <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          </div>
                          <ErrorMessage name="panCard" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-[#d63438] to-[#6d6f72] text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center mx-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            Processing Application...
                          </>
                        ) : (
                          <>
                            Join As A Partner
                            <ArrowRight className="w-6 h-6 ml-3" />
                          </>
                        )}
                      </button>
                      <p className="text-gray-500 text-sm mt-4">
                        By submitting this form, you agree to our terms and conditions
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
            <h2 className="text-3xl font-bold text-[#6d6f72] mb-4">Why Partner With BiometricPro?</h2>
            <p className="text-xl text-gray-600">Join a growing network of successful partners</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d63438] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">Market Leader</h3>
              <p className="text-gray-600">Partner with the industry's most trusted brand</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6d6f72] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">Proven Success</h3>
              <p className="text-gray-600">Track record of helping partners grow their business</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">Dedicated Support</h3>
              <p className="text-gray-600">24/7 technical and sales support for all partners</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">High ROI</h3>
              <p className="text-gray-600">Competitive margins and attractive incentive programs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;