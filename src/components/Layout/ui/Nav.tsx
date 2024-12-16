"use client";

import React, { useState } from "react";
import Link from "next/link";
import { links, trioLinks } from "@/constants/links";
import block from "../../../assets/header-logos/img/strongpass-block-logo.svg";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useBurgerStore } from "@/store/useBurgerStore";
import { twMerge } from "tailwind-merge";

const Nav = () => {
  const { isOpen, setIsOpen } = useBurgerStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div
      className={twMerge(
        "max-lg:absolute max-lg:bg-white top-[113px] p-[20px] s max-lg:pb-[184px]  transition-all duration-500",
        isOpen ? "left-0" : "left-[-360px]"
      )}
    >
      <nav>
        <ul className="flex items-center lg:gap-[37px] max-lg:flex-col max-lg:w-[320px] ">
          <li className="relative max-lg: max-lg:mb-[20px]">
            <button
              onClick={toggleDropdown}
              className={
                pathname === "/products/activeSecure" ||
                pathname === "/products/almetibin" ||
                pathname === "/products/selfcheck"
                  ? "text-[#408077] text-[18px] font-[600] flex items-center gap-[5px]"
                  : "text-[18px] font-[600] flex items-center gap-[5px]"
              }
            >
              <Image src={block} alt="header-logo" width={25} height={25} />
              Продукты
              {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu lg:absolute bg-white mt-2  rounded-b-[10px] lg:min-w-[220px] max-lg:w-full max-lg:left-0  ">
                {trioLinks.map((el, idx) => (
                  <li
                    className="lg:border-b py-2 p-[10px] object-cover cursor-pointer max-lg:text-center "
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                    key={idx}
                  >
                    <Link href={el.link}>{el.pathName}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {links.map((item, index) => (
            <li
              key={index}
              className="max-lg:border-t border-neutral-300 max-lg:w-full max-lg:text-center  max-lg:py-[20px] "
              onClick={() => setIsOpen(false)}
            >
              <Link
                className={
                  pathname === item.link
                    ? "text-[#408077] text-[18px] font-[600] "
                    : "text-[18px] font-[600]"
                }
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
