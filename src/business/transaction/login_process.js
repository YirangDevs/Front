import getTokenFromKakao from "../service/get_token_from_kakao"
import getYirangToken from "../service/get_yirang_token"

const LoginProcess = (AUTHORIZATION_CODE) => {
    return Promise(async(resolve, reject)=>{
        let token = await getTokenFromKakao(AUTHORIZATION_CODE)
        if(token.access_token){//if access token exists
            let YIRANG_TOKEN = await getYirangToken({
                kakaoAccessToken : token.access_token,
                kakaoRefreshToken : token.refresh_token,
                kakaoRefreshTokenExpiredTime : token.refresh_token_expires_in,
            })
            localStorage.setItem("YAT",YIRANG_TOKEN)
            //YAT parcing
            //Redux Store에 user_id, user_role 추가
        }else{

        }
    })
    
}

export default LoginProcess
