import { GetServerSideProps } from "next/types";
import Footer from "../../components/public/Footer";
import HeadSpecified from "../../components/public/HeadSpecified";
import NavBar from "../../components/public/NavBar";
import Article from "../../models/Article";
import Category from "../../models/Category";
import { useDispatch } from "react-redux";
import { getCategories } from "../../tools/slices/categoriesReducer";
import FetchCategories from "../../tools/connect/FetchCategories";
import FetchArticles from "../../tools/connect/FetchArticles";
import {FetchResultArticle, FetchResultCategory} from "../../models/FetchResult";
import Link from "next/link";
import NonPrimaryArticleType2 from "../../components/custom/Index/NonPrimaryArticleType2";

const CategoryPage = ({ category,articles,categories }: { category: string ,articles:Article[],categories:Category[]}) => {
    const dispatch = useDispatch();
    dispatch(getCategories(categories));
    console.log(articles)
    return (
        <>
            <HeadSpecified title={category}/>
            <header>
                <NavBar />
            </header>
            <main className="px-4 xl:px-20 2xl:px-44 pt-10 lg:pt-24 gap-y-36">
                <section className="flex flex-col gap-y-10">
                   <div className="flex flex-row gap-x-2 text-lg select-none">
                     <div>تصنيفات</div>
                     <div> | </div>
                     <Link href={"/category/" + category!.split(' ').join('-')}>
                        <a>{category}</a>
                     </Link>
                   </div>
                    <div className="grid lg:grid-cols-3 gap-6 ">
                        {articles.map((article: Article, index) => (
                            <NonPrimaryArticleType2
                                hideCategory={false}
                                article={article}
                                key={`article-${index}-${article.slug}`}
                            />
                        ))
                        }
                    </div>
                </section>


            </main>
            <Footer />
        </>
    );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const categories: FetchResultCategory = await FetchCategories.fetchAll();

    if (!categories.isSuccess) {
        return { props: { error: 500 } };
    } else {
        const category = (query.category === 'كوفيد-19') ? 'كوفيد-19': (query.category as string).split('-').join(' ');
        const categoryId = categories?.result?.find((c:Category) => c.name === category)?.id;
        const articles : FetchResultArticle = await FetchArticles.fetchArticlesByCategory(categoryId!);
        return {
            props: {
                category:category,
                articles: articles.result,
                categories: categories.result,
            },
        };
    }
};
