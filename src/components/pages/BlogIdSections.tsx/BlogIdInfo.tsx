import React from "react";
import Image from "next/image";
import image from "../../../assets/blogImages/blogId/image1.png";
import AboutBlog from "@/components/Layout/ui/AboutBlog";
import ArticleBlock from "@/components/Layout/ui/articleBlock/ArticleBlock";

const BlogIdInfo = () => {
  return (
    <section>
      <div className="container p-5">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[48px] font-semibold text-[#262F33] m-0 text-start   max-sm:text-[30px]">
            Как создать слабый пароль или типовые шаблоны в паролях и как с ними
            бороться
          </h1>
          <p className="text-[16px] font-normal text-[#7A7E80]">
            20 сентября 2024
          </p>
          <Image
            src={image}
            alt="image"
            width={1240}
            height={568}
            className="rounded-[36px]"
          />
          <AboutBlog />
          <ArticleBlock />
        </div>
      </div>
    </section>
  );
};

export default BlogIdInfo;
