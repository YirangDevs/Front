import NotificationPool from "../../../containers/redux/components/NotificationPool/";
import _ from "../../../config/env";

/**
 * @description 내정보 받아오기
 * @method GET
 * @request @headers YAT token
 */
const getMyInfo = () => {
    return fetch(`${_.SERVER_URL}:8080/v1/apis/info/myinfo`, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + localStorage.getItem("YAT")
        }
    }).then((res)=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        let data = res.json()
        return data
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from get_my_info",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from get_my_region\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default getMyInfo
