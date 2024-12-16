"use client";
import Image from "next/image";
import React from "react";
import rightArrow from "../../../assets/header-logos/img/strongpass-right-logo.svg";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

interface IMessage {
  fio: string;
  email: string;
  phone: number;
  message: string;
}
const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm<IMessage>();

  const onSubmit: SubmitHandler<IMessage> = (data) => {
    let my_id = `-1002155692436`;
    let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
    let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

    let newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
      StrongPass / Contacts!
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
    <section className="mt-[37px] mb-[50px]">
      <ToastContainer />
      <div className="container p-5">
        {/* MAIN  */}
        <div className="flex flex-col items-center">
          {/* HEAD  */}
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-[70px] font-[600] text-[#262F33]">Контакты</h1>
            <p className="text-[18px] font-[400] text-[#262F33] mt-[30px] text-center">
              Мы будем благодарны за любую обратную связь и предложения! <br />{" "}
              Вы можете связаться с нами по контактам или заполнив форму.
            </p>

            <div className="flex items-center gap-x-[20px] mt-[30px] max-sm:flex-col gap-y-[20px]">
              <div className="flex items-center justify-center flex-col gap-[8px] px-[20px]">
                <span className="text-[15px] font-[400] text-[#7A7E80]">
                  Коммерческие вопросы:
                </span>
                <p className="text-[19px] font-[600] text-[#262F33]">
                  contact@strongpass.ru
                </p>
              </div>
              <div className="flex items-center justify-center flex-col gap-[8px] px-[20px]">
                <span className="text-[15px] font-[400] text-[#7A7E80] ">
                  Техническая поддержка:
                </span>
                <p className="text-[19px] font-[600] text-[#262F33]">
                  support@strongpass.ru
                </p>
              </div>
            </div>
          </div>
          {/* HEAD  */}

          {/* FORM FEEDBACK */}
          <div className="flex items-center justify-center flex-col mt-[70px] max-w-[580px]  ">
            <h4 className="text-[32px] font-[600] text-[#262F33]">
              Форма обратной связи
            </h4>

            <form
              className="bg-white pt-[40px] p-[28px] max-w-[570px]  rounded-xl"
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
                  className=" w-full flex items-center justify-center bg-transparent border border-[#407F77] text-[#407F77] rounded-lg px-6 py-[10px] hover:bg-[#407F77] hover:text-white transition-colors"
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
              <p className="text-[15px] font-[400] text-gray-500 mt-[30px] text-center">
                Нажимая кнопку «Отправить», вы даете свое конкретное,
                информированное и сознательное согласие на обработку и хранение
                ваших персональных данных и соглашаетесь{" "}
                <span className="text-[#408077] underline">
                  с Политикой конфиденциальности.
                </span>
              </p>
            </form>
          </div>
          {/* FORM FEEDBACK */}
        </div>
        {/* MAIN  */}
      </div>
    </section>
  );
};

export default ContactSection;
