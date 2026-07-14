"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { menuItems } from "@/data/menuItems";
import { ChevronRight } from "lucide-react";

import axiosInstance from "@/lib/axiosInstance";
import seoFriendlySlug from "@/lib/seoFriendlySlug";

export function HeaderNavigationMenu() {
  const [activeTab, setActiveTab] = useState(products[0]?.categoryName);
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:!bg-transparent !bg-transparent data-[active=true]:!text-primary hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1"
          >
            <Link href={"/"}>Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:!bg-transparent hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1">
            {/* {Icon && <Icon size={18} />} */}
            <Link href={"/products"}>Products</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className={
              "container border border-gray-100 bg-gray-50 !shadow-none left-[50%] translate-x-[-47.7%] !w-[98vw]"
            }
          >
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="flex flex-row w-full min-h-[260px] overflow-hidden space-x-4"
            >
              {/* list */}
              <div className="bg-gray-50 rounded-sm">
                <TabsList className="flex flex-col space-y-2 border-r pr-2 shadow-none justify-start bg-transparent border-none">
                  {products?.map((pro, index) => (
                    <TabsTrigger
                      key={index}
                      value={pro.categoryName}
                      onMouseEnter={() => setActiveTab(pro.categoryName)} // hover instead of click
                      className="gap-2 text-left mr-auto !shadow-none bg-transparent 
              data-[state=active]:bg-primary/80 data-[state=active]:text-white 
              min-w-[300px] cursor-pointer border border-l-2 py-3 flex items-center justify-between"
                    >
                      {pro.categoryName} {activeTab === pro.categoryName && (<span><ChevronRight/></span>)} 
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* content */}
              {products?.map((pro, productIndex) => (
                <TabsContent
                  key={productIndex}
                  value={pro.categoryName}
                  className="w-full"
                >
                  <ul className="space-y-4 flex flex-wrap gap-x-20">
                    {pro?.subCategories
                      ?.slice()
                      ?.sort((a, b) => b.products.length - a.products.length)
                      .map((subCat, catIndex) => (
                        <li key={catIndex} className="w-1/6">
                          <span className="text-black font-semibold block mb-1">
                            {subCat.subCategoryName}
                          </span>

                          {subCat?.products
                            ?.slice(0, 10)
                            .map((product, subCatIndex) => (
                              <Link
                                key={subCatIndex}
                                href={`/products/${seoFriendlySlug(
                                  pro.categoryName
                                )}/${seoFriendlySlug(
                                  subCat.subCategoryName
                                )}/${seoFriendlySlug(product.productName)}`}
                                className="block text-[16px] hover:text-primary mb-1"
                              >
                                {product.productName}
                              </Link>
                            ))}
                        </li>
                      ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:!bg-transparent !bg-transparent data-[active=true]:!text-primary hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1"
          >
            <Link href={"/downloads"}>Downloads</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:!bg-transparent !bg-transparent data-[active=true]:!text-primary hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1"
          >
            <Link href={"/solutions"}>Solutions</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="hover:!bg-transparent !bg-transparent data-[active=true]:!text-primary hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1"
          >
            <Link href={"/contact"}>Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
