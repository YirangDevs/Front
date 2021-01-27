import store from "../store/store"
import ACTION from "../store/actions/action"
import YAT from "../util/Yat/yat"
import renewToken from "./renewToken"


export default () =>{
    return new Promise((resolve, reject)=>{
        if(!store.getState().login_reducer.logined){
            YAT.exist()
                .then((YAT)=>{
                    //store.dispatch(ACTION.LOADING_ACTION_FUNC())
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
                .then(()=>resolve(true))
                .catch((err)=>{
                console.log(err)

            })
    }else{
        resolve(true)
    }

    })
    
}