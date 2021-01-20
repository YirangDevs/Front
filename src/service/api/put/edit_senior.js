/**
 * @description 개별 피봉사자 데이터 수정
 * @method PUT
 * @request @headers YAT token, Index-Type
 * @request id
 */

const editSenior = async (id, data) => {

    let payloadData = JSON.stringify(data)
    payloadData = payloadData.replace(/"sex":"남성"/g,'"sex":"male"') //남자 영문으로 전환
    payloadData = payloadData.replace(/"sex":"여성"/g,'"sex":"female"') //여자 영문으로 전환
    payloadData = payloadData.replace(/노력봉사/g,'work') //노력봉사 영문으로 전환
    payloadData = payloadData.replace(/말벗봉사/g,'talk') //말벗봉사 영문으로 전환

    console.log(payloadData)

    return fetch("http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/"+id, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        },
        body: payloadData
    }).then(res=>{
        if(!res.ok) throw res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from edit_senior\n"+err.errorCode+"\n"+err.errorName)
        throw err
    })
}

export default editSenior