"use client";
import Image from "next/image";
import Nav from "./ui/Nav";
import headerLogo from "../../assets/header-logos/img/strongpass-logo.svg";
import rightArrow from "../../assets/header-logos/img/strongpass-right-logo.svg";
import Link from "next/link";
import AskQuestion from "./ui/askQuestions/AskQuestion";
import useAskQuestionStore from "@/zustand/useAskQuestionStore";
import BurgerButton from "./ui/BurgerButton/BurgerButton";
import message from "../../assets/header-logos/img/message.svg";

const Header = () => {
  const { isToggled, setToggle } = useAskQuestionStore();

  return (
    <>
      <header className="sticky top-0 z-[99] w-[100%] mb-[40px] bg-[#fafcfc]">
        <div className="container px-5">
          <div className=" flex items-center justify-between py-[27px]">
            <BurgerButton />
            <div className="flex items-center gap-[80px]">
              <Link href="/">
                <Image
                  src={headerLogo}
                  alt="header-logo"
                  width={60}
                  height={60}
                />
              </Link>

              <Nav />
            </div>

            <div className="flex max-sm:hidden">
              <button
                className="border-2 border-[#408077] bg-transparent text-[#408077] py-[10px] px-[30px] rounded-[13px] hover:bg-[#408077] hover:text-white transition-all"
                onClick={() => setToggle(true)}
              >
                Задать вопрос
              </button>
              <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[10px]">
                <Image
                  src={rightArrow}
                  alt="header-logo"
                  width={14}
                  height={14}
                />
              </button>
            </div>
            <div className="w-[47px] h-[47px]  bg-[#F2F5F4] rounded-[12px] hidden items-center justify-center max-sm:flex">
              <Image src={message} alt="header-logo" width={14} height={14} />
            </div>
          </div>
        </div>
      </header>
      {isToggled ? (
        <div
          className="fixed top-0 left-0 w-[100%] h-[100vh] z-[100] flex items-center justify-center"
          style={{
            background: "rgba(0, 0, 0, 0.662)",
          }}
        >
          (
          <AskQuestion />)
        </div>
      ) : null}
    </>
  );
};

export default Header;
