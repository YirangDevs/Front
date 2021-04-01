/**
 * Created by Yongwon on 2021-03-08
 * Email: yongwon0824@naver.com
 */

import NotificationPool from "../../../containers/redux/components/NotificationPool";

/**
 * @description 할당된 모든 구역 받아오기
 * @method GET
 * @request @headers YAT token
 * @request @body data{title , content , region , nor , dov , tov , dod}
 */
const checkEmailValidation = () => {
    return fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/emails', {
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
            title : "Error from check_email_validation",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from check_email_validation\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default checkEmailValidation;