"use client";
import React, { useEffect, useState } from "react";
import topRight from "../../../assets/products/securePage/img/toprightIcon.png";
import secureImg from "../../../assets/products/securePage/Frame_183.png";
import secureKey from "../../../assets/products/securePage/img/securerKeyicon.png";
import companyName from "../../../assets/products/securePage/img/secureCompany.svg";
import companyName2 from "../../../assets/products/securePage/img/secureCompany2.svg";
import companyName3 from "../../../assets/products/securePage/img/secureCompany3.svg";
import Image from "next/image";
import { MdErrorOutline } from "react-icons/md";
import useLicenseStore from "@/zustand/useLicenseStore";
import License from "@/components/Layout/ui/license/License";
import { useRouter } from "next/navigation";

const ActiveSecureWelcome = () => {
  const { isToggled, setToggle } = useLicenseStore();
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
      router.push("/mobile/testting");
    } else {
      setToggle(true);
    }
  };
  return (
    <>
      <div className="container p-5">
        <div className=" flex items-center flex-col gap-[50px]">
          <div className="flex items-center justify-between w-full max-lg:flex-col-reverse   gap-y-[24px]">
            <div className="flex items-start flex-col gap-[30px] ">
              <h1 className="text-[60px] font-[600] max-w-[680px]  max-lg:text-center max-lg:text-[54px] max-md:text-[44px] max-sm:text-[34px] leading-normal">
                Проактивная защита от использования слабых паролей
              </h1>
              <p className="max-w-[600px] text-[20px] max-lg:text-center">
                При наличии индивидуального списка запрещенных паролей,
                составленного внутри компании, проводятся дополнительные
                проверки. На основании проверки разрешается или запрещается
                установка нового пароля.
              </p>
              <div className="flex items-center max-lg:justify-center w-full">
                <button
                  className="py-[10px] sm:px-[30px] rounded-[10px] border-2 border-solid border-[#408077] hover:bg-[#408077] hover:text-white transition-all max-lg:w-full duration-500 max-sm:px-[20px] "
                  onClick={openModal}
                >
                  Попробовать бесплатно
                </button>
                <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[10px]">
                  <Image src={topRight} alt="" width={14} height={14} />
                </button>
              </div>
            </div>
            <div className="relative ">
              <Image
                src={secureImg}
                alt=""
                className="rounded-[40px]"
                loading="lazy"
              />
              <Image
                src={secureKey}
                alt="secureKey"
                className="absolute top-[-30px] left-0 py-[20px] px-[20px] bg-w w-[130px]  h-[140px]  "
              />
              <div className="absolute bottom-0 py-[20px] px-[20px] flex items-start flex-col bg-white m-[20px] gap-[5px] rounded-[20px]">
                <h3 className="font-[600]">Автоматическая проверка</h3>
                <div className="w-[100%]  p-[5px] bg-[#F3DFC3] rounded-[5px] flex items-start gap-[10px]">
                  <a className="text-red-600 text-[15px]">
                    <MdErrorOutline />
                  </a>
                  <p className="text-[15px]">
                    <span className="font-[600]">
                      {" "}
                      Пароль скомпрометирован.
                    </span>{" "}
                    <br />
                    Попытка смены пароля для учетной записи была заблокирована!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-[100%] justify-center gap-[50px]  flex-wrap">
            <Image src={companyName} alt="image" />
            <Image src={companyName2} alt="image" />
            <Image src={companyName3} alt="image" />
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
          <License />)
        </div>
      ) : null}
    </>
  );
};

export default ActiveSecureWelcome;
