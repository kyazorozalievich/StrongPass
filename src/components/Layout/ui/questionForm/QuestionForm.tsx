"use client";
import React from "react";
import formMessageIcon from "../../../../assets/homePage/img/FormMessage-icon.svg";
import formQuestionIcon from "../../../../assets/homePage/img/FormQuestion-icon.svg";
import Image from "next/image";
import rightArrow from "../../../../assets/header-logos/img/strongpass-right-logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface IMessage {
  fio: string;
  email: string;
  phone: number;
  message: string;
}
const QuestionForm = () => {
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
    <section>
      <ToastContainer />
      <div className="container">
        {/* MAIN FORM  */}
        <div className="flex lg: gap-x-[50px] justify-between w-full  bg-[#408077] rounded-[24px] p-[60px] mt-[100px] max-lg:flex-col gap-y-[40px] max-sm:p-[30px]">
          {/* FORM LEFT  */}
          <div>
            <h2 className="text-[64px] font-[600] leading-[60px] text-white max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] ">
              Остались вопросы?
            </h2>
            <p className="text-[18px] font-[400] mt-[30px] text-white">
              Заполните форму и наши специалисты <br /> свяжутся с вами
              в ближайшее время.
            </p>

            <div className="flex items-center gap-[8px] mt-[268px] max-lg:mt-[40px]">
              <div className="w-[60px] h-[60px] bg-white rounded-[17px] flex items-center justify-center">
                <Image
                  src={formMessageIcon}
                  alt="header-logo"
                  width={20}
                  height={15}
                />
              </div>
              <div className="w-[60px] h-[60px] bg-white rounded-[17px] flex items-center justify-center">
                <Image
                  src={formQuestionIcon}
                  alt="header-logo"
                  width={20}
                  height={15}
                />
              </div>
            </div>
          </div>
          {/* FORM LEFT  */}

          {/* FORM RIGHT  */}
          <form
            className="bg-white rounded-[27px] shadow-lg p-[36px] lg:w-[477px] max-lg:w-full max-sm:p-[20px] max-sm:rounded-[20px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-[10px]">
              <input
                type="text"
                placeholder="Фамилия Имя Отчество"
                className="w-full border bg-transparent border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77]"
                {...register("fio", { required: true })}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Электронная почта"
                className="w-full border bg-transparent border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77]"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Телефон"
                className="w-full border bg-transparent border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77]"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Комментарий"
                className="w-full h-[160px] border bg-transparent border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77] resize-none"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div className="flex items-center justify-between mt-[-15px]">
              <button
                type="submit"
                className="flex items-center justify-center bg-transparent border border-[#407F77] text-[#407F77] rounded-lg sm:px-6 py-[10px] hover:bg-[#407F77] hover:text-white transition-colors w-full max-sm:px-4"
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
            <p className="text-xs text-gray-500 mt-4 text-center">
              Нажимая "отправить" я даю согласие на обработку моих персональных
              данных для цели ответа на мою заявку.
            </p>
          </form>

          {/* FORM RIGHT  */}
        </div>
        {/* MAIN FORM  */}
      </div>
    </section>
  );
};

export default QuestionForm;
