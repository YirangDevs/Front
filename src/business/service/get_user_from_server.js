import _ from "../../config/env"

const getUserFromServer = (YAT, id) => {
    
    return new Promise(async(resolve, reject)=>{
      let data = await fetch(_.HOST_URL+":8080/v1/apis/info/users/"+id,{
        method: "GET",
        headers : {
          Authorization : "Bearer "+ YAT,
          Accept : "application/json"
        },
      }).then(res => res.json() )
      if(data) resolve(data)
      else reject(new Error("User non exist"))
    })
      
}

export default getUserFromServer