import React from "react";
import SelfCheckWelcome from "./selfCheckSections/SelfCheckWelcome";
import SelfCheckContents from "./selfCheckSections/SelfCheckContents";
import CheckPassword from "../Layout/ui/checkPassword/checkPassword";
import QuestionForm from "../Layout/ui/questionForm/QuestionForm";
import ArticleBlock from "../Layout/ui/articleBlock/ArticleBlock";

const SelfCheck = () => {
  return (
    <>
      <SelfCheckWelcome />
      <SelfCheckContents />
      <CheckPassword />
      <QuestionForm />
      <ArticleBlock />
    </>
  );
};

export default SelfCheck;
