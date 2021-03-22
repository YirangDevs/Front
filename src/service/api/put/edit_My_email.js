/**
 * @description 내 정보 수정하기
 * @method PUT
 * @request @headers YAT token
 */

 import _ from "../../../config/env"
 import NotificationPool from "../../../containers/redux/components/NotificationPool"


 const editMyEmail = (  email,editEmail)=>{
    return fetch(_.SERVER_URL + ":8080/v1/apis/emails" ,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("YAT"),
        },
        body: editEmail,
    }).then(res=>{
        if(!res.ok) throw res.json()
        
            NotificationPool.api.add({
                title : "이메일 인증이 필요합니다. ",
                content : `'${email}' 로 전송된 이메일을 확인해 주세요.`,
                status : "success"
            })
        
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from edit_MyInfo\n"+err.errorCode+"\n"+err.errorName)
        NotificationPool.api.add({
            title : "Error from edit_MyInfo",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        throw err
    })
 }
 
 export default editMyEmail