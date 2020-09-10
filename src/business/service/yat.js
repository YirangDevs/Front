import _ from "../../config/env"

export default {
    get :  (KAKAO_TOKEN_DATA) => {
        return fetch(_.HOST_URL+":8080/v1/apis/auth/signin", {
            method: "POST",
            headers : { 
                'Content-Type': 'application/json'
               },
            body: JSON.stringify(KAKAO_TOKEN_DATA)
        }).then(res => res.json()).then(res => console.log(res))
    },

    decode : (ACCESS_TOKEN) =>{
        const decodedToken=Buffer.from(ACCESS_TOKEN, "base64").toString();
        return decodedToken;
    },

    IsExpiredIn : (decodedToken) =>{
        const data = JSON.parse(decodedToken);
        const expireData = data["exp"];
        if(expireData)
            return true;
        else
            return false;
    }
    
}
//유효시간 확인 등등 yat에 관련된 함수 제공