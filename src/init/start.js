import store from "../store/store"
import ACTION from "../store/actions/action"
import YAT from "../business/service/yat"


export default () =>{
        if(!store.getState().login_reducer.logined){
            YAT.exist()
            // .then((YAT)=>renewToken(YAT))
            //.then((response)=>response.headers.get('Authorization').split(" ")[1])
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
                console.log(err)
                
            })
        }
    
}