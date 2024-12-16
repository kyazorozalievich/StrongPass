import React from "react";
import advantagesAdv from "../../../assets/products/almetibinPage/downloadIcons/img/almetibinAdv.svg";
import advantagesAdv2 from "../../../assets/products/almetibinPage/downloadIcons/img/almetibinAdv2.svg";
import advantagesAdv3 from "../../../assets/products/almetibinPage/downloadIcons/img/almetibinAdv3.svg";
import advantagesAdv4 from "../../../assets/products/almetibinPage/downloadIcons/img/almetibinAdv4.svg";
import advantagesAdv5 from "../../../assets/products/almetibinPage/downloadIcons/img/almetibinAdv5.svg";
import advantagesAdv6 from "../../../assets/products/almetibinPage/downloadIcons/img/almetibinAdv6.svg";
import AdvantagesBlock from "@/components/Layout/ui/AdvantagesBlock";

const AlmetibinAdvantages = () => {
  const advantages = [
    {
      img: advantagesAdv,
      title: "",
      description:
        "Установка на собственные сервера обеспечивает полный контроль над всеми аспектами информационной безопасности.",
    },
    {
      img: advantagesAdv2,
      title: "",
      description:
        "Все заметки шифруются и дешифруются в браузере клиента. На сервере заметки хранятся только в зашифрованном виде. При этом ключи шифрования никогда не известны серверу и не хранятся на сервере.",
    },
    {
      img: advantagesAdv3,
      title: "",
      description:
        "Создавать заметки могут только зарегистрированные пользователи. Это предотвращает использование сервиса вредоносным ПО или в нелегитимных целях.",
    },
    {
      img: advantagesAdv4,
      title: "",
      description:
        "Поддерживается централизованная аутентификация через LDAP или SSO/SAML.",
    },
    {
      img: advantagesAdv5,
      title: "",
      description:
        "Политики принудительно устанавливают параметры заметок: время хранения, удаление сразу после прочтения, наличие дополнительного пароля и минимальная длина пароля",
    },
    {
      img: advantagesAdv6,
      title: "",
      description:
        "Через API можно создавать заметки, управлять пользователями. Это позволяет использовать Almetibin в автоматизированных процессах.",
    },
  ];

  return (
    <div className="my-[100px]">
      <div className="container p-5">
        <div className="flex items-start flex-col gap-[40px]">
          <h1 className="text-[60px] font-[600] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] max-lg:text-center max-lg:w-full">
            Преимущества
          </h1>
          <div className="flex items-start justify-between w-[100%] flex-wrap gap-[30px] max-lg:justify-center">
            {advantages.map((el, idx) => (
              <AdvantagesBlock el={el} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmetibinAdvantages;
