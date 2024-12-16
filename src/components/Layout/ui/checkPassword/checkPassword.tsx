"use client";
import React, { useEffect, useState } from "react";
import checkBg from "../../../../assets/products/securePage/img/checkPasswordBg.png";
import checkBlock from "../../../../assets/products/securePage/img/checkPasswordBlock.png";
import topRight from "../../../../assets/products/securePage/img/toprightIcongreen.svg";
import circle from "../../../../assets/products/securePage/circle5.png";
import Image from "next/image";
import StrengthPassword from "../strengthPassword/strengthPassword";
import useToggleStore from "@/zustand/useToggleStore";
import { useRouter } from "next/navigation";

const CheckPassword = () => {
  const { isToggled, setToggle } = useToggleStore();
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const openModal = () => {
    if (isMobile) {
      router.push("/mobile/checkPassword");
    } else {
      setToggle(true);
    }
  };
  return (
    <>
      <div className="my-[100px]">
        <div className="container">
          <div className="w-full sm:p-[40px] flex items-center justify-between rounded-[40px] bg-[#262F33] max-lg:flex-col gap-y-[37px] max-sm:p-[20px] max-sm:pt-[30px]">
            <div className="flex items-start flex-col gap-[20px] w-full">
              <h2 className="text-[35px] max-w-[545px] text-white max-sm:text-[28px]">
                Проверьте пароль на надежность и соответствие требованиям
                парольных политик
              </h2>
              <h6 className="text-[15px] text-gray-300">
                Технологии Strongpass доступны онлайн.
              </h6>
              <div className="flex items-center mt-[20px] max-sm:w-full ">
                <button
                  className=" max-sm:w-full py-[10px] sm:px-[30px] text-white rounded-[10px] border-2 border-solid border-white  hover:bg-[#408077] hover:text-white transition-all hover:border-[#408077] max-sm:px-[20px]"
                  onClick={openModal}
                >
                  Проверить пароль
                </button>
                <button className="bg-white max-sm:w-[55px]  sm:w-[47px] h-[47px] flex items-center justify-center rounded-[10px] ">
                  <Image src={topRight} alt="" width={14} height={14} />
                </button>
              </div>
            </div>
            <div className="relative w-full max-sm:pl-[48px] sm:ml-[120px] max-lg:pl-[100px]">
              <Image
                src={checkBlock}
                alt="checkBlock"
                loading="lazy"
                className="absolute sm:top-[40px] max-sm:top-[20px] max-sm: left-[28px] sm:left-[-40px]  max-sm:w-[117px] max-sm:h-[85px] z-20  "
              />
              <Image
                src={circle}
                alt="circle"
                className="absolute max-sm:top-[30px] max-sm:w-[68px] max-sm:h-[68px] max-sm:left-[13px] sm:w-[121px] sm:h-[121px] sm:top-[70px] sm:left-[-80px] "
              />
              <Image
                src={checkBg}
                alt=""
                width={480}
                height={320}
                loading="lazy"
                className="  relative  max-sm:w-[277px] max-sm:h-[181px] z-10  "
              />
            </div>
          </div>
        </div>
      </div>
      {isToggled ? (
        <div
          className="fixed top-0 left-0 w-[100%] h-[100vh] z-[100] flex items-center justify-center"
          style={{
            background: "rgba(0, 0, 0, 0.662)",
          }}
        >
          (
          <StrengthPassword />)
        </div>
      ) : null}
    </>
  );
};

export default CheckPassword;
