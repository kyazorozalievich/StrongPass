import React from "react";
import AlmetibinWelcome from "./almetibinSections/AlmetibinWeclome";
import AlmetibinWork from "./almetibinSections/AlmetibinWork";
import AlmetibinAdvantages from "./almetibinSections/AlmetibinAdvanteges";
import AlmetibinPossibilities from "./almetibinSections/AlmetibinPossibilities";
import AlmetibinOften from "./almetibinSections/AlmetibinOften";
import QuestionForm from "../Layout/ui/questionForm/QuestionForm";
import ArticleBlock from "../Layout/ui/articleBlock/ArticleBlock";

const Almetibin = () => {
  return (
    <>
      <AlmetibinWelcome />
      <AlmetibinWork />
      <AlmetibinAdvantages />
      <AlmetibinPossibilities />
      <AlmetibinOften />
      <QuestionForm />
      <ArticleBlock />
    </>
  );
};

export default Almetibin;
