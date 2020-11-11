const postSeniorsToServer = async (props) => {
    let seniordata1 = JSON.stringify(props.senior);
    let seniordata2 = seniordata1.replace(/"sex":"남"/g,'"sex":"male"') //남자 영문으로 전환
    let seniordata3 = seniordata2.replace(/"sex":"여"/g,'"sex":"female"') //여자 영문으로 전환
    let seniordata4 = seniordata3.replace(/노력봉사/g,'work') //노력봉사 영문으로 전환
    let payload = seniordata4.replace(/말벗봉사/g,'talk') //말벗봉사 영문으로 전환
    console.log(payload)
    // return fetch("http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/total", {
    //     method: 'POST',
    //     headers : {
    //         'Content-type' : 'application/json',
    //         'Authorization' : "Bearer "+ localStorage.getItem("YAT")
    //     },
    //     body: payload
    // }).then(res => (res.ok) ? res : res.json()).then(data=> console.log(data))
    return fetch("http://localhost:7000/seniors/upload", {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json',
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        },
        body: payload
    }).then(res => (res.ok) ? res : res.json()).then(data=> console.log(data))
}

export default postSeniorsToServer