"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import topRight from "../../../assets/products/securePage/img/toprightIcon.png";
import selfIcon from "../../../assets/products/selfcheckPage/img/selfCheckIcon.png";
import selfImg from "../../../assets/products/selfcheckPage/img/selfCheckImg.png";
import sircle from "../../../assets/products/securePage/Group 4.png";
import useToggleStore from "@/zustand/useToggleStore";
import StrengthPassword from "@/components/Layout/ui/strengthPassword/strengthPassword";
import { useRouter } from "next/navigation";

const SelfCheckWelcome = () => {
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
      <div>
        <div className="container flex items-center flex-col gap-[50px] p-5">
          <div className="flex items-center justify-between w-[100%] max-lg:flex-col-reverse ">
            <div className="flex items-start flex-col gap-[30px]">
              <h1 className="text-[60px] font-[600] max-w-[600px]  max-lg:text-center max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px]">
                Проверка надежности пароля
              </h1>
              <p className="max-w-[600px] text-[20px] max-lg:text-center">
                Сервис для самостоятельной проверки пароля на надежность.
                Устанавливается в собственную инфраструктуру.
              </p>
              <div className="flex items-center w-full max-lg:justify-center">
                <button
                  onClick={openModal}
                  className="py-[10px] px-[30px] rounded-[10px] border-2 border-solid border-[#408077] hover:bg-[#408077] hover:text-white transition-all"
                >
                  Попробовать бесплатно
                </button>
                <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[10px]">
                  <Image src={topRight} alt="" width={14} height={14} />
                </button>
              </div>
            </div>
            <div className="relative ">
              <Image src={selfImg} alt="" className="rounded-[40px] " loading="lazy" />
              <Image src={sircle} alt="" className="absolute top-0 left-0 " />
              <Image
                src={selfIcon}
                alt=""
                height={110}
                className="absolute top-0 left-0 px-[10px] py-[10px] "
              />
              <div className="absolute bottom-0 py-[10px] px-[20px] flex items-center bg-white m-[20px] gap-[10px] rounded-[20px]">
                <button className="w-[40px] h-[40px] border-2 border-solid border-[#408077] rounded-[50%] text-[#408077]">
                  5/5
                </button>
                <h3 className="font-[600]">Ваш пароль надежный.</h3>
              </div>
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

export default SelfCheckWelcome;
