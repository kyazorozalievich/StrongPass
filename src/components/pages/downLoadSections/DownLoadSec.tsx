import React from "react";
import Link from "next/link";
import Secure from "@/components/Layout/ui/Secure";
import { download } from "@/constants/links";
import Image from "next/image";
import passwordIcon from "../../../assets/products/almetibinPage/downloadIcons/img/password.svg";
import { RiDownloadLine } from "react-icons/ri";

const DownLoadSec = () => {
  return (
    <section>
      <div className="container p-5">
        <div className="flex flex-col">
          <div className="w-full flex flex-col items-center justify-center gap-y-[40px]">
            <h1 className="text-black text-[72px] font-semibold  max-lg:text-[62px] max-md:text-[52px] max-sm:text-[42px]">Скачать</h1>
            <p className=" text-[18px] font-normal text-center max-w-[768px] text-[#262F33] ">
              Если у вас нет купленной лицензии Strongpass, пожалуйста{" "}
              <Link href="#" className="text-[#408077] underline">
                заполните форму
              </Link>{" "}
              для получения временной полнофункциональной лицензии. Временная
              лицензия автоматически будет отправлена на электронную почту,
              указанную в запросе.
            </p>
          </div>
          <Secure />
          <div className="grid grid-cols-2 gap-x-[20px] gap-y-[20px] mt-[27px] max-lg:grid-cols-1">
            {download.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-[40px] p-[48px] bg-[#F2F5F4] rounded-[36px]"
              >
                <span className="w-[80px] h-[80px] bg-[#408077] flex items-center justify-center rounded-2xl">
                  <Image
                    src={passwordIcon}
                    alt="passwordIcon"
                    width={28}
                    height={28}
                  />
                </span>
                <div className="flex  flex-col gap-y-4">
                  <h1 className="text-[32px] font-semibold text-[#262F33]">
                    {item.name}
                  </h1>
                  <p className="text-[18px] text-[#262F33]  font-normal max-w-[484px]">
                    {item.description}
                  </p>
                </div>
                <div className="flex  items-center justify-between max-sm:flex-col gap-y-[20px]">
                  <Link
                    href="#"
                    className="text-[18px] font-medium text-[#408077] underline"
                  >
                    Документация
                  </Link>
                  <div className="flex items-center  ">
                    <button className="border border-[#408077] text-[#408077] px-[36px] py-[14px] text-[18px] rounded-xl hover:bg-[#408077] hover:text-white duration-500">
                      Скачать
                    </button>
                    <button className=" flex items-center justify-center w-[57px] h-[57px] rounded-xl bg-[#408077] text-white hover:bg-white hover:text-[#408077] border  hover:border-[#408077] transition-all duration-500">
                      <RiDownloadLine size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownLoadSec;
