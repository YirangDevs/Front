/**
 * Created by Yongwon on 2021-04-29
 * Email: yongwon0824@naver.com
 */

/**
 * @description 봉사 신청자 받아오기
 * @method GET
 */
import _ from "../../../config/env";
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

const getAppliers = (activityId)=>{
    return fetch(_.SERVER_URL + ":8080/v1/apis/manage/activities/applies/"+activityId, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + localStorage.getItem("YAT")
        }
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        return res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from get_appliers",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from get_appliers\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default getAppliers