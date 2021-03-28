import _ from "../../../config/env"
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

/**
 * @description 봉사 신청 api
 * @method POST
 * @request @headers YAT token
 * @request @body data{
  "noticeId": 0,
  "serviceType": "WORK"
   }
 */
const postApply = (data)=>{
    console.log(data)
    return fetch(_.SERVER_URL + ":8080/v1/apis/apply/notices", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("YAT"),
        },
        body: JSON.stringify(data),
    }).then((res)=> {
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if (!res.ok) throw res.json()

    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from post_apply",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log(err)
        console.log("Error from post_apply\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
    //}

}

export default postApply