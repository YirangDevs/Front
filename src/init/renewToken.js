import _ from "../config/env"

export default function(YAT) {
   return fetch(_.HOST_URL+":8080/v1/apis/auth/refresh",{
     method : "POST",
     headers : {
       Authorization : "Bearer" + YAT,
   }})
      
}

