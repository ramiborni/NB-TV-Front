import Link from "next/link";
import PrincipalsCategories from "../../data/PrincipalsCategories";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const thisYear = dayjs().format("YYYY");

  return (
    <footer className="bg-[#F2F2F2] mt-20 flex flex-col lg:grid lg:grid-cols-3 gap-y-24 gap-x-6 px-4 lg:px-12 py-12">
      <div className="flex flex-col gap-y-10 text-center lg:text-right">
        <img className="w-44 m-auto lg:m-0" src="/logo/logo-light.png" />
        <p className="text-lg">
          موقع <b>NB TV</b> ، هو موقع إخباري يهدف إلى نشر أخبار متعلقة بالجزائر
          يمس كل الأخبار السياسية والإقتصادية والصحية والثقافية والرياضية وكذا
          يقوم بتغطية الأخبار العالمية ، نهدف إلى أن نكون عين الخبر في الجزائر
        </p>
        <p className="hidden lg:block">
          جميع الحقوق محفوظة لدى &nbsp;
          <a className="font-bold">
            NB Biskra@{thisYear}
          </a>
        </p>
      </div>
      <div className=" flex flex-col gap-y-8 text-center lg:text-right">
        <h1 className="text-2xl font-bold">أقسام الموقع</h1>
        <ul className="menu grid grid-cols-1 lg:grid-cols-2 gap-y-4">
          {PrincipalsCategories.map((cat, i) => (
            <li className="m-auto lg:m-0" key={"cat-footer-" + i}>
              <Link href={cat.link}>
                <a className="hover:bg-gray text-lg">{cat.title}</a>
              </Link>
            </li>
          ))}
          <li className="m-auto lg:m-0">
            <Link href="/privacy">
              <a className="text-lg">سياسة الخصوصية</a>
            </Link>
          </li>
          <li className="m-auto lg:m-0">
            <Link href="/terms-conditions">
              <a className="hover:bg-grey text-lg">الشروط والأحكام</a>
            </Link>
          </li>
          <li className="m-auto lg:m-0">
            <Link href="/pub">
              <a className="hover:bg-grey text-lg">الإشهار على الموقع</a>
            </Link>
          </li>
          <li className="m-auto lg:m-0">
            <Link href="/contact-us">
              <a className="hover:bg-grey text-lg">تواصل معنا</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col px-8 gap-y-8 text-center lg:text-right">
        <h1 className="text-2xl font-bold">مواقع التواصل الإجتماعي</h1>
        <a
          className={`btn text-lg gap-x-4 justify-start px-8 justify-right border-none bg-[#0B84ED] hover:bg-[#0B88ED] rounded-3xl`}
          href="https://www.facebook.com/NBBiskraformation"
        >
          <div className="w-9 h-9 items-center justify-center flex rounded-full bg-white">
            {<FontAwesomeIcon size="lg" color="#0B84ED" icon={faFacebook} />}
          </div>
          فيسبوك
        </a>
        <a
          className={`btn text-lg gap-x-4 px-8  justify-start border-none bg-[#FF41A6] hover:bg-[#FF52A6] rounded-3xl text-right justify-right justify-content-right`}
          href="https://www.facebook.com/NBBiskraformation"
        >
           <div className="w-9 h-9 items-center justify-center flex rounded-full bg-white">
            {<FontAwesomeIcon size="lg" color="#FF41A6" icon={faInstagram} />}
          </div>
          إنستغرام

         
        </a>
        <a
          className={`btn text-lg border-none gap-x-4 px-8  justify-start bg-[#1D9BF0] hover:bg-[#2F9DF0] rounded-3xl text-right justify-right justify-content-right`}
          href="https://www.facebook.com/NBBiskraformation"
        >
           <div className="w-9 h-9 items-center justify-center flex rounded-full bg-white">
            {<FontAwesomeIcon size="lg" color="#1D9BF0" icon={faTwitter} />}
          </div>
          تويتر
        </a>
        <a
          className={`btn text-lg border-none gap-x-4 px-8  justify-start bg-[#FB2238] hover:bg-[#FB3238] rounded-3xl text-right justify-right justify-content-right`}
          href="https://www.facebook.com/NBBiskraformation"
        >
           <div className="w-9 h-9 items-center justify-center flex rounded-full bg-white">
            {<FontAwesomeIcon size="lg" color="#FB2238" icon={faYoutube} />}
          </div>
          يوتيوب
        </a>
      </div>
      <p className="lg:hidden text-center">
          جميع الحقوق محفوظة لدى &nbsp;
          <a className="font-bold" href="https://www.nbbiskra.com/">
            NB Center@{thisYear}
          </a>
        </p>
    </footer>
  );
};

export default Footer;
