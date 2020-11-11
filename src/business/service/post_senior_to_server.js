const postSeniorToServer = async (props) => {
    console.log(props)
    let payload = JSON.stringify(props);
    return fetch("http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors",{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        },
        body: payload
    }).then(res => (res.ok) ? res : res.json()).then(data=> console.log(data))
    
}

export default postSeniorToServer