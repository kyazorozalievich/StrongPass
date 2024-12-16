import React from "react";
import selfIcon from "../../../assets/products/selfcheckPage/img/selfIcon.svg";
import selfIcon2 from "../../../assets/products/selfcheckPage/img/selfIcon2.svg";
import selfIcon3 from "../../../assets/products/selfcheckPage/img/selfIcon3.svg";
import selfIcon4 from "../../../assets/products/selfcheckPage/img/selfIcon4.svg";
import selfIcon5 from "../../../assets/products/selfcheckPage/img/selfIcon5.svg";
import selfIcon6 from "../../../assets/products/selfcheckPage/img/selfIcon6.svg";
import selfIcon7 from "../../../assets/products/selfcheckPage/img/selfIcon7.svg";
import selfIcon8 from "../../../assets/products/selfcheckPage/img/selfIcon8.svg";
import Image from "next/image";
const SelfCheckContents = () => {
  const self = [
    {
      icon: selfIcon,
      text: "Не зависит от того находится компьютер в домене или нет. Работает автономно.",
    },
    {
      icon: selfIcon2,
      text: "Все проверки производятся локально на сервере и не требуют доступа в Интернет.",
    },
    {
      icon: selfIcon3,
      text: "Не зависит от операционной системы.",
    },
    {
      icon: selfIcon4,
      text: "Развертывание в собственной инфраструктуре.",
    },
    {
      icon: selfIcon5,
      text: "Используются те же технологии и алгоритмы что и в Strongpass. Проактивная защита.",
    },
    {
      icon: selfIcon6,
      text: 'Можно использовать как самостоятельно, так и вместе с "Strongpass. Проактивная защита".',
    },
    {
      icon: selfIcon7,
      text: "Простое обучение пользователей созданию надежных паролей",
    },
    {
      icon: selfIcon8,
      text: "Стилизация интерфейса для соответствия корпоративному стилю.",
    },
  ];
  return (
    <div className="my-[100px]">
      <div className="container p-5">
        <div className="w-[100%] flex items-start flex-wrap gap-[20px] max-lg:justify-center">
          {self.map((el, idx) => (
            <div
              className="w-[280px] h-[150px] flex items-start gap-[10px] flex-col"
              key={idx}
            >
              <Image
                src={el.icon}
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
              <p className="text-[18px]">{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelfCheckContents;
