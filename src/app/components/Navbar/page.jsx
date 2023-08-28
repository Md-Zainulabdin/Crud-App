import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] md:h-[70px] px-[20px] md:px-[50px] sticky top-0 left-0 z-10 text-white bg-indigo-600 flex items-center justify-between">
      <Link href={"/"} className="logo">
        <h1 className="text-xl md:text-3xl font-semibold">CRUD APP</h1>
      </Link>
      <Link href={"/AddTopic"} className="menu">
        <span className="border-2 text-sm md:text-md border-slate-300 transition duration-300 ease-in-out rounded-full px-3 md:px-5 py-1 md:py-2 hover:bg-white hover:text-[#222]">Add Topics</span>
      </Link>
    </nav>
  );
};

export default Navbar;
