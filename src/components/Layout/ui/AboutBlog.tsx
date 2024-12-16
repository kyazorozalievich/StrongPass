import React from "react";
import CopyText from "./CopyText";
import Image from "next/image";
import Link from "next/link";
import comaIcon from "../../../assets/blogImages/blogId/coma.svg";
import image10 from "../../../assets/blogImages/blogId/image 10.png";

const AboutBlog = () => {
  const text = `ldapsearch -h localhost -p 389 -D cn="Directory Manager" -W -b
  ou=people,dc=[ваш_домен],dc=[ваш_домен] "uid=*" uid | grep uid: | wc -l`;

  return (
    <div className="flex  gap-x-[30px] max-md:flex-col gap-y-[30px]">
      <div className="flex flex-col gap-y-[26px] ">
        <span className="w-[332px]  text-[24px] font-semibold text-white bg-[#408077] px-[24px] py-4 rounded-full">
          Архитектура
        </span>
        <p className="text-[24px] font-semibold text-[#7A7E80]">Схема работы</p>
        <div className="flex flex-col gap-y-3">
          <p className="text-[24px] font-semibold text-[#7A7E80]">Настройка</p>
          <p className="text-[20px] font-semibold text-[#7A7E80]">— lldap</p>
          <p className="text-[20px] font-semibold text-[#7A7E80]">
            — Создание пользователей
          </p>
          <p className="text-[20px] font-semibold text-[#7A7E80]">
            — Создание пользователей
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-[40px]">
        <p className="text-lg text-[#262F33] font-normal">
          Сегодня исследовательская группа Specops публикует новые данные о
          паролях VPN, украденных вредоносным ПО. В общей сложности наша
          исследовательская группа по анализу угроз обнаружила 2 151 523 пароля
          VPN, которые были скомпрометированы вредоносным ПО за последний год.
          Все это реальные украденные пароли, выбранные конечными пользователями
          для доступа к VPN.
        </p>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[24px] font-semibold text-[#262F33] ">
            Очевидцы сообщают, что слышали шёпот бессменных лидеров
          </h1>
          <p className="text-lg text-[#262F33] font-normal">
            И нет сомнений, что реплицированные с зарубежных источников,
            современные исследования освещают чрезвычайно интересные особенности
            картины в целом, однако конкретные выводы, разумеется, заблокированы
            в рамках своих собственных рациональных ограничений. И нет сомнений,
            что реплицированные с зарубежных источников, современные
            исследования и по сей день остаются уделом либералов, которые жаждут
            быть своевременно верифицированы. Ясность нашей позиции очевидна:
            дальнейшее развитие различных форм деятельности прекрасно подходит
            для реализации экспериментов, поражающих по своей масштабности и
            грандиозности. Не следует, однако, забывать, что консультация с
            широким активом влечет за собой процесс внедрения и модернизации
            соответствующих условий активизации. Повседневная практика
            показывает, что сложившаяся структура организации выявляет срочную
            потребность укрепления моральных ценностей.
          </p>
        </div>
        <CopyText copyText={text} className="flex flex-col" />
        <div className="flex flex-col gap-y-4">
          <h1 className="text-lg font-semibold text-[#262F33] ">
            Очевидцы сообщают, что слышали шёпот бессменных лидеров
          </h1>
          <p className="text-lg text-[#262F33] font-normal ">
            Повседневная практика показывает, что сложившаяся структура
            организации выявляет срочную потребность укрепления моральных
            ценностей.
          </p>
          <span className="flex items-start gap-x-2 text-[#408077] pl-1">
            01.
            <p className="text-lg text-[#262F33] font-normal">
              Следует отметить, что высокое качество позиционных исследований
              предопределяет высокую востребованность инновационных методов
              управления процессами.
            </p>
          </span>
          <span className="flex items-start gap-x-2 text-[#408077] pl-1">
            02.
            <p className="text-lg text-[#262F33] font-normal">
              Вот вам яркий пример современных тенденций — перспективное
              планирование напрямую зависит от позиций, занимаемых участниками в
              отношении поставленных задач.
            </p>
          </span>
          <span className="flex items-start gap-x-2 text-[#408077] pl-1">
            03.
            <p className="text-lg text-[#262F33] font-normal">
              Внезапно, базовые сценарии поведения пользователей обнародованы.
            </p>
          </span>
        </div>
        <div className="flex p-[30px] items-start gap-x-[30px] bg-[#F2F5F4] rounded-lg">
          <Image src={comaIcon} alt="image" width={40} height={29} />
          <div className="flex flex-col gap-y-3">
            <h1 className="text-lg font-semibold text-[#262F33] ">
              Благородные стремления не спасут: кровь стынет в жилах
            </h1>
            <p className="text-lg text-[#262F33] font-normal">
              Повседневная практика показывает, что сложившаяся структура
              организации выявляет срочную потребность укрепления моральных
              ценностей.
            </p>
            <Link
              href="#"
              className="flex items-center gap-x-3 text-lg text-[#408077] font-semibold"
            >
              Узнать больше
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[24] font-semibold text-[#262F33] ">
            Глубокий уровень погружения стал нашим флагом в борьбе с ложью
          </h1>
          <p className="text-lg text-[#262F33] font-normal">
            Таким образом, новая модель организационной деятельности
            способствует повышению качества стандартных подходов. Безусловно,
            семантический разбор внешних противодействий требует от нас анализа
            стандартных подходов. Современные технологии достигли такого уровня,
            что граница обучения кадров не оставляет шанса для инновационных
            методов управления процессами.
          </p>
        </div>
        <Image src={image10} alt="image" width={850} height={416} />
        <div>
          <h1 className="text-lg font-semibold text-[#262F33]">
            Звук клавиш печатной машинки оправдал надежды граждан
          </h1>

          <div className="flex flex-col pl-1 gap-y-2">
            <p className="text-lg text-[#262F33] font-normal">
              Повседневная практика показывает, что сложившаяся структура
              организации выявляет срочную потребность укрепления моральных
              ценностей.
            </p>
            <span className="flex items-start gap-x-3">
              —
              <p className="text-lg text-[#262F33] font-normal max-w-[743px]">
                Следует отметить, что высокое качество позиционных исследований
                предопределяет высокую востребованность инновационных методов
                управления процессами.
              </p>
            </span>
            <span className="flex items-start gap-x-3">
              —
              <p className="text-lg text-[#262F33] font-normal max-w-[743px]">
                Вот вам яркий пример современных тенденций — перспективное
                планирование напрямую зависит от позиций, занимаемых участниками
                в отношении поставленных задач.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlog;
