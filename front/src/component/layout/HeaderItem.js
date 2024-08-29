import Link from "next/link"

export default function HeaderItem(){
    const link_item = [
        {title: "중고거래", path: "/post", data_href:"post"},
        {title: "카테고리", path: "/category", data_href:"category"},
        {title: "동네생활", path: "/#", data_href:"#"},
        {title: "채팅하기", path: "/chat", data_href:"chat"},
        {title: "마이페이지", path: "/myPage", data_href:"myPage"},
        {title: "회사 소개", path: "/About_us", data_href:"About_us"},
        {title: "개발자 소개", path: "/Team_introduce", data_href:"Team_introduce"},
    ]

    return(
        <>
            <ul class="_1a7kymoc _588sy42q _588sy415q _588sy412w _588sy4wq">
            {link_item.map((items) => (
                <li key={items.title}>
                    <Link data-href={items.data_href} class="_1a7kymoe _1a7kymod _588sy4fw _588sy4j2 _588sy4mw _588sy4jq _588sy41" href={items.path}>
                        {items.title}
                    </Link>
                </li>
            ))}
            </ul>
        </>
    )
}