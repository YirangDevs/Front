/**
 * Created by Yongwon on 2021-03-30
 * Email: yongwon0824@naver.com
 */

/**
 * @description activityNum 받아오기
 * @method GET
 */
import _ from "../../../config/env";
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

const getActivityNum = ()=>{
    return fetch(_.SERVER_URL + ":8080/v1/apis/manage/activities/nums", {
        method: 'GET',
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        return res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from get_activity_num",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from get_activity_num\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default getActivityNum