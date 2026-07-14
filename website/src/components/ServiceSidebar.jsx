"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ServiceSidebarForm from "./forms/ServiceSidebarForm"
import { solutions } from "@/data/menuItems"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ContactForm from "./ContactForm"
import HomePageForm from "./HomePageForm"

export default function ServiceSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="bg-white rounded-2xl shadow-md px-6 py-4">
        <h3 className="!text-2xl font-bold mb-4 !text-primary">All Services</h3>

        <Accordion type="single" collapsible className="w-full">
          {solutions.map(({ category, categoryUrl, subCategories }) => (
            <AccordionItem key={category} value={category}>
              <AccordionTrigger className="text-md font-bold hover:no-underline cursor-pointer">
                {category}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {subCategories.map(({ subCategory, subCategoryUrl }) => {
                    const href = `/solutions/${categoryUrl}/${subCategoryUrl}`
                    const isActive = pathname === href

                    return (
                      <Link
                        key={subCategory}
                        href={href}
                        className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                          ${
                            isActive
                              ? "bg-secondary text-white"
                              : "bg-white text-gray-800 hover:bg-secondary/10"
                          }`}
                      >
                        <ArrowRight size={18} className="mt-[2px]" />
                        <span>{subCategory}</span>
                      </Link>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="bg-white rounded-2xl shadow-md px-6 py-4">
        {/* <ServiceSidebarForm /> */}
        <HomePageForm col="1"/>
      </div>
    </div>
  )
}
