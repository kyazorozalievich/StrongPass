"use client";
import { message } from "antd";
import React from "react";
import { BiSolidCopy } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

const CopyText = ({
  copyText,
  className,
  textStyle,
}: {
  copyText: string;
  className?: string;
  textStyle?: string;
}) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      message.success("Текст успешно скопирован!");
    } catch (error) {
      message.error("Ошибка при копировании");
    }
  };

  return (
    <div
      className={twMerge(
        "gap-y-4 px-[24px] py-[20px] rounded-lg bg-[#F2F5F4]",
        className
      )}
    >
      <p className={twMerge("text-lg text-[#262F33] font-normal", textStyle)}>
        {copyText}
      </p>
      <BiSolidCopy
        size={16}
        className="text-[#408077] hover:scale-105 transition-all cursor-pointer"
        onClick={handleCopy}
      />
    </div>
  );
};

export default CopyText;
