import _ from "../config/env"

export default function (YAT) {
    return new Promise(async (resolve, reject) => {
        let data = await fetch(_.HOST_URL + ":8080/v1/apis/admins", {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + YAT,
            }
        })
        if (data) {
            console.log("delete work : " + data)
            resolve(data)
        } else {
            reject(new Error("토큰 갱신서버와 통신 불가"))
        }
    })
}

