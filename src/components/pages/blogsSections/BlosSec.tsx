import React from "react";
import { blog } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const BlosSec = () => {
  return (
    <section>
      <div className="container p-5">
        <div className="flex flex-col items-center gap-y-[60px]">
          <h1 className="text-[72px] font-semibold flex items-center w-full justify-center text-[#262F33] max-lg:text-[62px] max-md:text-[52px] max-sm:text-[42px]">
            Статьи
          </h1>
          <div className="grid grid-cols-2 gap-x-4  max-md:grid-cols-1">
            {blog.map((item, index) => (
              <div
                key={index}
                className="flex overflow-hidden rounded-[36px] flex-col "
              >
                <Image
                  src={item.image}
                  alt="image"
                  width={580}
                  height={280}
                  className="object-cover w-full h-full"
                />
                <div className="flex flex-col p-[36px] rounded-[36px] bg-[#F2F5F4] gap-y-3 relative bottom-[30px]">
                  <p className="text-[16px] font-normal text-[#7A7E80]">
                    {item.date}
                  </p>
                  <h1 className="text-2xl text-[#262F33] font-semibold line-clamp-2">
                    {item.title}
                  </h1>
                  <p className="text-lg text-[#7A7E80] line-clamp-2 font-normal">
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
        </div>
      </div>
    </section>
  );
};

export default BlosSec;
