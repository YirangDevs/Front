import _ from "../../../config/env"

/**
 * @description notice 생성
 * @method POST
 * @request @headers YAT token
 * @request @body data{title , content , region , nor , dov , tov , dod}
 */
const postNotice = (data)=>{
    // const insideData = data.activityRegisterRequestDto
    // console.log(insideData.dod==undefined)
    // if(insideData.dod==undefined||insideData.content==undefined||insideData.tov==undefined||data.title==undefined){
    //     throw new Error
    //     .catch((error)=> console.log(error))
    // }else{
        return fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices", {
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
            console.log("Error from post_notice\n"+err.errorCode+"\n"+err.errorName)
            //에러처리
            throw err
        })
    //}
    
}

export default postNotice