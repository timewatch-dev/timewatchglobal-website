"use client";

import React, { useEffect } from "react";
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
            <Link href={"/products"}>
            Products
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className={"border border-primary !w-[98vw] -translate-x-[44.95%] left-1/2."}
          >
            <Tabs
              defaultValue={products[0]?.categoryName}
              // orientation="horizontical"
              className="flex flex-row w-full min-h-[260px] overflow-hidden space-x-4"
            >
              {/* list */}
              <TabsList className="flex flex-col space-y-2 border-r pr-2 shadow-none justify-start bg-transparent border-none border">
                {products?.map((pro, index) => {
                  // const TabIcon = tab.icon;
                  // console.log("pro", pro);
                  return (
                    <TabsTrigger
                      key={index}
                      value={pro.categoryName}
                      className="gap-2 text-left mr-auto !shadow-none bg-secondary/10 data-[state=active]:bg-primary/80 data-[state=active]:text-white min-w-[300px] justify-start cursor-pointer border border-l-2 py-3 "
                    >
                      {/* {TabIcon && (
                        <TabIcon size={16} className="text-inherit" />
                      )} */}
                      {pro.categoryName}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {/* content */}
              {products?.map((pro, productIndex) => (
                <div className="flex !m-0" key={productIndex}>
                  <TabsContent
                    key={productIndex}
                    value={pro.categoryName}
                    className="w-full"
                  >
                    <ul className="space-y-4 grid grid-cols-4 gap-4">
                      {pro?.subCategories?.map((subCat, catIndex) => (
                        <li key={catIndex}>
                          <span className="text-black font-semibold block mb-1">
                            {subCat.subCategoryName}
                          </span>

                          {subCat?.products
                            ?.slice(0, 3)
                            .map((product, subCatIndex) => (
                              <Link
                                key={subCatIndex}
                                href={`/products/${seoFriendlySlug(pro.categoryName)}/${seoFriendlySlug(subCat.subCategoryName)}/${seoFriendlySlug(product.productName)}`}
                                className="block text-[16px] hover:text-primary mb-1"
                              >
                                {/* {console.log("product", pro)} */}
                                {product.productName}
                              </Link>
                            ))}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </div>
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
