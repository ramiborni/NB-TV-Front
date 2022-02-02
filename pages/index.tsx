import TopArticlesToday from "../components/custom/Index/TopArticlesToday";
import HeadSpecified from "../components/public/HeadSpecified";
import NavBar from "../components/public/NavBar";
import styles from "../styles/Home.module.css";
import FetchArticles from "../tools/connect/FetchArticles";
import {FetchResultArticle, FetchResultCategory} from "../models/FetchResult";
import { useDispatch } from "react-redux";
import { getArticles } from "../tools/slices/latestArticles";
import { getCategories } from "../tools/slices/categoriesReducer";
import { getIndexArticles } from "../tools/slices/IndexArticlesReducer";
import type Article from "../models/Article";
import type Category from "../models/Category";

import FetchCategories from "../tools/connect/FetchCategories";
import SectionCategory from "../components/custom/Index/SectionCategory";
import PrincipalsCategories from "../data/PrincipalsCategories";
import Footer from "../components/public/Footer";

const Home = ({
  articles,
  categories,
  allArticles,
}: {
  articles: Article[];
  categories: Category[];
  allArticles: Article[];
}) => {
  const dispatch = useDispatch();
  dispatch(getArticles(articles));
  dispatch(getCategories(categories));
  dispatch(getIndexArticles(allArticles));

  return (
    <>
      <HeadSpecified title="الصفحة الرئيسية" />
      <header>
        <NavBar />
      </header>
      <main className="px-4 xl:px-20 2xl:px-44 pt-10 lg:pt-24 gap-y-36">
        <section>
          <TopArticlesToday />
        </section>
        {PrincipalsCategories.map((category, index) => (
          <section key={"category-" + index} className="mt-16" id="politics">
            <SectionCategory category={category} />
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  let categories: FetchResultCategory = await FetchCategories.fetchAll();
  let data: FetchResultArticle = await FetchArticles.getTopArticles();
  let allArticles: FetchResultArticle = await FetchArticles.getIndexArticles();
  if (!data.isSuccess || !allArticles.isSuccess) {
    return { props: { error: 500 } };
  } else {
    return {
      props: {
        articles: data.result,
        categories: categories.result,
        allArticles: allArticles.result,
      },
    };
  }
}

export default Home;
