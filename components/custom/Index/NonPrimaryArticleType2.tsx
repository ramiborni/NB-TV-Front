import Article from "../../../models/Article";
import { CategoryIdToData } from "../../../tools/functions/CategoryIdToData";
import dayjs from 'dayjs';
import 'dayjs/locale/ar-dz'
import Link from 'next/link';

const NonPrimaryArticleType2 = ({ article,hideCategory=false } : { article: Article,hideCategory:boolean }) => {
  const convertedTime = dayjs(article.date).locale('ar-dz').format('DD MMMM YYYY',)
  return (
    <Link href={`/article/${article.slug}`}><a
    className="flex flex-col gap-y-3">
      <img className="rounded-xl" src={article.yoast_head_json.og_image[0].url}
        title={article.title.rendered}
        alt={article.title.rendered}/>
      <div className="content flex flex-col gap-y-1">
        {
          !hideCategory? <h3 className="text-md font-medium text-primary">{CategoryIdToData(article.categories[0])}</h3>: <></>
        }
        
        <h1 className="text-xl font-bold ">{article.title.rendered}</h1>
        <h4 className="text-xs">{convertedTime}</h4>
      </div>
    </a>
    </Link>
  );
};

export default NonPrimaryArticleType2;
