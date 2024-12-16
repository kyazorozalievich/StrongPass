import React from "react";
import FooterLogo from "../../assets/footer-logos/img/Footer-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[110px] border-t border-[#00000024] pt-[30px]">
      <div className="container px-5">
        {/* MAIN  */}
        <div className="flex items-start justify-between py-[30px] ">
          {/* FOOTER LOGO  */}
          <div className="max-sm:hidden">
            <Image src={FooterLogo} alt="header-logo" width={60} height={60} />
          </div>
          {/* FOOTER LOGO  */}
          {/* ROW1  */}
          <div className="flex flex-col gap-[6px]">
            <span className="text-[16px] font-[600] text-[#7A7E80]">
              Продукты и решения
            </span>
            <p className="text-[16px] font-[600] text-[#262F33] mt-[10px]">
              Strongpass. Проактивная защита.
            </p>
            <p className="text-[16px] font-[600] text-[#262F33]">
              Strongpass. Самопроверка.
            </p>
            <p className="text-[16px] font-[600] text-[#262F33]">Almetibin.</p>
          </div>
          {/* ROW1  */}

          {/* ROW2  */}
          <div className="flex flex-col gap-[6px]">
            <span className="text-[16px] font-[600] text-[#7A7E80]">
              Информация
            </span>

            <Link href="/download">
              <p className="text-[16px] font-[600] text-[#262F33]">Скачать</p>
            </Link>
            <Link href="/buy">
              <p className="text-[16px] font-[600] text-[#262F33]">Купить</p>
            </Link>
            <Link href="/article">
              <p className="text-[16px] font-[600] text-[#262F33]">Статьи</p>
            </Link>
            <Link href="/documentation">
              <p className="text-[16px] font-[600] text-[#262F33]">
                Документация
              </p>
            </Link>
            <Link href="/contacts">
              <p className="text-[16px] font-[600] text-[#262F33]">Контакты</p>
            </Link>
          </div>
          {/* ROW2  */}

          {/* ROW3  */}
          <div className="flex flex-col gap-[6px] max-sm:hidden ">
            <span className="text-[16px] font-[600] text-[#7A7E80]">
              Коммерческие вопросы:
            </span>
            <p className="text-[16px] font-[600] text-[#262F33]">
              contact@strongpass.ru
            </p>
            <span className="text-[16px] font-[600] text-[#7A7E80]">
              Техническая поддержка:
            </span>
            <p className="text-[16px] font-[600] text-[#262F33]">
              support@strongpass.ru
            </p>
            <h6 className="text-[16px] font-[600] text-[#408077]">
              Написать нам
            </h6>
          </div>
          {/* ROW3  */}
        </div>
        <div className="hidden flex-col gap-[6px] max-sm:flex items-center p-[20px] bg-[#F2F4F5] rounded-e-xl">
          <span className="text-[16px] font-[600] text-[#7A7E80]">
            Коммерческие вопросы:
          </span>
          <p className="text-[16px] font-[600] text-[#262F33]">
            contact@strongpass.ru
          </p>
          <span className="text-[16px] font-[600] text-[#7A7E80]">
            Техническая поддержка:
          </span>
          <p className="text-[16px] font-[600] text-[#262F33]">
            support@strongpass.ru
          </p>
          <h6 className="text-[16px] font-[600] text-[#408077]">
            Написать нам
          </h6>
        </div>
        {/* MAIN  */}

        {/* UNDER FOOTER  */}
        <div className="flex items-center justify-between my-[24px] max-sm:flex-col gap-y-[10px]">
          <p className="text-[16px] font-[400] text-[#7A7E80]">© 2023-2024. </p>
          <p className="text-[16px] font-[400] text-[#7A7E80] underline">
            Политика конфиденциальности
          </p>
          <p className="text-[16px] font-[400] text-[#7A7E80]">
            Сделано в IANT STUDIO
          </p>
        </div>
        {/* UNDER FOOTER  */}
      </div>
    </footer>
  );
};

export default Footer;
