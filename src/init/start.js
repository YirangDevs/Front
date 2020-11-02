import store from "../store/store"
import ACTION from "../store/actions/action"
import YAT from "../business/service/yat"
import renewToken from "./renewToken"


export default () =>{
        if(!store.getState().login_reducer.logined){
            YAT.exist()
            .then((YAT)=>{
                store.dispatch(ACTION.LOADING_ACTION_FUNC())
                return renewToken(YAT)
            })
            .then((response)=>response.headers.get('Authorization').split(" ")[1])
            .then((token)=>{
                
                let claim = YAT.decode(token)
                store.dispatch(ACTION.SET_USER__ACTION_FUNC({
                    user: {
                        username : claim.username,
                        imgUrl : claim.imgUrl,
                        userId : claim.userId,
                        role : claim.role
                    }
                }))
                
                store.dispatch(ACTION.LOGIN_ACTION_FUNC());
            })
            .catch((err)=>{
                store.dispatch(ACTION.LOADING_OUT_ACTION_FUNC())
                console.log(err)
                
            })
        }
    
}