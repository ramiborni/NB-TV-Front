import type Article from "../../../models/Article";
import { CategoryIdToData } from "../../../tools/functions/CategoryIdToData";
import dayjs from 'dayjs';
import 'dayjs/locale/ar-dz'
import Link from 'next/link';

const NonPrimaryArticleType1 = ({ article,hideCategory=false } : { article: Article,hideCategory:boolean }) => {
  const convertedTime = dayjs(article.date).locale('ar-dz').format('DD MMMM YYYY',)

  return (
    <Link href={`/article/${article.slug}`}><a
    className="grid grid-cols-2 rounded-xl gap-x-5">
      <img
        className="rounded-xl h-full w-full xl:w-52 2xl:w-56"
        src={article.yoast_head_json.og_image[0].url}
        title={article.title.rendered}
        alt={article.title.rendered}
      />
      <div className="flex flex-col">
      {
          !hideCategory? <h3 className="text-md font-medium text-primary">{CategoryIdToData(article.categories[0])}</h3>: <></>
        }
        <div className="grow flex flex-col">
          <h1 className="sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[14px] font-bold my-auto">
            {article.title.rendered}
          </h1>
        </div>
        <h3 className="md:text-[1rem] lg:text-[1.5rem] xl:text-[12px] font-light">
          {convertedTime}
        </h3>
      </div>
    </a>
    </Link>
  );
};

export default NonPrimaryArticleType1;
