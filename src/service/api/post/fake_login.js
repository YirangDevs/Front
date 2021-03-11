import _ from "../../../config/env"
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

const fakeLogin = (role) => {
    console.log(role)
    return fetch(_.SERVER_URL + ":8080/v1/apis/auth/fake/signin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(role)
    }).then(res => {
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        return res.headers
    }).then(header => header.get("Authorization")).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from getYAT",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from getYAT\n"+err.errorCode+"/n"+err.errorName)
        throw err
    })
}

export default fakeLogin