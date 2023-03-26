import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "../../public/images/logo.svg";
import { navbarLinks } from "@/data";

const Sidebar = () => {
  const path = usePathname();

  return (
    <section className="flex items-center sm:items-start justify-between sm:justify-start sm:flex-col sm:gap-16 px-4 sm:p-8">
      <Image src={Logo} alt="Kanban Logo" className="sm:h-16 h-10" />
      <nav className="sm:block hidden">
        <ul className="flex flex-col gap-8">
          {navbarLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.href}
                className={`${
                  link.href === path
                    ? "text-white hover:text-white"
                    : "text-gray-300 hover:text-gray-200"
                }  flex items-center gap-4 font-semibold`}
              >
                {link.icon}
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-10 h-10 rounded-full bg-gray-500 sm:hidden" />
    </section>
  );
};

export default Sidebar;
