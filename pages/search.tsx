import HeadSpecified from "../components/public/HeadSpecified";
import NavBar from "../components/public/NavBar";
import { SearchNormal } from "iconsax-react";
import {useState} from "react";
import FetchArticles from "../tools/connect/FetchArticles";
import NonPrimaryArticleType2 from "../components/custom/Index/NonPrimaryArticleType2";
import Article from "../models/Article";
import { SpinnerCircular } from 'spinners-react';
import Footer from "../components/public/Footer";
import {getCategories} from "../tools/slices/categoriesReducer";
import { useDispatch } from "react-redux";
import Category from "../models/Category";
import {GetServerSideProps} from "next/types";
import {FetchResultCategory} from "../models/FetchResult";
import FetchCategories from "../tools/connect/FetchCategories";

const Search = ({categories}:{ categories: Category[] }) => {
    const dispatch = useDispatch();
    dispatch(getCategories(categories));
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState<Article[]>([]);
    const [loading,setLoading] = useState(false)
    const SearchArticle = async () => {
        if(search!==""){
            setSearchResult([])
            setLoading(true)
            const resultFetching = await FetchArticles.searchArticlebyTitle(search);
            if(resultFetching.isSuccess){
                let data : Article[] = []
                for (const article of resultFetching.result){
                    const result = await FetchArticles.getArticleById(article.id);
                    if(result.isSuccess){
                        console.log(result)
                        data = [...data,result.result]
                    }
                }
                setSearchResult(data)
                setLoading(false)

            }
        }
    }
    const EmptyResult = () => (
        <div className="empty-result">
            <p>لا يوجد أي نتيجة</p>
        </div>
    )
    const Results = () => (
        <>
            {searchResult.map((article: Article, index) => (
                <NonPrimaryArticleType2
                    hideCategory={false}
                    article={article}
                    key={`article-${index}-${article.slug}`}
                />
            ))
            }
        </>

    )
    return (
        <>
            <HeadSpecified title="الصفحة الرئيسية" />
            <header>
                <NavBar />
            </header>
            <main className="px-4 xl:px-20 2xl:px-44 pt-10 lg:pt-24 gap-y-36">
                <section id="#search" className="form-control md:px-28">
                    <label className="label mb-5">
                        <span className="label-text text-2xl">البحث عن خبر</span>
                    </label>
                    <div className="flex gap-x-4">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="عنوان المقال" className="w-full input  input-bordered"/>
                            <button onClick={async () => await SearchArticle()} className="btn bg-primary border-none gap-x-2">
                                {
                                    loading ? <SpinnerCircular size={30} color="#fff" /> : <>
                                        البحث
                                        <span className="-mt-1">
                                    <SearchNormal color={"white"}/>
                                </span></>
                                }
                            </button>
                    </div>
                </section>
                <section className="grid lg:grid-cols-3 gap-x-10 gap-y-6 pt-24 pb-16">
                    {
                        (searchResult.length > 0) ?  <Results/> : <EmptyResult/>
                    }

                </section>

            </main>
            <Footer/>
        </>
    );
}
export default Search;

export const getServerSideProps: GetServerSideProps = async ( ) => {

    let categories: FetchResultCategory = await FetchCategories.fetchAll();
    if (!categories.isSuccess) {
        return { props: { error: 500 } };
    } else {
        return {
            props: {
                categories: categories.result,

            },
        };
    }
};