import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import topRight from "../../../assets/products/securePage/img/toprightIcon.png";
import passwordRedImg from "../../../assets/products/securePage/img/passwordRed.png";
import passwordGreenImg from "../../../assets/products/securePage/img/passwordGreen.png";
import Image from "next/image";

const AlmetibinPossibilities = () => {
  const free = [
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Ограничение срока хранения	",
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: "Обязательный пароль.",
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: "Удаление после прочтения.",
    },

    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Локальная аутентификация",
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: "LDAP",
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: "Единый вход (SAML)",
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: "Изменение текста верхней полосы",
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: "Автоматическое создание пароля",
    },
    {
      icon: <MdOutlineClear className="text-red-600" />,
      text: "Создание заметок через API",
    },
  ];
  const bisness = [
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Ограничение срока хранения	",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Обязательный пароль.",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Удаление после прочтения.",
    },

    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Локальная аутентификация",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "LDAP",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Единый вход (SAML)",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Изменение текста верхней полосы",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Автоматическое создание пароля",
    },
    {
      icon: <IoMdCheckmark className="text-[#408077]" />,
      text: "Создание заметок через API",
    },
  ];
  return (
    <div>
      <div className="container p-5">
        <div className="flex items-center flex-col justify-center w-[100%] gap-[40px] ">
          <div className="flex items-center flex-col gap-[10px]">
            <h1 className="text-[60px] font-[600] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px]">
              Редакции
            </h1>
          </div>
          <div className="flex items-center gap-[20px] max-lg:flex-col gap-y-[40px]">
            <div className="max-w-[450px] lg:h-[700px] relative bg-[#F2F5F4] rounded-[10px] p-[40px] flex items-center flex-col justify-center gap-[30px] max-sm:p-[30px]">
              <Image
                src={passwordRedImg}
                alt=""
                loading="lazy"
                className="absolute top-[-20px] "
              />
              <div className="flex items-center flex-col gap-[10px]">
                <h2 className="text-[40px] ">Бесплатная</h2>
              </div>
              <div className="w-[100%] h-[2px] bg-gray-300"></div>
              <div className="flex items-start flex-col gap-[10px]">
                {free.map((el, idx) => (
                  <div className="flex items-start gap-[10px]" key={idx}>
                    <a className="text-[20px]">{el.icon}</a>
                    <h6 className="text-[20px]">{el.text}</h6>
                  </div>
                ))}
              </div>
              <p className="text-[20px]">
                Максимальное количество пользователей:{" "}
                <span className="font-[600]">10</span>
              </p>
              <div className="flex items-center">
                <button className="sm:py-[10px] max-sm:py-[12px] sm:px-[50px] max-sm:px-[27px] sm:text-[18px]  max-sm:text-[14px] text-[#408077] font-[600] rounded-[10px] border-2 border-solid border-[#408077] hover:bg-[#408077] hover:text-white transition-all">
                  Скачать бесплатно
                </button>
                <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[10px]">
                  <Image src={topRight} alt="" width={14} height={14} />
                </button>
              </div>
            </div>
            <div className="max-w-[450px] lg:h-[700px] relative bg-[#F2F5F4] rounded-[10px] p-[40px] flex items-center flex-col justify-center gap-[30px] max-sm:p-[30px]">
              <Image
                src={passwordGreenImg}
                alt=""
                className="absolute top-[-20px]"
              />
              <div className="flex items-center flex-col gap-[10px]">
                <h2 className="text-[40px] ">Бизнес</h2>
              </div>
              <div className="w-[100%] h-[2px] bg-gray-300"></div>
              <div className="flex items-start flex-col gap-[10px]">
                {bisness.map((el, idx) => (
                  <div className="flex items-start gap-[10px]" key={idx}>
                    <a className="text-[20px]">{el.icon}</a>
                    <h6 className="text-[20px]">{el.text}</h6>
                  </div>
                ))}
              </div>
              <p className="text-[20px]">
                Максимальное количество пользователей:{" "}
                <span className="font-[600]">согласно лицензии</span>
              </p>
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

export default AlmetibinPossibilities;
