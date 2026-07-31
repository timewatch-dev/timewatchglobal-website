"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Download,
  FileDown,
  FileText,
  MessageCircleMore,
  Phone,
} from "lucide-react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import FaqDropdown from "./FaqDropdown";
import { Button } from "./ui/button";

const ProductDetails = ({ product }) => {
  if (!product) return null;

  const {
    productImage,
    productName,
    description,
    keyFeatures = [],
    features = [],
    datasheetFile,
    connectionDiagramFile,
    userManualFile,
    brochure,
    table = [],
    productFaq = [],
  } = product;

  // console.log("productImageproductImageproductImage", productImage)
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="lg:flex gap-20">
        {/* Main Product Image */}
        <div className="md:w-[550px]">
          <div className="w-full h-[300px] md:w-[550px] md:h-[500px] relative bg-gray-50 rounded-lg">
            <Image
              src={productImage || "/images/placeholder.jpeg"}
              alt={productName || "Product"}
              fill
              className="object-contain lg:p-16"
              sizes="(max-width: 768px) 300px, 550px"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4 flex-1">
          <h1 className="text-3xl font-bold">{productName}</h1>
          <p className="text-gray-600">{description}</p>

          {/* Features Section */}
          {features.length > 0 && (
            <div className="mt-2">
              <h2 className="text-2xl font-bold mb-3">Features</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-2 flex flex-col items-center text-center hover:shadow transition"
                  >
                    <div className="w-[50px] h-[50px] relative">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain"
                        sizes="50px"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Download Section */}
          {(datasheetFile || connectionDiagramFile || userManualFile) && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2">Download</h2>

              <div className="flex gap-2 flex-wrap">
                {datasheetFile && (
                  <Link
                    href={datasheetFile}
                    target="_blank"
                    download
                    className="flex flex-col justify-center w-[10rem] bg-gray-50 rounded-sm p-2 items-center hover:shadow"
                  >
                    <FileDown className="h-[3rem] w-[3rem] text-primary" />
                    <p>DataSheet</p>
                  </Link>
                )}

                {connectionDiagramFile && (
                  <Link
                    href={connectionDiagramFile}
                    target="_blank"
                    download
                    className="flex flex-col justify-center w-[10rem] bg-gray-50 rounded-sm p-2 items-center hover:shadow"
                  >
                    <FileDown className="h-[3rem] w-[3rem] text-primary" />
                    <p>Connection Diagram</p>
                  </Link>
                )}

                {userManualFile && (
                  <Link
                    href={userManualFile}
                    target="_blank"
                    download
                    className="flex flex-col justify-center w-[10rem] bg-gray-50 rounded-sm p-2 items-center hover:shadow"
                  >
                    <FileDown className="h-[3rem] w-[3rem] text-primary" />
                    <p>User Manual</p>
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Enquiry Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">
            <Button asChild className="text-[15px] md:text-[17px]">
              <Link href="tel:+91-9599953921">
                <Phone /> Enquire Now
              </Link>
            </Button>

            <Button asChild variant="secondary" className="hidden md:flex">
              <Link
                href="https://wa.me/+971523744121?text=Hello%F0%9F%91%8B%F0%9F%8F%BB%20TimeWatch%2C%0AI%27m%20Interested%20in%20your%20product%20or%20services%0APlease%20Assist%20me%21%20%20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircleMore />
                Enquire on Whatsapp
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="flex md:hidden text-[15px]"
            >
              <Link href="#">
                <MessageCircleMore />
                Whatsapp Now
              </Link>
            </Button>
          </div>

          {/* Brochure Button */}
          {brochure && (
            <a
              href={brochure}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#d63438] text-white rounded-lg shadow hover:bg-[#bb2e31]"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </a>
          )}
        </div>
      </div>

      {/* Product Specifications */}
      {table.length > 0 && (
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4">Product Specifications</h2>

          <Table>
            {/* <TableCaption>Product Specifications</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="text-2xl text-primary">Specification</TableHead>
                <TableHead className="text-2xl text-primary">Details</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {table.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-semibold text-lg">
                    {row.column1}
                  </TableCell>
                  <TableCell className="text-lg">{row.column2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* FAQ Section */}
      {productFaq?.length > 0 && (
        <div className="bg-gray-50 p-3 rounded-sm mt-10">
          <h2 className="text-2xl font-bold mb-0">FAQ</h2>
          <FaqDropdown productFaq={productFaq} />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
