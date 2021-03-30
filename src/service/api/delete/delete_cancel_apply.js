/**
 * @description  봉사신청취소
 * @method DELETE
 */

 import _ from "../../../config/env";
 import NotificationPool from "../../../containers/redux/components/NotificationPool/";
 
 const deleteCancelApply = (applyID)=>{
     return fetch(_.SERVER_URL + ":8080/v1/apis/apply/"+ Number(applyID),{
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
             title : "Error from deleteCancelApply",
             content : err.errorName + "("+err.errorCode+")",
             status : "error"
         })
         console.log("Error from deleteCancelApply\n"+err.errorCode+"\n"+err.errorName)
         //에러처리
         throw err
     })
 }
 
 export default deleteCancelApply