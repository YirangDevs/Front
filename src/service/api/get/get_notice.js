/**
 * @description 특정 notice 가져오기
 * @method GET
 * @params /noticeID
 */
import _ from "../../../config/env";

const getNotice = (noticeID) =>{
    return fetch (_.SERVER_URL + ":8080/v1/apis/manage/notices/" + Number(noticeID),{
        method :'GET'
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from get_notice\n"+err.errorCode+"\n"+err.errorName)
        throw err
    })
}

export default getNotice