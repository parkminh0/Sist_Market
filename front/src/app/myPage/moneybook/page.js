'use client'

import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";


export default function page() {

    const userkey = Cookies.get("userkey");
    const today = new Date();
    
    var todayMonth = (today.getMonth()+1).toString();
    if(todayMonth.length==1){
        todayMonth = "0"+todayMonth;
    }
    const todayYYYYMM = today.getFullYear()+"-"+todayMonth;
    
    function getTotalPrice(postList){
        
    }

    useEffect(()=>{
        axios.get("/user/moneybook/getInfos",
            {
                params: {
                    userkey: userkey,
                    today: todayYYYYMM,
                }
            }
        ).then((result)=>{
            console.log(result.data);

        })
    }) 

    return (
        <div>

        </div>
    )
}
