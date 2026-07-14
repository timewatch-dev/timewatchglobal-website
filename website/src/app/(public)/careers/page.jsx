"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Users,
  Target,
  Award,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Zap,
  Shield,
  Upload,
} from "lucide-react";
import axiosInstance from "@/lib/axiosInstance";
import EmailSuccessPopup from "@/components/forms/EmailSuccessPopup";

const validationSchema = Yup.object({
  roleApplyingFor: Yup.string().required(
    "Please specify the role you are applying for"
  ),
  fullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  contactNumber: Yup.string()
    .matches(/^[+]?[\d\s\-()]{10,}$/, "Please enter a valid contact number")
    .required("Contact number is required"),
  emailAddress: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  location: Yup.string().required("Location is required"),
  coverLetter: Yup.string()
    .min(50, "Cover letter must be at least 50 characters")
    .required("Cover letter is required"),
  resume: Yup.mixed().required("Resume is required"),
});



const CareerPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    try {
      console.log("Submitting career form:", values);
      setIsSuccess(false);

      // Create FormData
      const formData = new FormData();

      // Append all non-file fields
      formData.append("roleApplyingFor", values.roleApplyingFor || "");
      formData.append("fullName", values.fullName || "");
      formData.append("contactNumber", values.contactNumber || "");
      formData.append("emailAddress", values.emailAddress || "");
      formData.append("location", values.location || "");
      formData.append("coverLetter", values.coverLetter || "");

      // Append file (only if selected)
      if (values.resume && values.resume instanceof File) {
        formData.append("resume", values.resume);
      }

      // Submit to backend
      const response = await axiosInstance.post(`/form/career`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        setIsSuccess(true);
        resetForm();
        console.log("Career form submitted successfully!");
      }
    } catch (error) {
      console.error("Career form submission error:", error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance and wellness programs for you and your family",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Continuous learning opportunities, certifications, and skill development programs",
    },
    {
      icon: Zap,
      title: "Innovation Culture",
      description:
        "Work with cutting-edge technology and contribute to revolutionary security solutions",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Collaborative work environment with diverse, talented professionals",
    },
    {
      icon: Target,
      title: "Career Growth",
      description:
        "Clear career progression paths and leadership development opportunities",
    },
    {
      icon: Shield,
      title: "Job Security",
      description:
        "Stable employment with a growing company in the security technology sector",
    },
  ];

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Bengaluru, India",
      type: "Full-time",
    },
    {
      title: "Biometric Systems Specialist",
      department: "Product Development",
      location: "Delhi NCR, India",
      type: "Full-time",
    },
    {
      title: "Sales Manager - GCC Region",
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time",
    },
    {
      title: "Technical Support Engineer",
      department: "Customer Support",
      location: "Mumbai, India",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {isSuccess && <EmailSuccessPopup />}
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-sectext-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower Your Career Path with TimeWatch - Building the Future of
            Smart Security Solutions
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards your exciting career with TimeWatch
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12"></div>
        <div className="container flex flex-col xl:flex-row gap-5">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Why Choose TimeWatch?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a dynamic team that's revolutionizing security technology across India, UAE, and beyond
            </p>
          </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 flex-1">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#b82c30] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-sectext-secondary/5 rounded-3xl p-8 flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Apply Now
            </h2>
            <Formik
              initialValues={{
                roleApplyingFor: "",
                fullName: "",
                contactNumber: "",
                emailAddress: "",
                location: "",
                coverLetter:
                  "",
                resume: null,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Role Applying For{" "}
                        <span className="text-primary">*</span>
                      </label>
                      <Field
                        name="roleApplyingFor"
                        type="text"
                        placeholder="e.g., Software Engineer, Sales Manager"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                      <ErrorMessage
                        name="roleApplyingFor"
                        component="div"
                        className="text-primary text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <Field
                        name="fullName"
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-primary text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Contact Number <span className="text-primary">*</span>
                      </label>
                      <Field
                        name="contactNumber"
                        type="text"
                        placeholder="+91 9999999999"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                      <ErrorMessage
                        name="contactNumber"
                        component="div"
                        className="text-primary text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <Field
                        name="emailAddress"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                      <ErrorMessage
                        name="emailAddress"
                        component="div"
                        className="text-primary text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Location <span className="text-primary">*</span>
                    </label>
                    <Field
                      name="location"
                      type="text"
                      placeholder="City, State/Country"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="text-primary text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Cover Letter <span className="text-primary">*</span>
                    </label>
                    <Field
                      name="coverLetter"
                      as="textarea"
                      rows={6}
                      placeholder="Tell us why you want to join TimeWatch and what makes you the right fit for this role..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                    />
                    <ErrorMessage
                      name="coverLetter"
                      component="div"
                      className="text-primary text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Resume (PDF) <span className="text-primary">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">
                        Click to upload your resume
                      </p>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(event) => {
                          setFieldValue("resume", event.currentTarget.files[0]);
                        }}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                      />
                    </div>
                    <ErrorMessage
                      name="resume"
                      component="div"
                      className="text-primary text-sm mt-1"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-primary to-[#b82c30] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Explore exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-secondary">
                    {position.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>{position.department}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{position.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-primary/10 to-sectext-secondary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Questions About Careers?
          </h2>
          <p className="text-gray-600 mb-6">
            Our HR team is here to help you with any questions about
            opportunities at TimeWatch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:careers@timewatchindia.com"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              careers@timewatchindia.com
            </a>
            {/* <a
              href="tel:+919599953923"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              +91 95999 53923
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
