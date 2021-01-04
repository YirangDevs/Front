import _ from "../config/env"

export default function(YAT) {
   return new Promise(async(resolve, reject)=>{
     let data = await fetch(_.SERVER_URL+":8080/v1/apis/auth/refresh",{
     method : "POST",
     headers : {
       Authorization : "Bearer " + YAT,
    }})
    if(data){
      resolve(data)
    }else{
      reject({error : "Refresh Token Failed"})
    }
   })
}

