"use client";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Settings,
  Mail,
  Info,
  List,
  LaptopMinimal,
  Lightbulb,
  Phone,
  User2,
  BookOpenText,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const PhoneHeaderNavigationMenu = ({ isMenuOpen }) => {
  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: List, label: "Product", href: "/products" },
    { icon: LaptopMinimal, label: "Downloads", href: "/downloads" },
    { icon: Lightbulb, label: "Solutions", href: "/solutions" },
    { icon: Info, label: "About", href: "/about" },
    { icon: User2, label: "CEO's Desk", href: "/ceo-desk" },
    // { icon: BookOpenText , label: "Blogs", href: "/blogs" },
    { icon: Phone, label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="pt-4 pb-2 h-full flex flex-col justify-between">
      <div className="space-y-2.">
        <h1 className="px-4 text-secondary font-bold text-3xl">
          <span className="text-primary">Time</span>Watch
        </h1>
        {menuItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg
                      text-gray-700 hover:bg-gray-50 hover:text-gray-900
                      transition-all duration-200 transform
                     
                    `}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 px-3">
        <Button asChild className="w-full">
          <Link href={"/partner"}>Become a Partner</Link>
        </Button>
        <Button className="w-full text-white" variant={"secondary"} asChild>
          <Link href={"/downloads"} className="">
            Downloads
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default PhoneHeaderNavigationMenu;
