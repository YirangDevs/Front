/**
 * @description notice page 별로 받아오기 (6개씩)
 * @method GET
 * @query ?page = pageNum
 */
import _ from "../../../config/env";
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

const getNoticeByPage = (pageNum) => {
    return fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices?page=" + Number(pageNum), {
        method: 'GET',
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        return res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from get_notice_by_page",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from get_notice_by_page\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default getNoticeByPage