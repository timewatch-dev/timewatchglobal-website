"use client";
import React, { useEffect, useState } from "react";
import { HeaderNavigationMenu } from "./HeaderNavigationMenu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { SearchBar } from "./SearchBar";
import PhoneHeaderNavigationMenu from "./PhoneHeaderNavigationMenu";
import { Menu, X, Home, User, Settings, Mail, Info, Phone } from "lucide-react";
import { useParams } from "next/navigation";
import { useIsDesktop } from "@/hooks/useIsDesktop";

const Header = () => {
  const isDesktop = useIsDesktop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    setIsMenuOpen(false);
  }, [params]);
  return (
    <header className="sticky top-0 z-50 w-full bg-white hidden. lg:block font-medium">
      <div className="container mx-auto flex items-center justify-between px-3">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src={"/timewatch-logo.svg"}
            width={230}
            height={90}
            alt="timewatch logo"
            className="w-[180px] h-[70px] xl:w-[230px] xl:h-[80px]"
          />
        </Link>
        {/* Desktop menu (render only on desktop!) */}
        {isDesktop && (
          <>
            <div className="relative z-10">
              <HeaderNavigationMenu />
            </div>
          </>
        )}

        {/* Mobile menu */}
        <div
          className={`fixed top-0 left-0 z-20  transform transition-transform xl:translate-x-0 duration-700 ease-in-out h-screen bg-white border-r border-r-gray-100 xl:hidden
            ${isMenuOpen ? "translate-x-0" : "-translate-x-[101%]"}`}
        >
          <PhoneHeaderNavigationMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>

        {/* right side */}
        <div className="flex items-center">
          <Link href="tel:+919599953921" className="block lg:hidden">
            <Phone className="text-primary"/>
          </Link>
          <SearchBar />

          <button
            onClick={toggleMenu}
            className="rounded-lg  transition-colors duration-200 focus:outline-none  mr-0 md:mr-2 xl:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
          <Button asChild className={"hidden md:flex"}>
            <Link href={"/partner"}>Become a Partner</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
