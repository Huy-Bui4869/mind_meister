"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ToggalTheme from "./ToggalTheme";

const DropdownMenu = ({ userEmail, userImage }) => {
  const [show, setShow] = useState(false);

  const dropdownItem = [
    // { name: "Theme", href: "#", icon: "sun.svg" },
    { name: "Your Profile", href: "#", icon: "user.svg" },
    { name: "Setting", href: "#", icon: "gear.svg" },
    {
      name: "Sign out",
      href: "/api/auth/logout",
      icon: "right_from_bracket.svg",
    },
  ];

  return (
    <div className="relative">
      <div>
        <button
          onClick={() => setShow(true)}
          className="w-8 h-8 border-2 border-transparent rounded-full overflow-hidden focus:ring-2 focus:ring-primary"
        >
          <img className="w-full h-auto bg-primary" src={userImage} alt="" />
        </button>
      </div>
      {show && (
        <>
          {/* top-16 */}
          <div className="fixed inset-0" onClick={() => setShow(false)}></div>

          <ul
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none"
            tabIndex="-1"
            // onBlur={() => setShow(false)}
          >
            <li>
              <ToggalTheme />
            </li>
            {dropdownItem?.map(({ name, href, icon }, i) => (
              <li key={i}>
                <Link
                  href={href}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  <Image src={`./${icon}`} width={14} height={14} alt="." />
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default DropdownMenu;
