import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";
import { BsFillPersonFill } from "react-icons/bs";

import React from "react";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/abubacker-siddique-879366201",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/abusiddiq010",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:abusiddiq010@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Leetcode <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/abusiddiqghub/",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonFill size={30} />
        </>
      ),
      href: "/resume.docx",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md  hover:ml-[-10px] duration-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between  items-center w-full  text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
