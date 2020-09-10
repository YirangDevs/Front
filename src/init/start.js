import checkToken from "./checkToken"
import renewToken from "./renewToken"
import getUserFromServer from "../business/service/get_user_from_server"
import store from "../store/store"
import ACTION from "../store/actions/action"

export default () =>{
    checkToken().then(()=>console.log("test")).then(renewToken()).then((response)=>response.headers.get('Authorization')).then((YAT)=>getUserFromServer(YAT)).then((res)=>res.json()).then(
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
        }
    ).catch((err)=>{
        console.log(err)
    })
}