/**
 * @description 관리자 담당지역 변경
 * @method PUT
 * @request @header YAT token
 */
 import _ from "../../../config/env";

 const editUserAdminRegion = (userID, regions) => {
     let payload = JSON.stringify(regions)
     return fetch(`${_.SERVER_URL}:8080/v1/apis/admins/${userID}`, {
         method: 'PUT',
         headers : {
            "Content-Type": "application/json",
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
         },
         body : payload
     }).then(res=>{
         if(!res.ok) throw res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from put_changeRegion\n"+err.error)
        //에러처리
        throw err
    })
 }

 export default editUserAdminRegion