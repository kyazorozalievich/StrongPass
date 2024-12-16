"use client";
import React from "react";
import { MdErrorOutline, MdOutlineClear } from "react-icons/md";
import useLicenseStore from "@/zustand/useLicenseStore";
import { SubmitHandler, useForm } from "react-hook-form";
import rightArrow from "../../../../assets/header-logos/img/strongpass-right-logo.svg";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IMessage {
  fio: string;
  email: string;
  phone: number;
  message: string;
  company: string;
  accounting: string;
}

const License = () => {
  const { setToggle } = useLicenseStore();
  const { register, handleSubmit, reset } = useForm<IMessage>();

  const onSubmit: SubmitHandler<IMessage> = (data) => {
    let my_id = `-1002155692436`;
    let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
    let api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    let newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
      StrongPass / Ask-Question!
      User name: ${data.fio}
      User phone: ${data.phone}
      User email: ${data.email}
      User message: ${data.message}
      `,
    };

    toast.success("Ваш вопрос успешно отправлено!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    axios.post(api_key, newProduct);
    reset();
  };

  return (
    <div className="w-[100%] relative h-[100%] flex items-center justify-center">
      <ToastContainer />
      <button
        className="absolute top-[20px] right-[20px] w-[50px] h-[50px] bg-[#408077] flex items-center justify-center text-[25px] rounded-[10px] max-lg:hidden"
        onClick={() => setToggle(false)}
      >
        <MdOutlineClear className="text-white" />
      </button>
      <div className="container flex items-center flex-col justify-center ">
        <div className="w-[90%] h-[700px] bg-white rounded-[40px] p-[40px] flex items-start flex-col justify-start gap-[20px] overflow-y-auto scroll-hidden  relative">
          <button
            className=" hidden absolute top-[10px] right-[20px] w-[40px] h-[40px] bg-[#408077] max-lg:flex items-center justify-center text-[25px] rounded-[10px]"
            onClick={() => setToggle(false)}
          >
            <MdOutlineClear className="text-white" />
          </button>
          <div className="flex flex-col">
            <h2 className="text-[48px] font-[600] max-lg:text-[38px] max-md:tex-[30px] max-sm:text-[26px]">
              Запросить бесплатную тестовую лицензию
            </h2>
            <h6 className="text-[15px]">
              Временная лицензия автоматически будет отправлена на электронную
              почту, указанную в запросе. Срок действия временной лицензии - 21
              день.
            </h6>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center flex-col w-[100%] gap-[10px]"
          >
            <div className="w-full flex items-center gap-x-[20px] max-sm:flex-col">
              <div className="w-full flex flex-col gap-y-[5px]">
                <h6>
                  Контактное лицо <span className="text-red-500">*</span>
                </h6>
                <input
                  type="text"
                  placeholder="Фамилия Имя Отчество"
                  {...register("fio", { required: true })}
                  className="w-[100%] py-[10px] px-[10px] border-[2px] border-solid border-gray-300 rounded-[10px] bg-transparent focus:border-[#408077]"
                />
              </div>
              <div className="w-full flex flex-col gap-[5px]">
                <h6>
                  Компания <span className="text-red-500">*</span>
                </h6>
                <input
                  type="text"
                  placeholder="Название или ссылка на сайт"
                  {...register("company", { required: true })}
                  className="w-full py-[10px] px-[10px] border-[2px] border-solid border-gray-300 rounded-[10px] bg-transparent focus:border-[#408077]"
                />
              </div>
            </div>
            <div className="w-full flex items-center gap-x-[20px]  max-sm:flex-col">
              <div className="w-full flex flex-col gap-[5px]">
                <h6>
                  Электронная почта <span className="text-red-500">*</span>
                </h6>
                <input
                  type="email"
                  placeholder="Электронная почта"
                  {...register("email", { required: true })}
                  className="w-[100%] py-[10px] px-[10px] border-[2px] border-solid border-gray-300 rounded-[10px] bg-transparent focus:border-[#408077]"
                />
              </div>
              <div className="w-full flex flex-col gap-[5px]">
                <h6>
                  Телефон <span className="text-red-500">*</span>
                </h6>
                <input
                  type="number"
                  placeholder="Телефон"
                  {...register("phone", { required: true })}
                  className="w-[100%] py-[10px] px-[10px] border-[2px] border-solid border-gray-300 rounded-[10px] bg-transparent focus:border-[#408077]"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-[5px]">
              <h6>
                Кол-во учетных записей <span className="text-red-500">*</span>
              </h6>
              <input
                type="text"
                placeholder="10"
                {...register("accounting", { required: true })}
                className="w-[100%] py-[10px] px-[10px] border-[2px] border-solid border-gray-300 rounded-[10px] bg-transparent focus:border-[#408077]"
              />
              <h6 className="flex items-center gap-[5px] text-gray-400">
                <MdErrorOutline />
                Как посчитать количество учетных записей?
              </h6>
            </div>

            <div className="w-full flex flex-col gap-[5px]">
              <h6>
                Комментарий <span className="text-red-500">*</span>
              </h6>
              <textarea
                placeholder="Дополнительная информация"
                {...register("message", { required: true })}
                className="w-[100%] h-[150px] py-[10px] px-[10px] border-[2px] border-solid border-gray-300 rounded-[10px] bg-transparent focus:border-[#408077]"
              />
            </div>
            <div className="flex w-[100%]">
              <button
                type="submit"
                className="border-2 border-[#408077] bg-transparent text-[#408077] py-[10px] w-[90%] rounded-[13px] hover:bg-[#408077] hover:text-white transition-all"
              >
                Отправить заявку
              </button>
              <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[10px]">
                <Image
                  src={rightArrow}
                  alt="header-logo"
                  width={14}
                  height={14}
                />
              </button>
            </div>
          </form>
          <p className="text-[15px] text-center text-gray-500">
            Нажимая кнопку «Отправить», вы даете свое конкретное,
            информированное и сознательное согласие на обработку и хранение
            ваших персональных данных и соглашаетесь с{" "}
            <span className="text-[#408077] border-b-[1px] border-b-solid border-b-[#408077]">
               Политикой конфиденциальности.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default License;
