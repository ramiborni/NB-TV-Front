import Image from "next/image";
import Article from "../../../models/Article";
import { CategoryIdToData } from "../../../tools/functions/CategoryIdToData";
import dayjs from "dayjs";
import "dayjs/locale/ar-dz";
import Link from "next/link";

const MainArticle = ({ article }: { article: Article }) => {
  const convertedTime = dayjs(article.date)
    .locale("ar-dz")
    .format("DD MMMM YYYY");
  return (
    <Link href={`/article/${article.slug}`}>
      <a className="col-span-2 grid grid-cols-3  bg-card-color rounded-2xl">
        <div className="col-span-2">
          <img
            className="rounded-br-2xl rounded-tr-2xl h-full"
            src={article.yoast_head_json.og_image[0].url}
            title={article.title.rendered}
            alt={article.title.rendered}
          />
        </div>
        <div className="py-3 px-5 flex flex-col">
          <h2 className="grow-0 text-primary lg:text-md xl:text-xl ">
            {CategoryIdToData(article.categories[0])}
          </h2>
          <div className="grow flex flex-col ">
            <h1 className="lg:text-xl xl:text-3xl 2xl:text-4xl font-bold my-auto">
              {article.title.rendered}
            </h1>
          </div>
          <div className="text-sm xl:text-md">{convertedTime.toString()}</div>
        </div>
      </a>
    </Link>
  );
};

export default MainArticle;
