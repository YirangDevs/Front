import React from "react"
import qs from "qs"
import _ from "../config/config"

const getUser = async() => {
    
    window.Kakao.API.request({
        
        url: '/v2/user/me',
        success: function(res) {
            console.log(res.properties.nickname)
            return res.properties.nickname

        },
        fail: function(error) {
          console.log(
            'login success, but failed to request user information: ' +
              JSON.stringify(error)
          )
          return false;
        },
      })
}

const getUserInfo = async (USER_ACCESS_TOKEN, callback) => {
    let payload = 'property_keys=["properties.nickname"]'
    let user = await fetch("http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/auth/test", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        // headers : { 
        //     'Authorization': 'Bearer' + USER_ACCESS_TOKEN,
        //     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        //    },
        body: JSON.stringify({
            accessToken: USER_ACCESS_TOKEN
        })
    }).then(res=>res.json())
    console.log(user)
    
}
const getToken = async (AUTHORIZATION_CODE) => {
    let payload = "grant_type=authorization_code&client_id="+_.REST_KEY+"&redirect_url="+_.REDIRECT_URL+"&code="+AUTHORIZATION_CODE;
    let token = await fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers : { 
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
           },
        body: payload
    }).then(res=>res.json())
    
    if(token.access_token){
        window.Kakao.Auth.setAccessToken(token.access_token);
        return true
    }else{

        return false
    }
}

const getUserThen = async (AUTHORIZATION_CODE, callback) => {
    let token = await getToken(AUTHORIZATION_CODE)
    if(token){
        let user = await getUser();
        callback({
            username : user
        })
    }

}

const Redirect =  ({location, history, Logined})=>{
    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true
    })
    getUserThen(query.code, Logined)
    
    
    // getUserInfo(query.code, ()=>{
    //     console.log("성공")
    // })
    
    
    history.push("/")
    return (
        <>
            
        </>
    )
}

export default Redirect