"use client";
import React, { useEffect, useState } from "react";
import topRight from "../../../assets/products/securePage/img/toprightIcon.png";
import almetibinImg from "../../../assets/products/almetibinPage/downloadIcons/img/almetibinImg.png";
import almetibinIcon from "../../../assets/products/almetibinPage/downloadIcons/img/almetibinIcon.svg";
import circles from "../../../assets/products/securePage/Group 4.png";
import Image from "next/image";

const AlmetibinWelcome = () => {
  const [size, setSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container px-5">
      <div className=" flex items-center flex-col gap-[50px]">
        <div className="flex items-center justify-between w-full max-lg:flex-col-reverse ">
          <div className="flex items-start flex-col gap-[30px] max-sm:max-w-[320px]">
            <h1 className="text-[60px] font-[600]   max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] max-lg:text-center  ">
              Безопасный и удобный способ обмена паролями
            </h1>
            <p className="max-w-[600px] text-[20px] max-lg:text-center">
              Almetibin предоставляет удобный и безопасный способ обмена
              паролями, данными учетных записей, чувствительной информацией. С
              помощью Almetibin вы можете отказаться от обычных и небезопасных
              методов обмена чувствительной информацией, таких как электронная
              почта, мессенджеры, текстовые сообщения.
            </p>
            <div className="flex items-center max-lg:justify-center max-lg:w-full">
              <button className="py-[10px] px-[30px] rounded-[10px] border-2 border-solid border-[#408077] hover:bg-[#408077] hover:text-white transition-all">
                Попробовать бесплатно
              </button>
              <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[10px]">
                <Image src={topRight} alt="" width={14} height={14} />
              </button>
            </div>
          </div>
          <div className="relative  sm:w-[395px] sm:h-[540px]  ">
            <Image
              src={almetibinImg}
              alt=""
              className="rounded-[40px]"
              width={size?300:395}
              height={size?328:540}
              loading="lazy"
            />
            <Image src={circles} alt="" className="absolute top-0 left-0 " />
            <Image
              src={almetibinIcon}
              alt=""
              height={100}
              className="absolute top-0 left-0 rounded-br-[40px] h-[150px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmetibinWelcome;
