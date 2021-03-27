/**
 * @description 내  img Type 수정하기
 * @method PUT
 * @request @headers YAT token
 */

 import _ from "../../../config/env"
 import NotificationPool from "../../../containers/redux/components/NotificationPool"


 const editMyImgType = (imgTypeData )=>{
    return fetch(_.SERVER_URL + ":8080/v1/apis/imgs/imgTypes " ,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("YAT"),
        },
        body : imgTypeData
    }).then(res=>{
        if(!res.ok) throw res.json()
      
        
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from edit_my_img_type\n"+err.errorCode+"\n"+err.errorName)

        NotificationPool.api.add({
            title : "Error from edit_My_ImgType",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        throw err
    })
 }
 
 export default editMyImgType