/**
 * @description 내 정보 수정하기 {firstRegion}
 * @method PUT
 * @request @headers YAT token
 */

 import _ from "../../../config/env"
 import NotificationPool from "../../../containers/redux/components/NotificationPool"


 const editMyInfoFirstRegion = (  editData)=>{
    return fetch(_.SERVER_URL + ":8080/v1/apis/info/myinfo/firstRegion" ,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("YAT"),
        },
        body: editData,
    }).then(res=>{
        if(!res.ok) throw res.json()
        
            NotificationPool.api.add({
                title : "수정 완료",
                content : `1순위 선호지역 수정완료.`,
                status : "success"
            })
        
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from edit_My_FirstRegion\n"+err.errorCode+"\n"+err.errorName)
        NotificationPool.api.add({
            title : "Error from edit_My_FirstRegion",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        throw err
    })
 }
 
 export default editMyInfoFirstRegion

