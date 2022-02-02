export interface PCategory {
  id: number;
  link: string;
  title: string;
}

const PrincipalsCategories: PCategory[] = [
  {
    id:19,
    link: "/category/سياسة",
    title: "سياسة",
  },
  
  {
    id:20,
    title: "إقتصاد",
    link: "/category/إقتصاد",
  },
  {
    id:21,
    title: "رياضة",
    link: "/category/رياضة",
  },
  {
    id:24,
    title: "سياحة",
    link: "/category/سياحة",
  },
  {
    id:25,
    title: "ثقافة",
    link: "/category/ثقافة",
  },
  {
    id:23,
    title: "صحة",
    link: "/category/صحة",
  },
  {
    id:26,
    title: "أخبار دولية",
    link: "/category/أخبار-دولية",
  },
  {
    id:22,
    title: "كوفيد-19",
    link: "/category/كوفيد-19",
  },
];

export default PrincipalsCategories;
