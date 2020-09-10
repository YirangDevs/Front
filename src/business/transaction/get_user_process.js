import getUserFromServer from "../service/get_user_from_server"
import store from "../../store/store"

const getUserProcess = () => {
    return new Promise(async(resolve, reject)=>{
        let YAT = localStorage.getItem("YAT")
        let userId = store.getState().user_reducer.userId
        let user = await getUserFromServer(YAT,userId)
        if(user){
            
            resolve({
                user: {
                    username : user.username,
                    imageUrl : user.imageUrl,
                    sex : user.sex,
                    email : user.email
                }
            })
        }else{
            reject( new Error("유저 정보 없음"))
        }
        
    })
    
    
}

export default getUserProcess