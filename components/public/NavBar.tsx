import React from "react";
import { Calendar, SearchNormal, HambergerMenu } from "iconsax-react";
import Image from "next/image";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import "dayjs/locale/ar-dz";
import Link from "next/link";
import PrincipalsCategories from "../../data/PrincipalsCategories";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const TagLinkNav = ({ title, link }: { title: string; link: string }) => (
    <a
      href={link}
      className={
        router.pathname === link
          ? "border-b-4 pb-[5px] rounded-sm border-primary text-primary font-bold text-xl"
          : "text-xl font-bold"
      }
    >
      {title}
    </a>
  );
  const DrawerListItem = ({ title, link }: { title: string; link: string }) => (
    <li className={router.pathname ===  link ? "border-l-4 border-primary" : ""}>
      <a href={link}>{title}</a>
    </li>
  );
  const listTags = [
    {
      title: "الرئيسية",
      link: "/",
    },
    ...PrincipalsCategories,
  ];
  const currentDay = dayjs().locale("ar-dz").format("dddd ، DD MMMM YYYY");
  return (
    <>
      <nav className="flex flex-col lg:h-32 pt-5 px-4 lg:px-12 lg:border-b-2 lg:border-grey gap-y-8">
        <div className="flex items-center">
          <div className=" flex flex-1 ">
            <div className="hidden lg:flex lg:flex-row lg:space-x-3">
              <Calendar size="20" color="#292D32" /> &nbsp;
              <h3 className="">{currentDay}</h3>
            </div>
            <button onClick={toggleDrawer} className="block lg:hidden">
              <HambergerMenu size="25" color="#292D32" />
            </button>
          </div>

          <div className="text-center">
            <Image
              src="/logo/logo-light.png"
              alt="NBNews Logo"
              title="NBNews"
              width="80"
              height="30"
            />
          </div>
          <div className="flex flex-1 lg:gap-x-4 justify-end">
            <Link href="/search">
              <a className="hidden lg:flex lg:gap-x-1">
                <SearchNormal size="20" color="#292D32" />
                البحث
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-14">
          {listTags.map((tag, index) => (
            <TagLinkNav
              title={tag.title}
              link={tag.link}
              key={"tagnav-" + index}
            />
          ))}
        </div>
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className="flex flex-col gap-y-10 py-4 justify-center text-center">
          <img
            src="/logo/logo-light.png"
            alt="NBNews Logo"
            title="NBNews"
            className="m-auto"
            width="80"
            height="30"
          />
          <ul className="menu">
            {
              listTags.map((listItem, index) => (
                <DrawerListItem key={'drawer-item-'+index} title={listItem.title} link={listItem.link}/>
              ))
            }
            <DrawerListItem title="البحث" link="/search"/>

          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
