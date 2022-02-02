class Urls{ 
    static mainLink:string= "https://www.hackathon2021.dz";
    static AllArticlesApi:string="https://www.hackathon2021.dz/wp/wp-json/wp/v2/posts";
    static AllCategoriesApi:string = "https://www.hackathon2021.dz/wp/wp-json/wp/v2/categories"
    static AllArticlesApiByCategory= (categoryId:number) : string => "https://www.hackathon2021.dz/wp/wp-json/wp/v2/posts?per_page=5&categories="+categoryId.toString();
    static ArticleLinkApi = (slug:string) : string => "https://www.hackathon2021.dz/wp/wp-json/wp/v2/posts?slug="+slug;
    static SearchArticleApi = (slug:string) : string => "https://www.hackathon2021.dz/wp/wp-json/wp/v2/search?search="+slug;
    static ArticleByIdApi = (id:number) : string => "https://www.hackathon2021.dz/wp/wp-json/wp/v2/posts?include[]="+id.toString();

}

export default Urls;