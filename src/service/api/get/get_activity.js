/**
 * Created by Yongwon on 2021-03-30
 * Email: yongwon0824@naver.com
 */

import _ from "../../../config/env";
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

/**
 * @description 특정 activity 가져오기
 * @method GET
 * @params /noticeID
 */


const getActivity = (activityId) =>{
    return fetch (_.SERVER_URL + ":8080/v1/apis/manage/activities/" + Number(activityId),{
        method :'GET'
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        return res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from get_activity",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from get_activity\n"+err.errorCode+"\n"+err.errorName)
        throw err
    })
}

export default getActivity