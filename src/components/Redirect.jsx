import React from "react"
import qs from "qs"
import _ from "../config/config"

const getUser = async(callback, history_callbkack) => {
    window.Kakao.API.request({
        url: '/v2/user/me',
        success: function(res) {
            callback({
                user : { username : res.properties.nickname }
            })
            history_callbkack();
        },
        fail: function(error) {
          console.log(
            'login success, but failed to request user information: ' +
              JSON.stringify(error)
          )
          history_callbkack();
          
        },
      })
}

const sendToken = async (ACCESS_TOKEN) => {
    return await fetch(_.HOST_URL+":8080/auth/test", {
        method: "POST",
        headers : { 
            'Content-Type': 'application/json'
           },
        body: JSON.stringify({
            access_token : ACCESS_TOKEN
        })
    }).then(res => res.json()).then(res => console.log(res))
}

const getToken = async (AUTHORIZATION_CODE, callback) => {
    let payload = "grant_type=authorization_code&client_id="+_.REST_KEY+"&redirect_url="+_.REDIRECT_URL+"&code="+AUTHORIZATION_CODE;
    let data = await fetch(_.KAKAO_TOKEN_URL, {
        method: "POST",
        headers : { 
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
           },
        body: payload
    }).then(res=>res.json())
    
    if(data.access_token){
        window.Kakao.Auth.setAccessToken(data.access_token);
        localStorage.setItem("KAKAO_ACCESS_TOKEN", data.access_token)
        sendToken(data.access_token)
        callback() //login
        return true
    }else{

        return false
    }
}

const LoginProcess = async (AUTHORIZATION_CODE, logined_callback, set_user_callback, history_callbkack) => {
    let token = await getToken(AUTHORIZATION_CODE, logined_callback)
    if(token){
        await getUser(set_user_callback, history_callbkack)
    }else{
        return false
        history_callbkack()
    }

}

const Redirect =  ({location, history, LOGINED, SET_USER})=>{
    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true
    })
    if(!query.code) alert("정상적인 접근이 아닙니다.")
    else LoginProcess(query.code, LOGINED, SET_USER, ()=>{
        history.push("/")
    })
    return (
        <>
            
        </>
    )
}

export default Redirect