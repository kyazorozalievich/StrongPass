"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
const AlmetibinOften = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  return (
    <div className="my-[100px]">
      <div className="container p-5">
        <div className="w-[100%] flex items-center flex-col justify-center gap-[20px]">
          <h1 className="text-[60px] font-[600] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px]">
            Часто задаваемые вопросы
          </h1>
          <div className="flex items-start flex-col gap-[20px] lg:w-[900px]">
            <div className="hr w-[100%] h-[1px] bg-gray-300"></div>
            <h4
              className="cursor-pointer flex items-center gap-[10px] text-[20px] font-[600]"
              onClick={() => setQuestion1(!question1)}
            >
              <span className="text-[25px] text-[#408077]">
                {question1 ? <FiChevronDown /> : <FiChevronRight />}
              </span>
              Как лицензируется продукт?
            </h4>
            {question1 && (
              <div className="text-[20px]">
                <p>
                  Продукт лицензируется по количеству пользователей имеющих
                  право создавать pastes. Количество пользователей, которые
                  могут просматривать заметки, - не ограничено.
                </p>
              </div>
            )}
            <div className="hr w-[100%] h-[1px] bg-gray-300"></div>
            <h4
              className="cursor-pointer flex items-center gap-[10px] text-[20px] font-[600]"
              onClick={() => setQuestion2(!question2)}
            >
              <span className="text-[25px] text-[#408077]">
                {question2 ? <FiChevronDown /> : <FiChevronRight />}
              </span>
              Что произойдет после окончания временной тестовой лицензии?
            </h4>
            {question2 && (
              <div className="text-[20px]">
                <p>
                  Продукт лицензируется по количеству пользователей имеющих
                  право создавать pastes. Количество пользователей, которые
                  могут просматривать заметки, - не ограничено.
                </p>
              </div>
            )}
            <div className="hr w-[100%] h-[1px] bg-gray-300"></div>
            <h4
              className="cursor-pointer flex items-center gap-[10px] text-[20px] font-[600]"
              onClick={() => setQuestion3(!question3)}
            >
              <span className="text-[25px] text-[#408077]">
                {question3 ? <FiChevronDown /> : <FiChevronRight />}
              </span>
              Как способом можно оплатить лицензию?
            </h4>
            {question3 && (
              <div className="text-[20px]">
                <p>
                  Продукт лицензируется по количеству пользователей имеющих
                  право создавать pastes. Количество пользователей, которые
                  могут просматривать заметки, - не ограничено.
                </p>
              </div>
            )}
            <div className="hr w-[100%] h-[1px] bg-gray-300"></div>
            <h4
              className="cursor-pointer flex items-center gap-[10px] text-[20px] font-[600]"
              onClick={() => setQuestion4(!question4)}
            >
              <span className="text-[25px] text-[#408077]">
                {question4 ? <FiChevronDown /> : <FiChevronRight />}
              </span>
              Как поставляется продукт и лицензия?
            </h4>
            {question4 && (
              <div className="text-[20px]">
                <p>
                  Продукт лицензируется по количеству пользователей имеющих
                  право создавать pastes. Количество пользователей, которые
                  могут просматривать заметки, - не ограничено.
                </p>
              </div>
            )}
            <div className="hr w-[100%] h-[1px] bg-gray-300"></div>
            <h4
              className="cursor-pointer flex items-center gap-[10px] text-[20px] font-[600]"
              onClick={() => setQuestion5(!question5)}
            >
              <span className="text-[25px] text-[#408077]">
                {question5 ? <FiChevronDown /> : <FiChevronRight />}
              </span>
              Как осуществляется техническая поддержка?
            </h4>
            {question5 && (
              <div className="text-[20px]">
                <p>
                  Продукт лицензируется по количеству пользователей имеющих
                  право создавать pastes. Количество пользователей, которые
                  могут просматривать заметки, - не ограничено.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmetibinOften;
