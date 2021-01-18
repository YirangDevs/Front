/**
 * @description 개별 피봉사자 등록
 * @method POST
 * @request @headers YAT token, Index-Type
 * @request @body data{title , content , region , nor , dov , tov , dod}
 */

const postSeniorToServer = (data) => {
    let payloadData = JSON.stringify(data);
    payloadData = payloadData.replace(/"sex":"남"/g,'"sex":"male"') //남자 영문으로 전환
    payloadData = payloadData.replace(/"sex":"여"/g,'"sex":"female"') //여자 영문으로 전환
    payloadData = payloadData.replace(/노력봉사/g,'work') //노력봉사 영문으로 전환
    payloadData = payloadData.replace(/말벗봉사/g,'talk') //말벗봉사 영문으로 전환
    return fetch("http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors",{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        },
        body: payloadData
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from post_senior\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    }).then()
}

export default postSeniorToServer