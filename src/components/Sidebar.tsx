import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Cards,
  Gear,
  Users,
  FileText,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

import Logo from "../../public/images/logo.svg";

const navbarLinks = [
  { text: "Boards", href: "/", icon: <Cards size={28} weight={"bold"} /> },
  {
    text: "Equipes",
    href: "/equipes",
    icon: <Users size={28} weight={"bold"} />,
  },
  {
    text: "Relatórios",
    href: "/relatorios",
    icon: <FileText size={28} weight={"bold"} />,
  },
  {
    text: "Ajustes",
    href: "/ajustes",
    icon: <Gear size={28} weight={"bold"} />,
  },
];

const Sidebar = () => {
  const path = usePathname();

  return (
    <section className="flex flex-col gap-16 p-8">
      <Image src={Logo} alt="Kanban Logo" />
      <nav>
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
    </section>
  );
};

export default Sidebar;
