import fs from "fs";
import path from "path";
import Link from "next/link";
import { ArrowRight, Network } from "lucide-react";

export default function BioCards() {
  // Absolute path to folder
  const folderPath = path.join(
    process.cwd(),
    "src/app/(public)/(biometrics-controll-system)"
  );

  // Read only directories
  const items = fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return (
    <div className="container mx-auto py-10 px-0 md:px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((slug) => (
          <Link
            key={slug}
            href={`/${slug}`}
            className="group relative p-3 md:p-6 rounded-xl shadow-md border border-gray-200 hover:border-[#d63438] transition-all duration-300 bg-white overflow-hidden"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d63438] to-[#6d6f72] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* Icon placeholder */}
            <div className="rounded-lg bg-gradient-to-br from-[#d63438] to-[#d63438]/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300  w-8 h-8 md:w-12 md:h-12">
              <Network className=" text-white text-[5px] md:text-sm" />
            </div>

            {/* Title */}
            <h2 className="font-semibold text-[13px] leading-[17px] md:text-lg md:leading-[22px] capitalize text-[#6d6f72] group-hover:text-[#d63438] transition-colors duration-300">
              {slug.replace(/-/g, " ")}
            </h2>

            {/* Arrow icon */}
            <div className="absolute top-4 md:bottom-4 right-4">
              <ArrowRight className="w-5 h-5 text-[#d63438]" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
