import React from "react";
import Welcome from "./HomePageSections/Welcome";
import HomeProducts from "./HomePageSections/HomeProducts";
import AboutPassword from "./HomePageSections/AboutPassword";
import QuestionForm from "../Layout/ui/questionForm/QuestionForm";
import ArticleBlock from "../Layout/ui/articleBlock/ArticleBlock";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <HomeProducts />
      <AboutPassword />
      <QuestionForm />
      <ArticleBlock />
    </>
  );
};

export default HomePage;
