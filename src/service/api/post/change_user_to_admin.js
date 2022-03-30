/**
 * @description 봉사자에서 관리자로 권한 변경
 * @method POST
 * @request @headers YAT token
 */
 import _ from "../../../config/env";


 const changeUserToAdmin = (userID) => {
     return fetch(`${_.SERVER_URL}:8080/v1/apis/admins/${userID}`, {
         method: 'POST',
         headers : {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
         }
     }).then(res=>{
         if(!res.ok) throw res.json()
     }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from put_changeRegion\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
     })
 }

 export default changeUserToAdmin