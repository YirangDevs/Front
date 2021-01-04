import _ from "../../../config/env";

const getYAT =  (KAKAO_TOKEN_DATA) => {
    return fetch(_.SERVER_URL+":8080/v1/apis/auth/signin", {
        method: "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(KAKAO_TOKEN_DATA)
    }).then(res => {
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        return res.headers
    }).then(header => header.get("Authorization")).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from getYAT\n"+err.errorCode+"/n"+err.errorName)
        throw err
    })
}

export default getYAT