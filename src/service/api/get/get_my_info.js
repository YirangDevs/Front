import _ from "../../../config/env";
import NotificationPool from "../../../containers/redux/components/NotificationPool";

/**
 * @description 유저 정보 가져오기
 * @method GET
 * @params /
 */


 const getMyInfo =() =>{
     return fetch(_.SERVER_URL + ":8080/v1/apis/info/myinfo",{
         method : 'GET',
         headers: {
            'Authorization': "Bearer " + localStorage.getItem("YAT")
        }
     }).then(res =>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        return res.json()
     }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from get_MyInfo",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from get_MyInfo\n"+err.errorCode+"\n"+err.errorName)
        throw err
    })
 }

 export default getMyInfo;