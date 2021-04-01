import _ from "../../../config/env"
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

/**
 * @description 인증메일 보내는 api
 * @method POST
 * @request @headers YAT token
 *  @request @bodys imgData ( formData)
 */

const postCustomImg = (imgData)=>{
    console.log('body')
    console.log(imgData)
    return fetch(_.SERVER_URL + ":8080/v1/apis/imgs/custom ", {
        method: 'POST',
        headers: {

            Authorization: "Bearer " + localStorage.getItem("YAT"),
        },
        body:imgData
    }).then((res)=> {
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if (!res.ok) throw res.json()
        NotificationPool.api.add({
            title : "프로필 사진 수정 완료",
            content : '업로드한 사진으로 프로필사진이 변경되었습니다.',
            status : "success"
        })
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from  post_custom_img",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from post_Custom_Img\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
    //}

}

export default postCustomImg