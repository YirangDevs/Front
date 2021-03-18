import _ from "../../../config/env"
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

/**
 * @description 인증번호 확인하는 api
 * @method POST
 * @request @headers YAT token
 */

const postCertificationEmail = ( authNumData)=>{
    return fetch(_.SERVER_URL + ":8080/v1/apis/emails/validation", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("YAT"),
        },
        body: authNumData,
    }).then((res)=> {
        
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if (!res.ok) throw res.json()
       
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title: "인증번호가 일치하지 않습니다",
            content: `메일로 발송된 인증번호를 다시 확인해주세요.`,
            status: "error"
        })
        console.log("Error from post_certification_email\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
    //}

}

export default postCertificationEmail