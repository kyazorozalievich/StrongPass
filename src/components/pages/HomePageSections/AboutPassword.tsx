import React from "react";
import aboutPassword from "../../../assets/homePage/img/AboutPhotoPassword.svg";
import Image from "next/image";
import dotted from "../../../assets/homePage/img/dotted.svg";
import { password } from "@/constants/links";

const AboutPassword = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-[100px] w-[100%]  bg-[#F2F5F4] rounded-[24px] px-[50px] py-[60px]">
          {/* BLOCK1  */}
          <div className="flex items-center justify-between max-lg:flex-col gap-y-[48px]">
            <p className="text-[28px] font-[400] text-[#262F33] max-w-[680px] max-sm:text-[18px]">
              Использование слабых и скомпрометированных паролей - один из
              основных способов проникновения злоумышленников в инфраструктуру.
              Внедрение надежной парольной политики и безопасной работы
              с паролями снижает вероятность взлома на 60% 
              <span className="text-[#408077] underline">
                по данным Лаборатории Касперского.
              </span>
            </p>

            <Image
              src={aboutPassword}
              alt="header-logo"
              width={380}
              height={400}
              className="max-lg:w-full"
              loading="lazy"
            />
          </div>
          <div className="flex items-center gap-x-[20px] mt-[57px] overflow-x-auto scroll-hidden">
            {password.map((item, index) => (
              <div
                key={index}
                className=" w-[380px] h-[320px] flex flex-col justify-between border border-solid border-[#00000025] rounded-[18px] p-[36px] max-md:w-[360px] max-md:h-[320px] max-md:p-[30px] max-sm:w-[300px] max-sm:h-[300px] max-sm:p-[25px] "
              >
                <div className="flex flex-col gap-y-[10px] w-[308px] max-sm:w-[250px]">
                  <h2 className="text-[32px] font-semibold text-[#262F33] max-sm:text-[22px]">
                    {item.title}
                  </h2>
                  <p className="text-[#262F33] text-[18px] font-normal max-sm:text-[16px]">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <Image src={dotted} alt="header-logo" width={24} height={6} />
                  <p className="text-[18px] font-[600] text-[#408077]">001</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPassword;
