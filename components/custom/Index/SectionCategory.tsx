import { PCategory } from "../../../data/PrincipalsCategories";
import NonPrimaryArticleType1 from "./NonPrimaryArticleType1";
import NonPrimaryArticleType2 from "./NonPrimaryArticleType2";
import Link from "next/link";
import { ArrowLeft2 } from "iconsax-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../tools/store";
import Article from "../../../models/Article";
const SectionCategory = ({ category }: { category: PCategory }) => {
  const articles = useSelector((state: RootState) =>
    state.articlesByCategory.value.filter((article) =>
      article.categories.includes(category.id)
    )
  ).filter(
    (article1, index, array) =>
      array.findIndex(
        (article2: Article) =>
          article2.id === article1.id && article2.slug === article1.slug
      ) === index
  );
  const renderText = (categoryName: string) => {
    switch (categoryName) {
      case "كوفيد-19": {
        return "آخر أخبار كوفيد-19";
      }
      case "أخبار دولية": {
        return "آخر الأخبار الدولية";
      }
      default: {
        return "آخر أخبار ال" + categoryName;
      }
    }
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-y-2 pb-12">
        <h1 className="text-3xl font-bold">{renderText(category.title)}</h1>
        <div className="flex-1"></div>
        <Link href={category.link}>
          <a className="flex  gap-x-0.5 items-center 	 text-primary font-medium">
            تصفح المزيد
            <ArrowLeft2 size="25" color="#F98F18" />
          </a>
        </Link>
      </div>
      <div className="flex xl:hidden flex-col gap-y-12 pb-12">
        {articles.map((a, i) => (
          <NonPrimaryArticleType1
            hideCategory
            article={a}
            key={`article-${i}-${a.slug}`}
          />
        ))}
      </div>

      <div className="hidden xl:flex flex-col gap-y-12 pb-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {articles.slice(0, 2).map((a, i) => (
            <NonPrimaryArticleType2
              hideCategory
              article={a}
              key={`article-${i}-${a.slug}`}
            />
          ))}
          <div className="flex flex-col gap-y-3">
            {articles.slice(2, 5).map((a, i) => (
              <NonPrimaryArticleType1
                hideCategory
                article={a}
                key={`article-${i}-${a.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionCategory;
