import _ from "../../config/env"
import jwt_decode from "jwt-decode"

export default {
    get :  (KAKAO_TOKEN_DATA) => {
        return fetch(_.HOST_URL+":8080/v1/apis/auth/signin", {
            method: "POST",
            headers : { 
                'Content-Type': 'application/json'
               },
            body: JSON.stringify(KAKAO_TOKEN_DATA)
        }).then(res => res.headers).then(res => res.get("Authorization"))
    },

    decode (token) {
        return jwt_decode(token)
    },

    IsExpiredIn : (decodedToken) =>{
        const expireDate = decodedToken["exp"] * 1000;
        const date = Date.now();
        return (expireDate>date) ? true : false;
    }
}
//유효시간 확인 등등 yat에 관련된 함수 제공