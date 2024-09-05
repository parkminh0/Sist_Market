import axios from "axios";

export default async function handler(req,res){
    const {query} =req;
    const code = query.code;

    const API_URL = "http://localhost:8080";

    if(code != undefined){
        axios({
            url: `${API_URL}/api/member/kakao`,
            method: 'POST',
            params: {code: code},
            headers:{
                "Content-Type":"application/json" //반환 타입 제이슨으로 넘어온다 
            }   
        }).then((res)=>{
            //스프링 부트 서버에서 보내온 정보 
            console.log(":::::::::"+res);
        })

}}