import _ from "../../config/env"

const getTokenFromKakao = async(AUTHORIZATION_CODE) => {
    let payload = "grant_type=authorization_code&client_id="+_.REST_KEY+"&redirect_url="+_.REDIRECT_URL+"&code="+AUTHORIZATION_CODE;
    return fetch(_.KAKAO_TOKEN_URL, {
        method: "POST",
        headers : { 
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
           },
        body: payload
    }).then(res=>res.json())
    
}

export default getTokenFromKakao

