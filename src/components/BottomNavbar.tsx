import React from "react";
import { motion } from "framer-motion";
import { navbarLinks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BottomNavbar = () => {
  const path = usePathname();

  return (
    <motion.footer
      initial={{
        y: "100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 2,
        ease: "linear",
      }}
      className="h-20 w-full bg-primary fixed bottom-0 left-0 rounded-t-3xl sm:hidden"
    >
      <ul className="h-full flex justify-around items-center">
        {navbarLinks.map((link) => (
          <li key={link.text}>
            <Link
              href={link.href}
              className={`${
                link.href === path
                  ? "text-white hover:text-white"
                  : "text-gray-300 hover:text-gray-200"
              } flex flex-col items-center`}
            >
              {link.icon}
              <span className="text-sm font-semibold">{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.footer>
  );
};
