/**
 * Created by Yongwon on 2021-03-30
 * Email: yongwon0824@naver.com
 */

/**
 * @description activity page 별로 받아오기 (14개씩)
 * @method GET
 * @query ?page = pageNum
 */
import _ from "../../../config/env";
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

const getActivityByPage = (pageNum) => {
    return fetch(_.SERVER_URL + ":8080/v1/apis/manage/activities?page=" + Number(pageNum), {
        method: 'GET',
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        return res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from get_activity_by_page",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from get_activity_by_page\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default getActivityByPage