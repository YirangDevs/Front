import getTokenFromKakao from "../service/get_token_from_kakao"
import YAT from "../service/yat"

const LoginProcess = (AUTHORIZATION_CODE) => {
    return new Promise(async(resolve, reject)=>{
        let token = await getTokenFromKakao(AUTHORIZATION_CODE)
        console.log(token)
        if(token.access_token){//if access token exists
            let YIRANG_TOKEN = await YAT.get({
                accessToken : token.access_token,
                refreshToken : token.refresh_token,
                refreshTokenExpiredTime : token.refresh_token_expires_in,
            })
            localStorage.setItem("YAT",YIRANG_TOKEN)
            //YAT parcing
            //Redux Store에 user_id, user_role 추가
        }else{

        }
    })
    
}

export default LoginProcess
