import getTokenFromKakao from "../api/post/get_token_from_kakao"
import YAT from "../../util/Yat/yat"
import getYAT from "../api/get/getYAT";
import getMyRole from "../api/get/get_my_role";

const LoginProcess = (AUTHORIZATION_CODE) => {
    return new Promise(async(resolve, reject)=>{
        getTokenFromKakao(AUTHORIZATION_CODE)
        .then((token)=>{//백엔드 서버에 카카오 토큰정보 넘기고 YAT 발급
            if(token.access_token){

                localStorage.setItem("KAT", token.access_token)
                return getYAT({
                    accessToken : token.access_token,
                    refreshToken : token.refresh_token,
                    refreshTokenExpiredTime : token.refresh_token_expires_in,
                })
            }else{
                // eslint-disable-next-line
                throw {error : "Kakao AccessToken not exist"}
            }
        })
        .then(async(YIRANG_ACCESS_TOKEN)=>{
            YIRANG_ACCESS_TOKEN = YIRANG_ACCESS_TOKEN.split(" ")[1]
            localStorage.setItem("YAT",YIRANG_ACCESS_TOKEN)
            let payload = YAT.decode(YIRANG_ACCESS_TOKEN)
            let roleInfo = await getMyRole()
            console.log("payload : ", payload)
            resolve({
                username : payload.username,
                imgUrl : payload.imgUrl,
                userId : payload.userId,
                role : roleInfo.authority
            })
            return YIRANG_ACCESS_TOKEN
        })
            .catch(error=>{
            console.log(error)
        })
    })
    
}

export default LoginProcess