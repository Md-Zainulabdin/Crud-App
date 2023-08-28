import Link from "next/link";
import React from "react";
import {AiFillGithub} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full absolute border-t bottom-0 left-0 bg-white px-[30px] md:px-[50px]">
      <div className="w-full my-4 flex justify-between items-center">
        <div>
          <h1 className="text-md md:text-xl">Developed by ~ Zain-ul-Abdin</h1>
        </div>
        <div className="flex gap-4">
            <Link href={'https://github.com/Md-Zainulabdin'} target="_blank"><AiFillGithub size={25} className="text-[#222]"/></Link>
            <Link href={'https://www.linkedin.com/in/m-zain-ul-abdin/'} target="_blank"><FaLinkedinIn size={25} className="text-[#222]"/></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;