/**
 * @description noticeNum 받아오기
 * @method GET
 */
import _ from "../../../config/env";

const getNoticeNum = ()=>{
    return fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/nums", {
        method: 'GET',
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        return res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from get_notice_num\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default getNoticeNum