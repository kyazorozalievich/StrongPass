import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import topRight from "../../../assets/products/securePage/img/toprightIcon.png";
import passwordRedImg from "../../../assets/products/securePage/img/passwordRed.png";
import passwordGreenImg from "../../../assets/products/securePage/img/passwordGreen.png";
import Image from "next/image";

const Possibilities = () => {
  const standart = [
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Проверка по базе скомпрометированных паролей",
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: "Список запрещенных паролей",
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: "Исключения из проверок по имени пользователя, группы",
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: `${"Белый"} список паролей`,
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: "Strongpass. Самопроверка",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Техническая поддержка",
    },
  ];
  const corp = [
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Проверка по базе скомпрометированных паролей",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Список запрещенных паролей",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Исключения из проверок по имени пользователя, группы",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: `${"Белый"} список паролей`,
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Strongpass. Самопроверка",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Техническая поддержка",
    },
  ];
  return (
    <div>
      <div className="container p-5">
        <div className="flex items-center flex-col justify-center w-[100%] gap-[40px]">
          <div className="flex items-center flex-col gap-[10px] px-4 ">
            <h1 className="text-[60px] font-[600] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] max-sm:text-center">
              Возможности
            </h1>
            <h6 className="text-[20px] max-sm:text-center ">
              Продукт лицензируется по количеству защищаемых учетных записей в
              домене.
            </h6>
          </div>
          <div className="flex items-center gap-[20px] max-lg:flex-col gap-y-[40px]">
            <div className="max-w-[450px] lg:h-[650px] relative bg-[#F2F5F4] rounded-[10px] p-[40px] flex items-center flex-col justify-center gap-[30px]">
              <Image
                src={passwordRedImg}
                alt=""
                className="absolute top-[-20px]"
              />
              <div className="flex items-center flex-col gap-[10px]">
                <h2 className="text-[40px] ">Стандарт</h2>
                <h6 className="text-[20px] text-gray-600">По запросу</h6>
              </div>
              <div className="w-[100%] h-[2px] bg-gray-300"></div>
              <div className="flex items-start flex-col gap-[10px]">
                {standart.map((el, idx) => (
                  <div className="flex items-start gap-[10px]" key={idx}>
                    <a className="text-[20px]">{el.icon}</a>
                    <h6 className="text-[20px]">{el.text}</h6>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
              <button className="sm:py-[10px] max-sm:py-[12px] sm:px-[50px] max-sm:px-[15px] sm:text-[18px]  max-sm:text-[14px] text-[#408077] font-[600] rounded-[10px] border-2 border-solid border-[#408077] hover:bg-[#408077] hover:text-white transition-all">
                  Попробовать бесплатно
                </button>
                <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[10px]">
                  <Image src={topRight} alt="" width={14} height={14} />
                </button>
              </div>
            </div>
            <div className="max-w-[450px] lg:h-[650px] relative bg-[#F2F5F4] rounded-[10px] p-[40px] flex items-center flex-col justify-center gap-[30px]">
              <Image
                src={passwordGreenImg}
                alt=""
                className="absolute top-[-20px]"
              />
              <div className="flex items-center flex-col gap-[10px]">
                <h2 className="text-[40px] ">Корп</h2>
                <h6 className="text-[20px] text-gray-600">По запросу</h6>
              </div>
              <div className="w-[100%] h-[2px] bg-gray-300"></div>
              <div className="flex items-start flex-col gap-[10px]">
                {corp.map((el, idx) => (
                  <div className="flex items-start gap-[10px]" key={idx}>
                    <a className="text-[20px]">{el.icon}</a>
                    <h6 className="text-[20px]">{el.text}</h6>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
              <button className="sm:py-[10px] max-sm:py-[12px] sm:px-[50px] max-sm:px-[15px] sm:text-[18px]  max-sm:text-[14px] text-[#408077] font-[600] rounded-[10px] border-2 border-solid border-[#408077] hover:bg-[#408077] hover:text-white transition-all">
                  Попробовать бесплатно
                </button>
                <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[10px]">
                  <Image src={topRight} alt="" width={14} height={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
