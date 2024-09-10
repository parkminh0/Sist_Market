"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function parentChildPath(link_item,pathname){
  var parent_path = pathname;
  var child_path = pathname;
  var checkParent = false;
  var checkChild = false;
  var parentIndex = 0;
  while(!checkParent){
    for(var i=0; i<link_item.length; i++){
      if(link_item[i].path == parent_path){
        checkParent = true;
        parentIndex = i;
        break;
      }
    }
    if(!checkParent){
      parent_path = parent_path.substring(0, parent_path.lastIndexOf("/"));
    }
  }
  while(!checkChild){
    for(var j=0; j<link_item[parentIndex].child.length; j++){
      if(link_item[parentIndex].child[j].path == child_path){
        checkChild = true;
        break;
      }
    }
    if(!checkChild){
      child_path = child_path.substring(0, child_path.lastIndexOf("/"));
    }
  }
  
  return [parent_path, child_path];
}


export default function SidebarItem(parentItem) {
  const link_item = [
    {
      title: "홈",
      path: "/admin",
      class: "link home",
      child: [
        {
          title: "홈",
          path: "",
        },
      ],
    },
    {
      title: "주문",
      path: "/qwe",
      class: "link order",
      child: [
        {
          title: "주문",
          path: "",
        },
      ],
    },
    {
      title: "상품",
      path: "/admin/post",
      class: "link product",
      child: [
        {
          title: "상품 목록",
          path: "/admin/post",
        },
        {
          title: "상품등록 | 수정",
          path: "/admin/post/crud",
        },
        {
          title: "카테고리 관리",
          path: "/admin/post/category",
        },
      ],
    },
    {
      title: "고객",
      path: "/admin/user",
      class: "link member",
      child: [
        {
          title: "회원 조회",
          path: "/admin/user",
        },
        {
          title: "회원 정보",
          path: "/admin/user/userEdit",
        },
      
      ],
    },
    /////////////////////////////
    {
      title: "게시판",
      path: "/admin/bbs",
      class: "link bbs",
      child: [
        {
          title: "게시판 카테고리 관리",
          path: "/admin/bbs",
        },
        {
          title: "게시물 관리",
          path: "/admin/bbs/post",
        },
      ],
    },
    /////////////////////////
    {
      title: "쿠폰",
      path: "/admin/coupon",
      class: "link promotion",
      child: [
        {
          title: "쿠폰",
          path: "/",
        },
      ],
    },
    {
      title: "통계",
      path: "/admin/statistic",
      class: "link calculate",
      child: [
        {
          title: "통계",
          path: "/",
        },
      ],
    },
  ];

  const pathname = usePathname();
  const tmp = pathname.split("/").length - 1;
  var parent_path = "";
  var child_path = "";

  [parent_path, child_path] = parentChildPath(link_item, pathname);

  // if (tmp == 2) {
  //   parent_path = pathname;
  // } else {
    // parent_path = pathname.substring(0, pathname.lastIndexOf("/"));
  // }

  return (
    <>
      <div className={pathname == "/admin" ? "snbArea" : "snbArea simple"}>
        {pathname == "/admin" ? (
          <div className="snbArea">
            <div id="menuList" className="eCustomScrollbar">
              <ul className="menu">
                <li className=" selected ">
                  <a
                    id="QA_Lnb_Menu10258"
                    href="/admin"
                    className="link home"
                    name="홈"
                  >
                    홈
                  </a>
                </li>
                <li className="hasChild ">
                  <a
                    id="QA_Lnb_Menu1681"
                    href="Controller?type=adorder"
                    className="link order"
                    name="주문"
                  >
                    주문
                  </a>
                </li>
                <li className="hasChild ">
                  <a
                    id="QA_Lnb_Menu2056"
                    href="/admin/post"
                    className="link product"
                  >
                    상품
                  </a>
                </li>
                <li className="hasChild ">
                  <a
                    id="QA_Lnb_Menu6"
                    href="/admin/user"
                    className="link member"
                  >
                    고객
                  </a>
                </li>
                {/* ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ */}
                <li className="hasChild ">
                  <a
                    id="QA_Lnb_Menu7"
                    href="/admin/bbs"
                    className="link bbs"
                    name="게시판"
                  >
                    게시판
                  </a>
                </li>
                <li className="hasChild ">
                  <a
                    id="QA_Lnb_Menu1250"
                    href="Controller?type=adcoupon"
                    className="link promotion"
                    name="프로모션"
                  >
                    쿠폰
                  </a>
                </li>
                <li className="hasChild ">
                  <a
                    id="QA_Lnb_Menu2060"
                    href="Controller?type=adstatistic"
                    className="link calculate"
                    name="통계"
                  >
                    통계
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <div className="snbArea">
              <div id="menuList" className="eCustomScrollbar">
                <div
                  id="mCSB_2"
                  className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                >
                  <div
                    id="mCSB_2_container"
                    className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                    style={{ position: "relative", top: "0", left: "0" }}
                  >
                    <ul className="menu">
                      {link_item.map((parent, i) => (
                        <li
                          key={i}
                          className={
                            parent.path == parent_path
                              ? "haschild show"
                              : "haschild"
                          }
                        >
                          <Link href={parent.path} className={parent.class}>
                            {parent.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="subMenu eClone eCustomScrollbar mCustomScrollbar _mCS_3 mCS-autoHide mCS_no_scrollbar">
              <div
                id="mCSB_3"
                className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                style={{ maxHeight: "1016px" }}
              >
                <div
                  id="mCSB_3_container"
                  className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                  style={{ position: "relative", top: "0", left: "0" }}
                  dir="ltr"
                >
                  <div className="depthList">
                    <ul className="depth2">
                      {link_item.map((parent, i) =>
                        parent.path == parent_path
                          ? parent.child &&
                            parent.child.map((child, j) => (
                              <li
                                key={`child - ${j}`}
                                className={
                                  child.path == child_path ? "selected" : ""
                                }
                              >
                                <Link href={child.path} className="link ">
                                  <span className="ellips">{child.title}</span>
                                </Link>
                              </li>
                            ))
                          : null
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}