import _ from "../../../config/env"

import YAT from "../../../util/Yat/yat"
import getMyRole from "../../api/get/get_my_role";
import getMyInfo from "../../api/get/get_my_info";
import checkEmailValidation from "../../api/get/check_email_validation";


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
    }).then(async(YIRANG_ACCESS_TOKEN)=>{
        YIRANG_ACCESS_TOKEN = YIRANG_ACCESS_TOKEN.split(" ")[1]
        localStorage.setItem("YAT",YIRANG_ACCESS_TOKEN)
        let payload = YAT.decode(YIRANG_ACCESS_TOKEN)
        let roleInfo = await getMyRole()
        let userInfo = await getMyInfo()
        let emailValidation = await checkEmailValidation()
        // let result = {
        //     userId : payload.userId,
        //     role : roleInfo.authority,
        //     emailValidation : emailValidation.validation,
        //     ...userInfo,
        //     ...data
        // }
        let result = {
            userId : payload.userId,
            role : roleInfo.authority,
            emailValidation : emailValidation.validation,
            ...userInfo,
        }
        console.log("fakeLogin result", result)
        return result
    })
        .catch(error=>{
        console.log(error)
    })
}

export default fakeLogin