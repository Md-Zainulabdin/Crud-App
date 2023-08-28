import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] px-[30px] md:px-[50px] text-white bg-indigo-600 flex items-center justify-between">
      <Link href={"/"} className="logo">
        <h1 className="text-2xl font-semibold">CRUD APP</h1>
      </Link>
      <Link href={"/AddTopic"} className="menu">
        <span className="border-2 border-slate-300 transition duration-300 ease-in-out rounded-full px-5 py-2 hover:bg-white hover:text-[#222]">Add Topics</span>
      </Link>
    </nav>
  );
};

export default Navbar;
