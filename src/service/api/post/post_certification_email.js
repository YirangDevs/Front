import _ from "../../../config/env"
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

/**
 * @description 인증메일 보내는 api
 * @method POST
 * @request @headers YAT token
 */

const postCertificationEmail = ()=>{
    return fetch(_.SERVER_URL + ":8080/v1/apis/emails/certification", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("YAT"),
        }
    }).then((res)=> {
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if (!res.ok) throw res.json()

    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from  post_certification_email",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from post_certification_email\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
    //}

}

export default postCertificationEmail