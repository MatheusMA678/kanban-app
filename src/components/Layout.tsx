import Head from "next/head";
import React from "react";
import Sidebar from "./Sidebar";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${inter.className} grid grid-cols-[15rem_auto] h-screen bg-primary overflow-hidden`}
      >
        <Sidebar />
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          className="bg-[#FBFAFF] rounded-tl-3xl mt-1 p-14 overflow-y-auto"
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default Layout;
