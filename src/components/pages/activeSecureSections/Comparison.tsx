import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";

const Comparison = () => {
  const texts = [
    {
      text: "Требование использовать в пароле все 4 типа символов (символы в нижнем и верхнем регистре, цифры, спец. символы)",
      check: <IoMdCheckmark />,
      close: <MdOutlineClear />,
    },
    {
      text: "Запрет использования пароля из публичных утечек",
      check: <IoMdCheckmark />,
      close: <MdOutlineClear />,
    },
    {
      text: "Собственный список запрещенных слов",
      check: <IoMdCheckmark />,
      close: <MdOutlineClear />,
    },
    {
      text: "Запрет повторяющихся символов («1111», «bbbb» и т.д.)",
      check: <IoMdCheckmark />,
      close: <MdOutlineClear />,
    },
    {
      text: "Запрет последовательных символов («1234», «abcd» и т.д.)",
      check: <IoMdCheckmark />,
      close: <MdOutlineClear />,
    },
    {
      text: "Запрет последовательностей символов, расположенных на соседних клавишах («qwerty», «qazxcvb» и т.д.)",
      check: <IoMdCheckmark />,
      close: <MdOutlineClear />,
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="w-[100%] h-[830px] rounded-[40px] bg-[#F2F5F4] flex items-center flex-col justify-center p-[40px] gap-[40px] overflow-x-auto overflow-y-hidden scroll-hidden">
          <h1 className="text-[60px] font-[600] w-[70%] text-center leading-2 max-lg:text-[50px] max-md:text-[40px]">
            Сравнение с групповыми политиками
          </h1>
          <div className="w-[100%] flex items-start gap-x-[120px]">
            <div className="flex items-start flex-col gap-[40px]   ">
              <h5 className="text-[20px] font-[600]">Функциональность</h5>
              {texts.map((el, idx) => (
                <h6 key={idx} className="text-[20px] w-[608px] ">
                  {el.text}
                </h6>
              ))}
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center flex-col gap-[55px] w-[150px] h-[550px] rounded-[20px] text-white py-[10px] bg-[#408077]">
                <h5 className="text-[20px] font-[600]">Strongpass</h5>
                {texts.map((el, idx) => (
                  <a key={idx} className="text-[20px]">
                    {el.check}
                  </a>
                ))}
              </div>
              <div className="flex items-center flex-col gap-[55px] w-[150px] h-[550px] ">
                <h5 className="text-[20px] font-[600] w-[100px]">
                  Групповые политики
                </h5>
                {texts.map((el, idx) => (
                  <a key={idx} className="text-[20px] text-red-600">
                    {el.close}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
