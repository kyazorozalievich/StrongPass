"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { blog } from "@/constants/links";
import SeeAllButton from "../SeeAllButton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ArticleBlock = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: size ? 320 : 600,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: size ? -320 : -600,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <div className="container p-5">
        <div className="mt-[100px]">
          <div className="flex items-center justify-between mb-[40px]">
            <h1 className="text-[64px] font-[600] text-[#262F33] max-lg:text-[54px] max-md:text-[44px] max-sm:text-[34px]">
              Статьи
            </h1>
            <div className="flex gap-4">
              <SeeAllButton scrollNext={scrollNext} scrollPrev={scrollPrev} />
            </div>
          </div>
          <div
            ref={scrollContainerRef}
            className="w-full flex items-center overflow-x-auto gap-x-[20px] scroll-hidden snap-x"
          >
            {blog.map((item, index) => (
              <div
                key={index}
                className="w-[580px] max-sm:w-[320px] flex rounded-[36px] flex-col shrink-0 snap-start "
              >
                <Image
                  src={item.image}
                  alt="image"
                  width={580}
                  height={280}
                  loading="lazy"
                  className="object-cover w-full h-full rounded-[36px]"
                />
                <div className="w-[580px] max-sm:w-[320px] flex flex-col p-[36px] rounded-[36px] bg-[#F2F5F4] gap-y-3 relative bottom-[50px]">
                  <p className="text-[16px] font-normal text-[#7A7E80]">
                    {item.date}
                  </p>
                  <h1 className="text-2xl max-ms:text-[20px] text-[#262F33] font-semibold line-clamp-2 ">
                    {item.title}
                  </h1>
                  <p className="text-lg max-sm:text-[16px] text-[#7A7E80] font-normal line-clamp-2 ">
                    {item.description}
                  </p>
                  <Link
                    href="/article/2"
                    className="text-[18px] font-semibold flex items-center gap-x-3 text-[#408077] underline"
                  >
                    Читать статью
                    <GoArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden items-center gap-[10px] max-sm:flex max-sm:w-full ">
            <Link
              href="/article"
              className="text-[18px] font-[500] text-[#408077] border-2 border-[#40807776] bg-transparent rounded-[9px] px-[30px] py-[11px]  hover:bg-[#408077] hover:text-white transition-all duration-500 max-sm:w-full  max-sm:text-center"
            >
              Смотреть все
            </Link>
            <button
              className="border-2 border-[#40807776] bg-transparent rounded-[9px] px-[17px] py-[16px] group hover:bg-[#408077] transition-all duration-500 "
              onClick={scrollPrev}
            >
              <FaChevronLeft className="text-[#408077] group-hover:text-white" />
            </button>
            <button
              className="border-2 border-[#40807776] bg-transparent rounded-[9px] px-[17px] py-[16px] group hover:bg-[#408077] transition-all duration-500"
              onClick={scrollNext}
            >
              <FaChevronRight className="text-[#408077] group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleBlock;
