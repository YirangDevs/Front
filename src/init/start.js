import renewToken from "./renewToken"
import getUserFromServer from "../business/service/get_user_from_server"
import store from "../store/store"
import ACTION from "../store/actions/action"
import YAT from "../business/service/yat"


export default () =>{
        if(!store.getState().login_reducer.logined){
            YAT.exist()
            .then((YAT)=>renewToken(YAT))
            .then((response)=>response.headers.get('Authorization').split(" ")[1])
            .then((token)=>{
                
                let YIRANG_ACCESS_TOKEN = YAT.decode(token)
                console.log(YIRANG_ACCESS_TOKEN)
                store.dispatch(ACTION.SET_USER__ACTION_FUNC({
                    user: {
                        userId : YIRANG_ACCESS_TOKEN.userId,
                        role : YIRANG_ACCESS_TOKEN.role
                    }
                }))
                return {token : token, id: YIRANG_ACCESS_TOKEN.userId}
            })
            .then((data)=>getUserFromServer(data.token, data.id))
            
            .then(
                (user)=>{
                    store.dispatch(ACTION.LOGIN_ACTION_FUNC())
                    store.dispatch(ACTION.SET_USER__ACTION_FUNC({
                        user: {
                            username : user.username,
                            imageUrl : user.imageUrl,
                            sex : user.sex,
                            email : user.email
                        }
                    }))
                    console.log("끝")
                }
            ).catch((err)=>{
                console.log(err)
                
            })
        }
    
}