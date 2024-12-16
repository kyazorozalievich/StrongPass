import React from "react";
import workImg from "../../../assets/products/almetibinPage/downloadIcons/img/almetibinWorkImg.png";
import Image from "next/image";

const AlmetibinWork = () => {
  return (
    <div className="my-[100px]">
      <div className="container p-5">
        <div className="flex items-center justify-between w-[100%] max-lg:flex-col-reverse gap-y-[20px]">
          <div className="max-w-[600px] lg:h-[600px] rounded-[40px] bg-[#F2F5F4] relative flex items-end flex-col justify-center max-lg:pt-[48px] max-lg:pb-[48px] max-lg:pl-[48px]">
            <Image
              src={workImg}
              alt="Work Page Image"
              width={550}
              height={550}
              className="object-cover"
            />
          </div>
          <div className="flex items-start flex-col gap-[20px]">
            <h1 className="max-w-[400px] text-[60px] leading-[70px] font-[600] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px]">
              Как это работает?
            </h1>
            <p className="max-w-[450px] text-[20px]">
              Almetibin предоставляет удобный и безопасный способ обмена
              паролями, данными учетных записей, чувствительной информацией. С
              помощью Almetibin вы можете отказаться от обычных и небезопасных
              методов обмена чувствительной информацией, таких как электронная
              почта, мессенджеры, текстовые сообщения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmetibinWork;
