import React from "react";
import advantagesIcon1 from "../../../assets/products/securePage/img/advantagesIcon1.svg";
import advantagesIcon2 from "../../../assets/products/securePage/img/advantagesIcon2.svg";
import advantagesIcon3 from "../../../assets/products/securePage/img/advantagesIcon3.svg";
import advantagesIcon4 from "../../../assets/products/securePage/img/advantagesIcon4.svg";
import advantagesIcon5 from "../../../assets/products/securePage/img/advantagesIcon5.svg";
import advantagesIcon6 from "../../../assets/products/securePage/img/advantagesIcon6.svg";
import AdvantagesBlock from "@/components/Layout/ui/AdvantagesBlock";

const Advantages = () => {
  const advantages = [
    {
      img: advantagesIcon1,
      title: "Проактивная защита",
      description:
        "Проверка проводится в момент установки нового пароля. Новый пароль будет установлен только, если он соответствует всем требованиям",
    },
    {
      img: advantagesIcon2,
      title: "Не требуется доступ в интернет",
      description:
        "Все проверки проводятся локально, без использования облачных сервисов. Пароли никогда не покидают ваши сервера.",
    },
    {
      img: advantagesIcon3,
      title: "Большая база паролей",
      description:
        "Для проверки используется постоянно пополняемая база, содержащая на текущий момент более 866 миллионов паролей, которые встречались в публичных утечках.",
    },
    {
      img: advantagesIcon4,
      title: "Минимальные затраты на управление",
      description:
        "Все настройки хранятся в текстовых файлах. Изменения применяются без перезагрузки сервера. Текстовый формат конфигурационных файлов позволяет легко автоматизировать управление.",
    },
    {
      img: advantagesIcon5,
      title: "Индивидуальные политики",
      description:
        "Возможность указать свой индивидуальный список паролей, которые не должны считаться надежными. Исключение из проверок пользователей, паролей, групп пользователей.",
    },
    {
      img: advantagesIcon6,
      title: "Интеграция с Windows и Свпях",
      description:
        "Приложение работает как с Windows (Active Directory), так и с Linux (FreeIPA, ALD Pro). Контролируются все методы установки пароля администраторами и пользователями.",
    },
  ];

  return (
    <div className="my-[100px]">
      <div className="container">
        <div className="flex items-start flex-col gap-[40px] max-lg:items-center">
          <h1 className="text-[60px]   font-[600] max-lg:text-[54px] max-md:text-[44px] max-sm:text-[34px]">
            Преимущества
          </h1>
          <div className="grid grid-cols-3 gap-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1 p-4">
            {advantages.map((el, idx) => (
              <AdvantagesBlock el={el} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
