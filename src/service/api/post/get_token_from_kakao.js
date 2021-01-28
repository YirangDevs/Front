import _ from "../../../config/env"
import NotificationPool from "../../../containers/redux/components/NotificationPool/";
/**
 * @description 카카오 토큰 발급
 * @method POST
 * @request @Index-Type : application/x-www-form-urlencoded;charset=utf-8
 * @request @body authorization_code
 */
const getTokenFromKakao = (AUTHORIZATION_CODE) => {
    let payload = "grant_type=authorization_code&client_id="+_.REST_KEY+"&redirect_url="+_.REDIRECT_URL+"&code="+AUTHORIZATION_CODE;
    return fetch(_.KAKAO_TOKEN_URL, {
        method: "POST",
        headers : { 
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
           },
        body: payload
    }).then(res=>{
        if(!res.ok) throw Promise.resolve({errorCode : 999, errorName : "Token Receive Failed"})
        return res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from get_token_from_kakao",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from get_token_from_kakao\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
    
}

export default getTokenFromKakao

