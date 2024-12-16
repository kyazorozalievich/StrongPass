"use client";
import React from "react";
import { MdOutlineClear } from "react-icons/md";
import useAskQuestionStore from "@/zustand/useAskQuestionStore";
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
}

const AskQuestion = () => {
  const { setToggle } = useAskQuestionStore();
  const { register, handleSubmit, reset } = useForm<IMessage>();

  const onSubmit: SubmitHandler<IMessage> = (data) => {
    let my_id = `-1002155692436`;
    let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
    let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

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
    <div className="w-[100%] relative h-[100vh] flex items-center justify-center">
      <ToastContainer />
      <button
        className="absolute top-[20px] right-[20px] w-[50px] h-[50px] bg-[#408077] flex items-center justify-center text-[25px] rounded-[10px]"
        onClick={() => setToggle(false)}
      >
        <MdOutlineClear className="text-white" />
      </button>
      <div className="container flex items-center flex-col justify-center">
        <div className="w-[40%] h-[700px] bg-white rounded-[40px] p-[40px] flex items-start flex-col justify-center gap-[20px]">
          <h2 className="text-[35px] font-[600]">Задать вопрос</h2>
          <h6 className="text-[15px] ">
            Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время
            и ответит на все вопросы.
          </h6>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center flex-col w-[100%] gap-[10px]"
          >
            <input
              type="text"
              placeholder="Фамилия Имя Отчество"
              {...register("fio", { required: true })}
              className="w-[100%] py-[10px] px-[10px] border-[2px] border-solid border-gray-300 rounded-[10px] bg-transparent focus:border-[#408077]"
            />
            <input
              type="email"
              placeholder="Электронная почта"
              {...register("email", { required: true })}
              className="w-[100%] py-[10px] px-[10px] border-[2px] border-solid border-gray-300 rounded-[10px] bg-transparent focus:border-[#408077]"
            />
            <input
              type="number"
              placeholder="Телефон"
              {...register("phone", { required: true })}
              className="w-[100%] py-[10px] px-[10px] border-[2px] border-solid border-gray-300 rounded-[10px] bg-transparent focus:border-[#408077]"
            />
            <textarea
              placeholder="Комментарий"
              {...register("message", { required: true })}
              className="w-[100%] h-[150px] py-[10px] px-[10px] border-[2px] border-solid border-gray-300 rounded-[10px] bg-transparent focus:border-[#408077]"
            />
            <div className="flex w-[100%]">
              <button
                type="submit"
                className="border-2 border-[#408077] bg-transparent text-[#408077] py-[10px] w-[90%] rounded-[13px] hover:bg-[#408077] hover:text-white transition-all"
              >
                Задать вопрос
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

export default AskQuestion;
