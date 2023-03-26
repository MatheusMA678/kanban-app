import Head from "next/head";
import React from "react";
import Sidebar from "./Sidebar";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { BottomNavbar } from "./BottomNavbar";

const inter = Inter({
  subsets: ["latin"],
});

const variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.5, 1, 1, 1],
    },
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kanban App</title>
        <meta
          name="description"
          content="Kanban App using NextJS + Prisma + TailwindCSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <div
        className={`${inter.className} grid sm:grid-cols-[15rem_auto] grid-rows-[5rem_auto] sm:grid-rows-1 h-screen bg-primary overflow-hidden`}
      >
        <Sidebar />
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          className="bg-[#FBFAFF] rounded-t-3xl sm:rounded-tl-3xl sm:rounded-tr-none sm:mt-1 p-14 pb-24 md:pb-14 overflow-y-auto"
        >
          {children}
        </motion.div>
        <BottomNavbar />
      </div>
    </>
  );
};

export default Layout;
