/**
 * @description Senior
 * @method POST
 * @request @headers YAT token, Content-Type
 * @request
 */


const SeniorCheck = async (data) => {
    let seniorData = JSON.stringify(data);
    seniorData = seniorData.replace(/"sex":"남"/g,'"sex":"male"') //남자 영문으로 전환
    seniorData = seniorData.replace(/"sex":"여"/g,'"sex":"female"') //여자 영문으로 전환
    seniorData = seniorData.replace(/노력봉사/g,'work') //노력봉사 영문으로 전환
    seniorData = seniorData.replace(/말벗봉사/g,'talk') //말벗봉사 영문으로 전환

    return fetch("http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/check", {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json',
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        },
        body: seniorData
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        
    }).catch(async(error)=>{
        let err =  await error.then()
        

        //에러처리
        throw err
    })
}

export default SeniorCheck