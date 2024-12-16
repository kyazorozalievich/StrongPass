import React from "react";
import defenceIcon from "../../../assets/homePage/img/Defence-icon.svg";
import xxxIcon from "../../../assets/homePage/img/XXX-icon.svg";
import databaseIcon from "../../../assets/homePage/img/Database-icon.svg";
import dotted from "../../../assets/homePage/img/dotted.svg";
import rightArrow from "../../../assets/header-logos/img/strongpass-right-logo.svg";
import Image from "next/image";

const HomeProducts = () => {
  return (
    <section>
      <div className="container p-5">
        <div className="mt-[60px]">
          <h1 className="text-[64px] font-[700] text-[#262F33]  max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px]">
            Продукты
          </h1>
          <p className="text-[18px] font-[400] text-[#262F33] mt-[10px]">
            Минимизируют вероятность взлома простыми средствами, помогут
            реализовать <br /> надежную парольную политику, обеспечат процессы,
            связанные с паролями.
          </p>

          {/* MAIN BLOCKS  */}
          <div className="flex items-center justify-center gap-x-[20px] mt-[67px] max-xl max-lg:flex-col gap-y-[20px]">
            {/* BLOCK  */}
            <div className="w-full bg-[#F2F5F4] px-[27px] py-[27px] rounded-[30px]">
              <div className="w-[72px] h-[72px] bg-[#408077] rounded-[20px] flex items-center justify-center">
                <Image
                  src={defenceIcon}
                  alt="header-logo"
                  width={28}
                  height={23}
                />
              </div>
              <h2 className="text-[29px] font-[600] text-[#262F33] mt-[24px]">
                Проактивная <br /> защита
              </h2>
              <p className="text-[#262F33] text-[18px] font-[400] mt-[10px]">
                Проверка пароля в момент <br /> установки и блокировка операции,
                <br /> если новый пароль считается <br /> слабым или
                скомпрометированным.
              </p>

              <div className="flex items-center justify-between mt-[25px]">
                <Image src={dotted} alt="header-logo" width={24} height={6} />
                <div className="flex items-center">
                  <button className="border-2 border-[#408077] bg-transparent text-[#408077] py-[10px] px-[30px] rounded-[13px] hover:bg-[#408077] hover:text-white transition-all">
                    Подробнее
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
              </div>
            </div>
            {/* BLOCK  */}

            {/* BLOCK  */}
            <div className=" w-full bg-[#F2F5F4] px-[27px] py-[27px] rounded-[30px]">
              <div className="w-[72px] h-[72px] bg-[#408077] rounded-[20px] flex items-center justify-center">
                <Image src={xxxIcon} alt="header-logo" width={28} height={23} />
              </div>
              <h2 className="text-[29px] font-[600] text-[#262F33] mt-[24px]">
                Самопроверка
              </h2>
              <p className="text-[#262F33] text-[18px] font-[400] mt-[10px]">
                Сервис самостоятельной проверки <br /> пароля на надежность.
              </p>

              <div className="flex items-center justify-between mt-[123px]">
                <Image src={dotted} alt="header-logo" width={24} height={6} />
                <div className="flex items-center">
                  <button className="border-2 border-[#408077] bg-transparent text-[#408077] py-[10px] px-[30px] rounded-[13px] hover:bg-[#408077] hover:text-white transition-all">
                    Подробнее
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
              </div>
            </div>
            {/* BLOCK  */}

            {/* BLOCK  */}
            <div className="w-full bg-[#F2F5F4] px-[27px] py-[27px] rounded-[30px]">
              <div className="w-[72px] h-[72px] bg-[#408077] rounded-[20px] flex items-center justify-center">
                <Image
                  src={databaseIcon}
                  alt="header-logo"
                  width={28}
                  height={23}
                />
              </div>
              <h2 className="text-[29px] font-[600] text-[#262F33] mt-[24px]">
                Almetibin
              </h2>

              <p className="text-[#262F33] text-[18px] font-[400] mt-[10px] ">
                Безопасный обмен паролями, <br /> чувствительной информацией{" "}
                <br /> с контрагентами или внутри <br /> компании.
              </p>

              <div className="flex items-center justify-between mt-[65px]">
                <Image src={dotted} alt="header-logo" width={24} height={6} />
                <div className="flex items-center">
                  <button className="border-2 border-[#408077] bg-transparent text-[#408077] py-[10px] px-[30px] rounded-[13px] hover:bg-[#408077] hover:text-white transition-all">
                    Подробнее
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
              </div>
            </div>
            {/* BLOCK  */}
          </div>
          {/* BLOCK  */}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
