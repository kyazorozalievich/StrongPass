"use client";
import Image from "next/image";
import React from "react";
import rightArrow from "../../../../assets/header-logos/img/strongpass-right-logo.svg";
import Link from "next/link";
import { PiInfoBold } from "react-icons/pi";
import PopoverContent from "./PopoverContent";

const BuyForm = () => {
  return (
    <div className=" lg:w-[780px] ">
      <form className="bg-white  pt-[40px] px-[28px] py-[40px] w-full ">
        {/* Full Name */}
        <div className="mb-[10px] flex items-center max-lg:flex-col max-lg:items-start">
          <label
            htmlFor="fullname"
            className="text-[14px] font-[400px] text-[#262F33] w-[219px]"
          >
            Фамилия Имя Отчество <span className="text-red-500">*</span>
          </label>
          <input
            id="fullname"
            type="text"
            placeholder="Фамилия Имя Отчество"
            required
            className="w-full border border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77]"
          />
        </div>

        {/* Email */}
        <div className="mb-4 flex items-center max-lg:flex-col max-lg:items-start">
          <label
            htmlFor="email"
            className="text-[14px] font-[400px] text-[#262F33] w-[219px]"
          >
            Электронная почта <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@mail.ru"
            required
            className="w-full border border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77]"
          />
        </div>

        {/* Phone */}
        <div className="mb-4 flex items-center max-lg:flex-col max-lg:items-start">
          <label
            htmlFor="phone"
            className="text-[14px] font-[400px] text-[#262F33] w-[219px]"
          >
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            required
            className="w-full border border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77]"
          />
        </div>

        {/* Quantity */}
        <div className="mb-4 flex items-center max-lg:flex-col max-lg:items-start">
          <label
            htmlFor="quantity"
            className="text-[14px] font-[400px] text-[#262F33] w-[219px]"
          >
            Кол-во учетных записей <span className="text-red-500">*</span>
          </label>
          <div className=" w-full flex flex-col gap-y-3">
            <input
              id="quantity"
              type="text"
              placeholder="10"
              required
              className="w-full border border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77]"
            />
            <span className=" w-full flex items-center gap-x-[9px]">
              <PopoverContent>
                <PiInfoBold size={20} className=" text-[#7A7E80]" />
              </PopoverContent>
              <p className="text[14px] font-medium text-[#7A7E80]">
                Как посчитать количество учетных записей?
              </p>
            </span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mb-6 flex items-center max-lg:flex-col max-lg:items-start">
          <label
            htmlFor="additionalInfo"
            className="text-[14px] font-[400px] text-[#262F33] w-[219px]"
          >
            Комментарий
          </label>
          <textarea
            id="additionalInfo"
            placeholder="Дополнительная информация"
            className="w-full h-[160px] border border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77] resize-none"
          ></textarea>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col lg:pl-[170px]">
          <div className="flex items-center">
            <button
              type="submit"
              className="flex items-center justify-center bg-transparent border border-[#407F77] text-[#407F77] rounded-lg px-6 py-[10px] hover:bg-[#407F77] hover:text-white transition-all duration-500 lg:w-[230px] max-lg:w-full"
            >
              Отправить
            </button>
            <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[13px]">
              <Image
                src={rightArrow}
                alt="header-logo"
                width={14}
                height={14}
              />
            </button>
          </div>
          <div className="w-full flex">
            <p className="text-[16px] text-[#262F33] mt-4 lg:w-[480px] max-lg:text-center">
              Нажимая кнопку «Отправить», вы даете свое конкретное,
              информированное и сознательное согласие на обработку и хранение
              ваших персональных данных и соглашаетесь с{" "}
              <Link href="#" className="text-[16px] font-normal text-[#408077]">
                Политикой конфиденциальности.
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyForm;
