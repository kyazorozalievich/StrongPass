import Image from "next/image";
import React from "react";

interface IAdvantages {
  title: string;
  description: string;
  img: string;
}

interface IAdvantagesBlock {
  el: IAdvantages;
}

const AdvantagesBlock = ({ el }: IAdvantagesBlock) => {
  return (
    <div className="flex items-start flex-col gap-[5px] max-w-[380px] ">
      <div className="bg-[#408077] w-[60px] h-[60px] flex items-center justify-center rounded-[10px]">
        <Image src={el.img} alt="header-logo" width={20} height={20} />
      </div>
      <h2 className="text-[30px] font-[600] flex items-center max-w-[380px]">
        {el.title}
      </h2>
      <p className="text-[20px] max-w-[380px]">{el.description}</p>
    </div>
  );
};

export default AdvantagesBlock;
