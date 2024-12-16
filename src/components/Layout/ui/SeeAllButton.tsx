import React, { FC } from "react";

import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
interface SeeAllButtonProps {
  scrollNext: () => void;
  scrollPrev: () => void;
}
const SeeAllButton: FC<SeeAllButtonProps> = ({ scrollNext, scrollPrev }) => {
  return (
    <div className="flex items-center gap-[10px] max-sm:hidden">
      <Link
        href="/article"
        className="text-[18px] font-[500] text-[#408077] border-2 border-[#40807776] bg-transparent rounded-[9px] px-[30px] py-[11px]  hover:bg-[#408077] hover:text-white transition-all duration-500"
      >
        Смотреть все
      </Link>
      <button
        className="border-2 border-[#40807776] bg-transparent rounded-[9px] px-[17px] py-[16px] group hover:bg-[#408077] transition-all duration-300  "
        onClick={scrollPrev}
      >
        <FaChevronLeft className="text-[#408077] group-hover:text-white" />
      </button>
      <button
        className="border-2 border-[#40807776] bg-transparent rounded-[9px] px-[17px] py-[16px] group hover:bg-[#408077] transition-all duration-300"
        onClick={scrollNext}
      >
        <FaChevronRight className="text-[#408077] group-hover:text-white" />
      </button>
    </div>
  );
};

export default SeeAllButton;
