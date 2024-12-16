import React from "react";
import ActiveSecureWelcome from "./activeSecureSections/ActiveSecureWelcome";
import Work from "./activeSecureSections/Work";
import Strongpass from "./activeSecureSections/Strongpass";
import Advantages from "./activeSecureSections/Advantages";
import Comparison from "./activeSecureSections/Comparison";
import Possibilities from "./activeSecureSections/Possibilities";
import ArticleBlock from "../Layout/ui/articleBlock/ArticleBlock";
import QuestionForm from "../Layout/ui/questionForm/QuestionForm";
import CheckPassword from "../Layout/ui/checkPassword/checkPassword";

const ActiveSecure = () => {
  return (
    <>
      <ActiveSecureWelcome />
      <Work />
      <Strongpass />
      <Advantages />
      <Comparison />
      <CheckPassword />
      <Possibilities />
      <QuestionForm />
      <ArticleBlock />
    </>
  );
};

export default ActiveSecure;
