import { Button, Popover } from "antd";
import React, { ReactNode } from "react";
import CopyText from "../CopyText";

const text1 = `get-aduser -filter *|where {$_.enabled -eq True}).count`;
const text2 = `ldapsearch -h localhost -p 389 -D cn="Directory Manager" -W -b ou=people,dc=[ваш_домен],dc=[ваш_домен] "uid=*" uid | grep uid: | wc -l`;

const content = (
  <div className="flex flex-col p-[20px] gap-y-[20px] max-w-[532px]">
    <p className="text-[16px] font-normal text-[[#262F33]">
      Для расчета стоимости лицензии нам необходимо знать количество активных
      учетных записей, которые вы хотите защитить. Количество защищаемых учетных
      записей можно получить выполнив на контроллере домена команду:
    </p>
    <div className="flex flex-col">
      <span className="text-[16px] font-normal text-[[#262F33]s">
        в Windows (powershell):
      </span>
      <CopyText
        copyText={text1}
        className="flex items-center gap-x-4"
        textStyle="text-[16px]"
      />
    </div>
    <div className="flex flex-col">
      <span className="text-[16px] font-normal text-[#262F33">в Linux:</span>
      <CopyText
        copyText={text2}
        className="flex items-center gap-x-4"
        textStyle="text-[16px] max-w-[400px]"
      />
    </div>
  </div>
);

const PopoverContent = ({ children }: { children: ReactNode }) => {
  return (
    <Popover placement="top" content={content}>
      <button>{children}</button>
    </Popover>
  );
};

export default PopoverContent;
