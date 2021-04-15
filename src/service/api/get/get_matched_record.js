/**
 * Created by Yongwon on 2021-04-15
 * Email: yongwon0824@naver.com
 */


import NotificationPool from "../../../containers/redux/components/NotificationPool/";
import _ from "../../../config/env"

const getMatchedRecord = (activityId) => {

    const errcodeParser = {
        "044" : ["Matched_record 찾을수 없음","해당 액티비티에 대한 현재 진행중인 매칭이 없습니다."]
    }


    return fetch(_.SERVER_URL+':8080/v1/apis/matchings/activities/'+Number(activityId), {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + localStorage.getItem("YAT")
        }
    }).then((res)=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        let data = res.json()
        return data
    }).catch(async(error)=>{
        let err =  await error.then()

        NotificationPool.api.add({
            title : errcodeParser[err.errorCode][0],
            content : errcodeParser[err.errorCode][1],
            status : "error"
        })
        console.log("Error from get_matched_record\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default getMatchedRecord
