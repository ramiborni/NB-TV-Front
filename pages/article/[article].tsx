import { GetServerSideProps } from "next/types";
import ArticleBody from "../../components/custom/Article/ArticleBody";
import TopArticlesToday from "../../components/custom/Index/TopArticlesToday";
import Footer from "../../components/public/Footer";
import HeadSpecified from "../../components/public/HeadSpecified";
import NavBar from "../../components/public/NavBar";
import Article from "../../models/Article";
import Category from "../../models/Category";
import {FetchResultArticle, FetchResultCategory} from "../../models/FetchResult";
import FetchArticles from "../../tools/connect/FetchArticles";
import { useDispatch } from "react-redux";
import { getCategories } from "../../tools/slices/categoriesReducer";
import FetchCategories from "../../tools/connect/FetchCategories";
import Head from 'next/head'
import parse from 'html-react-parser'

const ArticlePage = ({ article,categories }: { article: Article ,categories:Category[]}) => {
  const dispatch = useDispatch();
  dispatch(getCategories(categories));
    const yoastHead = parse(article.yoast_head.replaceAll(  /http:\/\/www\.hackathon2021\.dz\/wp\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\//g,"https://nbnews.tv/article/"))

  return (
    <>
      <Head>
          <title>NB NEWS - {article.title.rendered}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {yoastHead}
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="px-4 xl:px-20 2xl:px-44 pt-10 lg:pt-24 gap-y-36">
        <ArticleBody article={article} />
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let data: FetchResultArticle = await FetchArticles.getArticleBySlug(
    query?.article?.toString().toLowerCase()!
  );
  let categories: FetchResultCategory = await FetchCategories.fetchAll();
  if (!data.isSuccess) {
    return { props: { error: 500 } };
  } else {
    return {
      props: {
        article: data.result,
        categories: categories.result,

      },
    };
  }
};
