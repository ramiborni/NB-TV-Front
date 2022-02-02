import Article from "./Article";
import Category from "./Category";

export interface FetchResultArticle{
    isSuccess:boolean,
    result:Article[] | Article;
}
export interface FetchResultCategory{
    isSuccess:boolean,
    result:Category[];
}