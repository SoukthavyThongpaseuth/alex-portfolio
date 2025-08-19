"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] !text-green-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col !text-white bg-gray-900">
        {/* logo */}
        <div className="mt-18 mb-20 flex justify-center flex-col items-center">
          {/* Wrap the GIF with Link to Home and close Nav when clicked */}
          <Link href="/" onClick={handleLinkClick}>
            <img
              src="/assets/gif-robot.gif"
              alt="Animated GIF"
              className="w-40 h-40 object-contain cursor-pointer"
            />
          </Link>
          <div className=" text-center text-2xl">
            <Link href="/" onClick={handleLinkClick}>
              <h1 className="tex-4xl font-semibold">
                Hi I'm Alex<span className="text-green-400">.</span>
              </h1>
            </Link>
          </div>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={handleLinkClick} // Close the sidebar when a link is clicked
                className={`${
                  link.path === pathname &&
                  "text-green-400 border-b-2 border-green-400"
                } text-xl capitalize hover:text-green-400 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
