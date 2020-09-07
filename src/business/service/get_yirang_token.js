import _ from "../../config/env"

const getYirangToken = (KAKAO_TOKEN_DATA) => {
    return fetch(_.HOST_URL+":8080/v1/apis/auth/signin", {
        method: "POST",
        headers : { 
            'Content-Type': 'application/json'
           },
        body: JSON.stringify(KAKAO_TOKEN_DATA)
    }).then(res => res.json()).then(res => console.log(res))
}

export default getYirangToken