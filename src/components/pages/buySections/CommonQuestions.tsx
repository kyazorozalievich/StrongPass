"use client";

import { items } from "@/constants/links";
import { Collapse } from "antd";
import React from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

const ExpandIcon = ({ isActive }: { isActive: boolean | undefined }) =>
  isActive ? (
    <RiArrowDownSLine className="text-[#408077]" />
  ) : (
    <RiArrowRightSLine size={16} className="text-[#408077]" />
  );

const CommonQuestions = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-y-[60px] items-center">
          <h1 className="text-[48px] font-bold text-[#262F33]">
            Часто задаваемые вопросы
          </h1>
          <div className="flex flex-col w-full ">
            <Collapse
              className="w-full bg-white border-none text-[18px] font-normal text-[#262F33] "
              expandIcon={(panelProps) => (
                <ExpandIcon isActive={panelProps.isActive} />
              )}
              accordion
              size="middle"
              items={items}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;
