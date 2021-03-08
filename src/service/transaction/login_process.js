import getTokenFromKakao from "../api/post/get_token_from_kakao"
import YAT from "../../util/Yat/yat"
import getYAT from "../api/get/getYAT";
import getMyRole from "../api/get/get_my_role";
import getMyInfo from "../api/get/get_my_info";
import checkEmailValidation from "../api/get/check_email_validation";

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
            let userInfo = await getMyInfo()
            let emailValidation = await checkEmailValidation()
            console.log("userInfo : ", userInfo)
            console.log("payload : ", payload)
            let result = {
                username : userInfo.username,
                userId : payload.userId,
                role : roleInfo.authority,
                email : userInfo.email,
                sex : userInfo.sex,
                phone : userInfo.phone,
                emailValidation : emailValidation.validation
            }
            console.log("result", result)
            resolve(result)
            return YIRANG_ACCESS_TOKEN
        })
            .catch(error=>{
            console.log(error)
        })
    })
    
}

export default LoginProcess
