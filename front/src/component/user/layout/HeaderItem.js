import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HeaderItem() {
  const userkey = Cookies.get("userkey");
  const link_item = [
    { title: "중고거래", path: "/post?sort=recent", data_href: "/post" },
    { title: "카테고리", path: "/category", data_href: "/category" },
    { title: "동네생활", path: "/#", data_href: "/#" },
    { title: "채팅하기", path: "/chat", data_href: "/chat" },
    (userkey==undefined)?'':{ title: "마이페이지", path: "/myPage", data_href: "/myPage" },
    { title: "회사 소개", path: "/about_us", data_href: "/about_us" },
    {
      title: "개발자 소개",
      path: "/team_introduce",
      data_href: "/team_introduce",
    },
  ];

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const currentPath = router.pathname || "/";
    const pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1);
    const activeLink = document.querySelector(`Link[data-href="${pageName}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }, [router.isReady, router.pathname]);

  return (
    <>
      <ul className="_1a7kymoc _588sy42q _588sy415q _588sy412w _588sy4wq">
        {link_item.map((items) => {
          if(items) {
            return(
              <li key={items.title}>
                <Link
                  data-href={items.data_href}
                  className="_1a7kymoe _1a7kymod _588sy4fw _588sy4j2 _588sy4mw _588sy4jq _588sy41"
                  href={items.path}
                >
                  {items.title}
                </Link>
              </li>
            )}})}
      </ul>
    </>
  );
}
