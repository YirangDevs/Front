import _ from "../../../config/env"
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

/**
 * @description notice 응급 생성
 * @method POST
 * @request @headers YAT token
 * @request @body urgent TItle
 */
const postNotice = (noticeId , data)=>{
        return fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/" + Number(noticeId) + "/urgent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("YAT"),
            },
            body: data,
        }).then((res)=> {
            if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
            if (!res.ok) throw res.json()
            NotificationPool.api.add({
                title : "긴급게시물 생성완료!",
                content : '긴급게시물이 생성되었습니다.',
                status : "success"
            })
        }).catch(async(error)=>{
            let err =  await error.then()
          
            
            console.log("Error from post_notice\n"+err.errorCode+"\n"+err.errorName)
            //에러처리
            throw err
        })
    //}
    
}

export default postNotice