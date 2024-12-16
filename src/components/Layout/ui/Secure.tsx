import React from "react";
import Image from "next/image";
import Link from "next/link";
import secureIcon from "../../../assets/products/almetibinPage/downloadIcons/img/secure.svg";
import downloadIcon from "../../../assets/products/almetibinPage/downloadIcons/img/download.svg";

const Secure = () => {
  return (
    <div className="w-full p-[48px] rounded-[36px] flex  bg-[#F2F5F4] mt-[60px] relative gap-x-[40px] max-lg:flex-col ">
      <span className="w-[80px] h-[80px] bg-[#408077] rounded-2xl flex items-center justify-center">
        <Image src={secureIcon} alt="secure icon " width={23} height={28} />
      </span>
      <div className="flex flex-col gap-y-[30px]">
        <div className="flex flex-col gap-x-3">
          <h1 className="text-[32px] font-semibold py-1">Проактивная защита</h1>
          <p className="text-[18px] font-normal py-1 text-[#262F33] max-w-[964px]">
            Проверка пароля в момент установки и блокировка операции, если новый
            пароль считается слабым или скомпрометированным.
          </p>
          <Link
            href="#"
            className="text-[18px] font-semibold text-[#408077] flex items-center gap-x-3 py-1 underline"
          >
            Документация
          </Link>
        </div>

        <div className="flex flex-col gap-x-[10px] ">
          <p className="text-[18px]  font-semibold text-[#262F33] p-1">
            Для доменных машин:
          </p>
          <div className="flex items-center gap-x-[40px] max-sm:flex-col max-sm:items-start gap-y-[10px]    ">
            <Link
              href="#"
              className="text-[18px] font-semibold text-[#408077] flex items-center gap-x-3"
            >
              <Image
                src={downloadIcon}
                alt="downloadIcon"
                width={15}
                height={18}
                className="hover:scale-110 transition-all"
              />
              Active Directory
            </Link>
            <Link
              href="#"
              className="text-[18px] font-semibold text-[#408077] flex items-center gap-x-3"
            >
              <Image
                src={downloadIcon}
                alt="downloadIcon"
                width={15}
                height={18}
                className="hover:scale-110 transition-all"
              />
              FreeIPA, ALD Pro
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-x-[10px]">
          <p className="text-[18px]  font-semibold text-[#262F33] p-1">
            Для недоменных машин:
          </p>
          <div className="flex items-center gap-x-[40px] max-sm:flex-col max-sm:items-start gap-y-[10px] ">
            <Link
              href="#"
              className="text-[18px] font-semibold text-[#408077] flex items-center gap-x-3"
            >
              <Image
                src={downloadIcon}
                alt="downloadIcon"
                width={15}
                height={18}
                className="hover:scale-110 transition-all"
              />
              Сервер
            </Link>
            <Link
              href="#"
              className="text-[18px] font-semibold text-[#408077] flex items-center gap-x-3"
            >
              <Image
                src={downloadIcon}
                alt="downloadIcon"
                width={15}
                height={18}
                className="hover:scale-110 transition-all"
              />
              Клиент Windows
            </Link>
            <Link
              href="#"
              className="text-[18px] font-semibold text-[#408077] flex items-center gap-x-3"
            >
              <Image
                src={downloadIcon}
                alt="downloadIcon"
                width={15}
                height={18}
                className="hover:scale-110 transition-all"
              />
              Клиент Linux
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secure;
