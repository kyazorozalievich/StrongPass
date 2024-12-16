import React from "react";
import workImg from "../../../assets/products/securePage/img/workPageImg.png";
import playerIcon from "../../../assets/products/securePage/img/playerIcon.svg";
import Image from "next/image";
import group_5 from "../../../assets/products/securePage/group_5.png"

const Work = () => {
  return (
    <div className="my-[100px]">
      <div className="container p-5">
        <div className="flex items-center justify-between w-[100%] gap-x-[20px] max-lg:flex-col-reverse gap-y-[16px] ">
          <div className="max-w-[600px] rounded-[40px] bg-[#F2F5F4] relative flex items-end flex-col justify-center   pt-[60px] pl-[60px] pb-[60px]">
            <Image
              src={workImg}
              alt="Work Page Image"
              width={500}
              height={500}
              className="object-cover"
            />
             <Image
              src={group_5}
              alt="group_5"
             className="absolute bottom-0 right-0"
            />

            <div className="flex items-center absolute bottom-0 right-0 py-[20px] px-[20px]">
              <button className="py-[10px] px-[30px] rounded-[10px] border-2 border-solid border-[#408077] hover:bg-[#408077] hover:text-white transition-all">
                Смотреть видео
              </button>
              <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[10px]">
                <Image src={playerIcon} alt="" width={14} height={14} />
              </button>
            </div>
          </div>
          <div className="flex items-start flex-col gap-[20px] ">
            <h1 className="max-w-[400px] text-[60px] leading-[70px] font-[600] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px]">
              Как это работает?
            </h1>
            <p className="lg:max-w-[450px] text-[20px] max-lg:max-w-[600px] max-sm:text-[16px]">
              В момент попытки установить новый пароль инициируется проверка
              надежности пароля с помощью Strongpass. Проверка производится по
              более чем 866 миллионам слабых паролей. При наличии
              индивидуального списка запрещенных паролей, составленного внутри
              компании, проводятся дополнительные проверки. На основании
              проверки разрешается или запрещается установка нового пароля.
              Strongpass должен быть установлен на всех контроллерах домена
              (Windows, Linux), кроме read-only контроллеров. Для работы
              приложения права доменного администратора не требуются.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
