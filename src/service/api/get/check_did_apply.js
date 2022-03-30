/**
 * Created by Yongwon on 2021-05-06
 * Email: yongwon0824@naver.com
 */


import NotificationPool from "../../../containers/redux/components/NotificationPool";
import _ from "../../../config/env";

/**
 * @description 봉사 신청 여부
 * @method GET
 * @request @headers YAT token
 */
const checkDidApply = (noticeId) => {
    return fetch(`${_.SERVER_URL}:8080/v1/apis/apply/apply-check/notices/${noticeId}`, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + localStorage.getItem("YAT")
        }
    }).then((res) => {
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if (!res.ok) throw res.json()
        return res.json()
    }).then(data=> {
        return data
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from check_did_apply",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from check_did_apply\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default checkDidApply;