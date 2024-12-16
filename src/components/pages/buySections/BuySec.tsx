import BuyForm from "@/components/Layout/ui/buy/BuyForm";
import Link from "next/link";
import React from "react";
import CommonQuestions from "./CommonQuestions";

const BuySec = () => {
  return (
    <section>
      <div className="container p-5">
        <div className=" flex flex-col items-center">
          <div className="flex flex-col gap-y-[40px] text-center">
            <h1 className="text-[73px] font-semibold max-lg:text-[62px] max-md:text-[42px]">
              Купить
            </h1>
            <p className="text-[18px] text-[#262F33] font-normal max-w-[580px]">
              Пожалуйста, отправьте нам заявку, чтобы получить расчет. Если у
              вас есть вопросы о лицензировании, мы будем рады помочь. Вы можете
              заполнить форму или написать нам по адресу{" "}
              <Link href="#" className="text-[18px] font-normal text-[#408077]">
                contact@strongpass.ru
              </Link>{" "}
              и наш менеджер свяжется с вами
            </p>
          </div>
          <BuyForm />
          <CommonQuestions />   
        </div>
      </div>
    </section>
  );
};

export default BuySec;
