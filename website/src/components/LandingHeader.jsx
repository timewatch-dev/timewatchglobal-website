"use client";
import React, { useEffect, useState } from "react";
import { HeaderNavigationMenu } from "./HeaderNavigationMenu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { SearchBar } from "./SearchBar";
import PhoneHeaderNavigationMenu from "./PhoneHeaderNavigationMenu";
import { Menu, X, Home, User, Settings, Mail, Info } from "lucide-react";
import { useParams } from "next/navigation";

const LandingHeader = () => {
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
            className="w-[150px] h-[70px] xl:w-[230px] xl:h-[80px]"
          />
        </Link>

        {/* right side */}
        <div className="flex items-center">
          <Button asChild className={"flex text-sm md:text-lg"}>
            <Link href={"tel:+919266955776"}>+91-92669 55776</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
