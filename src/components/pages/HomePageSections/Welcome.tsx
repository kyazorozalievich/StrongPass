"use client";
import React, { useEffect, useState } from "react";
import homeSectioPhoto from "../../../assets/homePage/welcomeBg.png";
import Image from "next/image";
import folder from "../../../assets/homePage/folder-tree_7661442 1.svg";
import padlock from "../../../assets/homePage/padlock-check_14897075 1.svg";
import magnifying from "../../../assets/homePage/magnifying-glass-binary_17698343 1.svg";
import union from "../../../assets/homePage/Union.png";
import union2 from "../../../assets/homePage/mobile.png";
import star from "../../../assets/homePage/start.svg";

const Welcome = () => {
  const [image, setImage] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setImage(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section>
      <div className="container p-5 ">
        <div className="mt-[10px]">
          <h1 className="text-[72px] text-[#262F33] leading-tight font-bold max-lg:text-[62px] max-md:text-[52px] max-sm:text-[42px]">
            Ваша безопасность <br /> начинается с паролей
          </h1>
          <p className=" hidden text-[18px] font-normal w-full text-start text-[#262F33] max-lg:flex mt-4">
            Снизьте риска взлома инфраструктуры из-за слабых или украденных
            паролей.
          </p>
          <div className=" h-auto rounded-[36px] relative mt-[42px]  flex justify-center ">
            <Image
              className=" rounded-[36px] h-[560px] object-cover "
              src={homeSectioPhoto}
              alt="header-logo"
              width={1200}
              height={560}
              loading="lazy"
            />
            <div className="flex p-4 items-center gap-x-2 rounded-[28px] absolute bottom-[20px] bg-white">
              <span className="w-[64px] h-[64px] rounded-2xl bg-[#408077] flex items-center justify-center">
                <Image src={padlock} alt="padlock" width={20} height={20} />
              </span>
              <span className="w-[64px] h-[64px] rounded-2xl bg-[#408077] flex items-center justify-center">
                <Image src={folder} alt="folder" width={20} height={20} />
              </span>
              <span className="w-[64px] h-[64px] rounded-2xl bg-[#408077] flex items-center justify-center">
                <Image
                  src={magnifying}
                  alt="magnifying"
                  width={20}
                  height={20}
                />
              </span>
            </div>

            <span className="p-[32px] rounded-br-[36px]   absolute  top-0 left-0 z-30  max-lg:w-[150px] ">
              <p className="text-[18px] font-normal w-full text-start text-[#262F33] max-lg:hidden">
                Снизьте риска взлома инфраструктуры из-за слабых или украденных
                паролей.
              </p>
            </span>

            <Image
              src={image ? union2 : union}
              alt="union"
              className="absolute top-0 left-0    "
            />

            <Image
              src={star}
              alt="start"
              className="absolute sm:w-[250px] sm:h-[80px] sm:top-[-40px] right-0 max-sm:w-[179px] max-sm:h-[54px] max-sm:top-[-20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
