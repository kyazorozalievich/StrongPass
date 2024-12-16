import React from "react";
import preloaderIcon from "../../../../assets/preloader/Clip path group.svg";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className="w-scrren h-screen flex items-center justify-center">
      <Image src={preloaderIcon} alt="preloaderIcon" width={200} height={200} />
    </div>
  );
};

export default Preloader;
