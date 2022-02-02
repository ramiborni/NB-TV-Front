import Article from "../../../models/Article";
import Link from "next/link";
import {CategoryIdToData} from "../../../tools/functions/CategoryIdToData";
import dayjs from "dayjs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";

const ArticleBody = ({article}: { article: Article }) => {
    const CategoryName = CategoryIdToData(article.categories[0])
    const publishingDate = dayjs(article.date).locale('ar-dz').format('DD MMMM YYYY',)
    const publishingTime = dayjs(article.date).locale('ar-dz').format('hh:mm A')
    return (
        <section className="grid lg:grid-cols-3 ">
            <div className="col-span-2 flex flex-col gap-y-10">
                <div className="flex flex-row gap-x-2 text-lg select-none">
                    <div>أخبار</div>
                    <div> |</div>
                    <Link href={"/category/" + CategoryName!.split(' ').join('-')}>
                        <a>{CategoryName}</a>
                    </Link>
                </div>
                <h1 className="font-bold text-xl xl:text-4xl">{article.title.rendered}</h1>
                <img className="rounded-xl" src={article.yoast_head_json.og_image[0].url}/>
                <div className="flex flex-row px-3 py-2 text-lg border-r-4 border-primary">
                    <div className={"border-l-2 px-4"}>
                        {publishingDate}
                    </div> &nbsp;
                    <div className={"px-4"}>

                {publishingTime}&nbsp;  بتوقيت الجزائر

                </div>
                    <div className="flex-1"></div>
                    {
                        // TODO: Add Link to Facebook and Twitter
                    }
                    <a onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=https://nbnews.tv/article/"+article.slug,'popup','width=600,height=600')} target="_blank" className="cursor-pointer w-9 h-9 items-center justify-center flex rounded-full bg-white">
                        {<FontAwesomeIcon size="lg" color="#0B84ED" icon={faFacebook} />}
                    </a>
                    <a onClick={() => window.open(`https://twitter.com/share?text=${article.title.rendered}&source=sharethiscom&related=sharethis&via=NBNews&url=https://nbnews.tv/article/${encodeURI(article.slug)}`,'popup','width=600,height=600')} target="_blank" className="cursor-pointer w-9 h-9 items-center justify-center flex rounded-full bg-white">
                        {<FontAwesomeIcon size="lg" color="#1D9BF0" icon={faTwitter} />}
                    </a>
                </div>
                <article className="flex flex-col gap-y-6 text-xl" dangerouslySetInnerHTML={ {__html:  article.content.rendered} }>
                   
                </article>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:px-28">
                <h1 className="font-medium">إعلان</h1>
            </div>
        </section>
    );
};

export default ArticleBody;
