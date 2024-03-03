"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => {
    return path === pathname;
  };

  const navList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "Mind Meister", path: "/my-mindmap" },
  ];

  return (
    <>
      <div className=" flex items-center sm:hidden">
        {/* open/close navigation_mobile */}
        <button
          onClick={() => setHidden(!hidden)}
          className="w-9 h-9 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400"
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <Image
            src="/logo_mindmeister_02.svg"
            alt="mindmeister"
            width={48}
            height={48}
          />
        </div>
        {/* navbar_table_ */}
        <div className="hidden sm:ml-4 md:ml-6 sm:flex items-center">
          <ul className="flex space-x-4">
            {navList?.map(({ name, path }, index) => (
              // text-gray-300
              <li key={index}>
                <Link
                  href={path}
                  className={`text-gray-600 hover:bg-primary hover:text-white block rounded-full px-3 py-2 text-sm font-medium ${
                    isActive(path) && "bg-primary text-white"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Menu Mobile*/}
      {hidden && (
        <div
          className="sm:hidden fixed top-16 left-0 right-0 z-10 bg-white shadow-md"
          id="mobile-menu"
        >
          <ul className="space-y-1 px-2 pb-3 pt-2">
            {navList?.map(({ name, path }, index) => (
              <li key={index}>
                <Link
                  href={path}
                  className={`text-gray-600 hover:bg-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium text-nowrap ${
                    isActive(path) && "bg-primary text-white"
                  }`}
                  onClick={() => setHidden(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
