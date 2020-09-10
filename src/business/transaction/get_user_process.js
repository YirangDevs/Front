import getUserFromServer from "../service/get_user_from_server"

const getUserProcess = (set_user_callback) => {
    return new Promise(async(resolve, reject)=>{
        let YAT = localStorage.getItem("YAT")
        let user = await getUserFromServer(YAT)
        resolve({
            user: {
                username : user.username,
                imageUrl : user.imageUrl,
                sex : user.sex,
                email : user.email
            }
        })
    })
    
    
}

export default getUserProcess