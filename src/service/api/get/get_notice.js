import _ from "../../../config/env";
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

/**
 * @description 특정 notice 가져오기
 * @method GET
 * @params /noticeID
 */


const getNotice = (noticeID) =>{
    return fetch (_.SERVER_URL + ":8080/v1/apis/manage/notices/" + Number(noticeID),{
        method :'GET'
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        return res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from get_notice",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from get_notice\n"+err.errorCode+"\n"+err.errorName)
        throw err
    })
}

export default getNotice