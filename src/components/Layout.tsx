import Head from "next/head";
import React from "react";
import Sidebar from "./Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

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
        className={`${inter.className} grid grid-cols-[15rem_auto] h-screen bg-primary`}
      >
        <Sidebar />
        <main className="bg-[#FBFAFF] rounded-tl-3xl mt-1 p-14 overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
