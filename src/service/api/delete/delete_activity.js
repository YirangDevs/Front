/**
 * @description 특정 activity 삭제하기
 * @method DELETE
 * @params /삭제할 activity ID
 */

import _ from "../../../config/env";
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

const deleteActivity = (deleteID)=>{
    return fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/force/" + Number(deleteID),{
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("YAT"),
        }
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from delete_activity",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from delete_activity\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default deleteActivity