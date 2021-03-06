/**
 * @description 특정 notice 수정하기
 * @method PUT
 * @request @headers YAT token
 * @request @body data{title , content , region , nor , dov , tov , dod}
 * @params /noticeID
 */
import _ from "../../../config/env";
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

const editNotice = (updateID , data , title ,  diff) =>{
    return fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/" + Number(updateID),{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("YAT"),
        },
        body: data,
    }).then(res=>{
        if(!res.ok) throw res.json()
        
            NotificationPool.api.add({
                title : "수정 완료",
                content : `"${title}" 게시물의 ${diff}이 수정되었습니다.`,
                status : "success"
            })
        
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from edit_notice\n"+err.errorCode+"\n"+err.errorName)
        NotificationPool.api.add({
            title : "Error from edit_notice",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        throw err
    })
}

export default editNotice