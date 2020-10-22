import getTokenFromKakao from "../service/get_token_from_kakao"
import YAT from "../service/yat"

const LoginProcess = (AUTHORIZATION_CODE) => {
    return new Promise(async(resolve, reject)=>{
        getTokenFromKakao(AUTHORIZATION_CODE)
        .then((token)=>{//백엔드 서버에 카카오 토큰정보 넘기고 YAT 발급
            if(token.access_token){
                console.log(token.access_token)
                return YAT.get({
                    accessToken : token.access_token,
                    refreshToken : token.refresh_token,
                    refreshTokenExpiredTime : token.refresh_token_expires_in,
                })
            }else{
                throw new Error("Kakao Login Failed")
            }
        })
        .then((YIRANG_ACCESS_TOKEN)=>{
            YIRANG_ACCESS_TOKEN = YIRANG_ACCESS_TOKEN.split(" ")[1]
            localStorage.setItem("YAT",YIRANG_ACCESS_TOKEN)
            let payload = YAT.decode(YIRANG_ACCESS_TOKEN)
            
            resolve({
                userId : payload.userId,
                role : payload.role
            })
        })
        // let token = await getTokenFromKakao(AUTHORIZATION_CODE)
        // console.log(token)
        // if(token.access_token){//if access token exists
        //     let YIRANG_TOKEN = await YAT.get({
        //         accessToken : token.access_token,
        //         refreshToken : token.refresh_token,
        //         refreshTokenExpiredTime : token.refresh_token_expires_in,
        //     })
        //     YIRANG_TOKEN = YIRANG_TOKEN.split(" ")[1]
        //     localStorage.setItem("YAT",YIRANG_TOKEN)
        //     let payload = YAT.decode(YIRANG_TOKEN)
            
        //     resolve({
        //         userId : payload.userId,
        //         role : payload.role
        //     })//role이랑 id넘겨줌

        //     //Redux Store에 user_id, user_role 추가
        // }else{

        // }
    })
    
}

export default LoginProcess
