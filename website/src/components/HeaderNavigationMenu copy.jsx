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

export function HeaderNavigationMenu() {

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          if (item.type === "link") {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className="hover:!bg-transparent !bg-transparent data-[active=true]:!text-primary hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1"
                >
                  <Link href={item.href}>
                    {Icon && <Icon size={18} />}
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          if (item.type === "tabs") {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="hover:!bg-transparent hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1">
                  {Icon && <Icon size={18} />}
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className={"border border-primary"}>
                  <Tabs
                    defaultValue={item.tabs[0]?.value}
                    // orientation="horizontical"
                    className="flex flex-row w-full min-h-[200px] overflow-hidden space-x-4"
                  >
                    <TabsList className="flex flex-col space-y-2 border-r pr-2 shadow-none justify-start bg-transparent border-none border">
                      {item.tabs.map((tab, index) => {
                        const TabIcon = tab.icon;
                        return (
                          <TabsTrigger
                            key={index}
                            value={tab.value}
                            className="gap-2 text-left mr-auto !shadow-none bg-secondary/10 data-[state=active]:bg-primary/80 data-[state=active]:text-white min-w-[230px] justify-start cursor-pointer border border-l-2 py-3 "
                          >
                            {TabIcon && (
                              <TabIcon size={16} className="text-inherit" />
                            )}
                            {tab.label}
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>
                    {/* <hr className="h-[1000px] block w-[1px] bg-primary !mr-0"/> */}

                    {item.tabs.map((tab, index) => (
                      <div className="flex !m-0" key={index}>
                        <TabsContent
                          key={index}
                          value={tab.value}
                          className="w-full"
                        >
                          <ul className="space-y-4 min-w-[190px]">
                            {tab.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="flex items-center text-sm hover:text-primary group"
                                >
                                  <span className="relative flex items-center">
                                    {/* Hidden by default, visible and moves right on hover */}
                                    <ChevronRight
                                      size={16}
                                      className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-primary"
                                    />
                                    {/* Add left margin so text doesn't overlap hidden icon */}
                                    <span className="pl-5">{link.label}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                      </div>
                    ))}
                  </Tabs>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          if (item.type === "grid") {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="hover:!bg-transparent hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1">
                  {Icon && <Icon size={18} />}
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.items.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          if (item.type === "custom") {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="hover:!bg-transparent hover:!text-primary focus:!text-primary text-[17px] font-medium !text-secondary flex items-center gap-1">
                  {Icon && <Icon size={18} />}
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li className="space-y-2">
                      {item.items.map((link, i) => (
                        <NavigationMenuLink key={i} asChild>
                          <Link
                            href={link.href}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            {link.icon && <link.icon size={16} />}
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return null;
        })}
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
