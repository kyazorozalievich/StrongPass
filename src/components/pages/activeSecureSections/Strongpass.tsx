import React from "react";
import strongpassImg from "../../../assets/products/securePage/img/strongpassImg.png";
import strongpassImg2 from "../../../assets/products/securePage/img/strongpassImg2.png";
import strongpassImg3 from "../../../assets/products/securePage/img/strongpassImg3.png";
import Image from "next/image";

const Strongpass = () => {
  return (
    <div>
      <div className="container flex items-start flex-col gap-[40px]  p-5">
        <h1 className="text-[60px] lg:w-[500px] font-[600] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] max-lg:text-center max-lg:w-full">
          Почему нужен <span className="text-[#408077]">Strongpass</span>?
        </h1>
        <div className="w-[100%] flex items-center flex-col gap-[40px]">
          <div className="flex items-center justify-between w-full max-lg:flex-col gap-y-[20px]">
            <div className="lg:max-w-[580px] lg:h-[743px]  rounded-[10px] bg-[#F2F5F4] flex items-center flex-col justify-center p-[48px]">
              <Image
                src={strongpassImg}
                alt="strongpassImg"
                width={300}
                height={300}
              />
              <h2 className="text-[35px] font-semibold lg:max-w-[500px] flex items-center mt-[24px] max-sm:text-[22px]">
                Подбор паролей — одна из самых результативных атак
              </h2>
              <p className="text-[20px] lg:max-w-[500px] mt-[16px]">
                По данным отчетов компаний Позитив Текнолоджиз и Лаборатории
                Касперского атаки подбора пароля были успешны в 71% случаев при
                проникновении во внутреннюю сеть компании снаружи и в 58%
                при получении максимальных привилегий. Причина такой высокой
                успешности атак - слабые или скомпрометированные пароли.
              </p>
            </div>
            <div className="lg:max-w-[580px] lg:h-[743px] rounded-[10px] bg-[#F2F5F4] flex items-center flex-col justify-center  p-[48px]">
              <Image src={strongpassImg2} alt="" width={300} height={300} />
              <h2 className="text-[35px] font-semibold lg:max-w-[500px] flex items-center mt-[33px] max-sm:text-[22px] ">
                Возможности групповых политик недостаточны
              </h2>
              <p className="text-[20px] lg:max-w-[500px] mb-[29px] mt-[16px]">
                Групповые политики позволяют настроить минимальную длину пароля,
                наличие букв, цифр, специальных символов. Однако, это не мешает
                пользователям создавать пароли, отвечающие требованиям политик,
                но при этом быть легко угадываемыми или часто используемыми.
              </p>
            </div>
          </div>
          <div className="w-[100%] flex items-center justify-between p-[48px] rounded-[10px] bg-[#F2F5F4] max-lg:flex-col gap-y-[34px]">
            <div className="flex items-start flex-col gap-[20px]">
              <h2 className="text-[35px] font-[600] flex items-center max-sm:text-[22px]">
                Скомпрометированные пароли
              </h2>
              <p className="text-[20px] lg:max-w-[500px]">
                Групповые политики позволяют настроить минимальную длину пароля,
                наличие букв, цифр, специальных символов. Однако, это не мешает
                пользователям создавать пароли, отвечающие требованиям политик,
                но при этом быть легко угадываемыми или часто используемыми.
              </p>
            </div>
            <Image src={strongpassImg3} alt="" width={400} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strongpass;
