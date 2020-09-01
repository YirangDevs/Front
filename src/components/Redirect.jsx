import React from "react"
import qs from "qs"
import _ from "../config/config"

const getToken = async (AUTHORIZATION_CODE) => {
    let payload = "grant_type=authorization_code&client_id="+_.REST_KEY+"&redirect_url="+_.REDIRECT_URL+"&code="+AUTHORIZATION_CODE;
    let token = await fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers : { 
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
           },
        body: payload
    }).then(res=>res.json())
    console.log(token)
    return token
}

const Redirect = ({location, history})=>{
    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true
    })
    getToken(query.code)
    history.push("/")
    return (
        <>
            
        </>
    )
}

export default Redirect