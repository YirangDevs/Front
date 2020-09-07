import _ from "../../config/env"

const getUserFromServer = (YAT) => {
    return fetch(_.HOST_URL+":8080/v1/apis/info/users/{id}",{
      method: "GET",
      headers : {
        Authorization : "Bearer"+ YAT,
        Accept : "application/json"
      },
    })
}

export default getUserFromServer