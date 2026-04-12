import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Insurance",
    newTab: false,
    path: "/blog?category=insurance",
  },
  {
    id: 3,
    title: "Loans",
    newTab: false,
    path: "/blog?category=loans",
  },
  {
    id: 4,
    title: "Credit Cards",
    newTab: false,
    path: "/blog?category=credit-cards",
  },
  {
    id: 5,
    title: "Topics",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Investing",
        newTab: false,
        path: "/blog?category=investing",
      },
      {
        id: 52,
        title: "Mortgage",
        newTab: false,
        path: "/blog?category=mortgage",
      },
      {
        id: 53,
        title: "Banking",
        newTab: false,
        path: "/blog?category=banking",
      },
    ],
  },
  {
    id: 6,
    title: "About",
    newTab: false,
    path: "/about",
  },
];

export default menuData;
