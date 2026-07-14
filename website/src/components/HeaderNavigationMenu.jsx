"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";

import seoFriendlySlug from "@/lib/seoFriendlySlug";
import { useProductStore } from "@/store/useProductStore";
import SolutionsDropdown from "./SolutionsDropdown";

export function HeaderNavigationMenu() {
  const { products, getFormatedProduct } = useProductStore();
  const [activeTab, setActiveTab] = useState(products[0]?.categoryName);

  const pathname = usePathname();

  useEffect(() => {
    getFormatedProduct();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setActiveTab(products[0].categoryName);
    }
  }, [products]);

  const getLinkClass = (href, isStartsWith = false) => {
    const isActive = isStartsWith
      ? pathname.startsWith(href)
      : pathname === href;
    return `hover:!bg-transparent !bg-transparent 
      ${isActive ? "text-primary" : "!text-black"} 
      data-[active=true]:!text-primary 
      hover:!text-primary focus:!text-primary 
      text-[18px] font-semibold flex items-center gap-1`;
  };

  const categoryOrder = [
    "TIME ATTENDANCE AND ACCESS CONTROL",
    "ENTRANCE CONTROL",
    "SOFTWARE AND APPLICATIONS",
    "PARKING AND TRAFFIC CONTROL",
    "INSPECTION CONTROL",
    "UL LISTED EM LOCKS",
    "ACCESSORIES",
  ];

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-4">
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={getLinkClass("/")}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Products */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={getLinkClass("/products", true)}>
            <Link href="/products">Products</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent
            // forceMount
            className="!w-[96vw] 2xl:!w-[80vw] !-translate-x-[33%] 2xl:!translate-x-[-36%]  z-50 !top-[45px] border border-gray-100 bg-gray-50 !shadow-none 
           
            "
          >
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="flex flex-row w-full min-h-[260px] overflow-hidden space-x-4"
            >
              {/* Left Category List */}
              <div className="bg-gray-50 rounded-sm">
                <TabsList className="flex flex-col space-y-2 border-r pr-2 shadow-none justify-start bg-transparent border-none">
                  {products
                    ?.sort((a, b) => {
                      const indexA = categoryOrder.indexOf(
                        a.categoryName?.toUpperCase()
                      );
                      const indexB = categoryOrder.indexOf(
                        b.categoryName?.toUpperCase()
                      );

                      // if category not found, send to bottom
                      const orderA =
                        indexA === -1 ? categoryOrder.length : indexA;
                      const orderB =
                        indexB === -1 ? categoryOrder.length : indexB;

                      return orderA - orderB;
                    })
                    .map((pro, index) => (
                      <TabsTrigger
                        key={index}
                        value={pro.categoryName}
                        onMouseEnter={() => setActiveTab(pro.categoryName)}
                        className="gap-2 text-left mr-auto !shadow-none bg-transparent 
          data-[state=active]:bg-primary/80 data-[state=active]:text-white 
          min-w-[300px] cursor-pointer border border-l-2 py-3 flex items-center justify-between"
                      >
                        {pro.categoryName}
                        {activeTab === pro.categoryName && (
                          <span>
                            <ChevronRight />
                          </span>
                        )}
                      </TabsTrigger>
                    ))}
                </TabsList>
              </div>

              {/* Right Subcategories + Products */}
              {products?.map((pro, productIndex) => (
                <TabsContent
                  key={productIndex}
                  value={pro.categoryName}
                  className="w-full overflow-y-scroll max-h-[400px] !mr-0"
                >
                  <ul className="space-y-4 flex flex-wrap gap-x-20">
                    {pro?.subCategories
                      ?.slice()
                      ?.sort((a, b) => b.products.length - a.products.length)
                      .map((subCat, catIndex) => (
                        <li key={catIndex} className="w-1/6">
                          <span className="text-black font-bold block mb-1">
                            {subCat.subCategoryName}
                          </span>

                          {subCat?.products.map((product, subCatIndex) => (
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

        

        {/* Solutions (custom dropdown) */}
        <NavigationMenuList>
          <SolutionsDropdown getLinkClass={getLinkClass} />
        </NavigationMenuList>
        {/* Download */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={getLinkClass("/downloads")}>
            <Link href="/downloads">Downloads</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={getLinkClass("/about")}>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={getLinkClass("/contact")}>
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* ceo desk */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={getLinkClass("/ceo-desk")}>
            <Link href="/ceo-desk">CEO's Desk</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Blogs */}
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={getLinkClass("/blogs")}>
            <Link href="/blogs">Blogs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
