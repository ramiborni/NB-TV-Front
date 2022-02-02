import React from "react";
import IArticle from "../../../models/Article";
import MainArticle from "./MainArticle";
import NonPrimaryArticleType1 from "./NonPrimaryArticleType1";
import NonPrimaryArticleType2 from "./NonPrimaryArticleType2";
import { useSelector } from 'react-redux';
import { RootState } from "../../../tools/store";


const TopArticlesToday = () => {

  const articles = useSelector( (state : RootState) => state.latestArticles.value);
   
  return (
    <>
      <div className="flex xl:hidden flex-col gap-y-12 pb-12">
        {articles.slice(0, articles.length).map((article, index) => {
          return (
            <NonPrimaryArticleType1 article={article} key={"article1-" + index} hideCategory={false} />
          );
        })}
      </div>

      <div className="hidden xl:flex flex-col gap-y-12 pb-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
          <MainArticle article={articles[0]} />
          <div className="flex flex-col gap-y-3">
            {articles.slice(1, 4).map((article, index) => {
              return (
                <NonPrimaryArticleType1 article={article} key={"article1-" + index} hideCategory={false} />
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
          {articles.slice(4, 8).map((article, index) => (
            <NonPrimaryArticleType2 article={article} key={"article2-" + index} hideCategory={false} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopArticlesToday;
