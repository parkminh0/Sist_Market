import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    title: "대시보드",
    icon: IconLayoutDashboard,
    href: "/ad",
  },
  {
    navlabel: true,
    subheader: "게시글",
  },
  {
    title: "게시글 목록",
    icon: IconTypography,
    href: "/ad/post",
  },
  {
    title: "카테고리 관리",
    icon: IconCopy,
    href: "/ad/post/category",
  },
  {
    navlabel: true,
    subheader: "사용자",
  },
  {
    title: "사용자 목록",
    icon: IconLogin,
    href: "/ad/user",
  },
  {
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    navlabel: true,
    subheader: "게시판",
  },
  {
    title: "게시판 목록",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    title: "카테고리 관리",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
