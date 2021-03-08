import store from "../store/store"
import ACTION from "../store/actions/action"
import YAT from "../util/Yat/yat"
import renewToken from "./renewToken"
import getMyRole from "../service/api/get/get_my_role";
import getMyInfo from "../service/api/get/get_my_info";
import checkEmailValidation from "../service/api/get/check_email_validation";

//만료되고 재로그인할시 토큰만료 노티뜨는거 수정하기

export default () =>{
    return new Promise((resolve, reject)=>{
        if(!store.getState().login_reducer.logined){
            //YAT가 존재, 로그인이 안됬을시 Renew
            YAT.exist()
                .then((YAT)=>{
                    //store.dispatch(ACTION.LOADING_ACTION_FUNC())
                    return renewToken(YAT)
                })
                .then((response)=>response.headers.get('Authorization').split(" ")[1])
                .then(async(token)=>{
                    let roleInfo = await getMyRole()
                    let userInfo = await getMyInfo()
                    let emailValidation = await checkEmailValidation()
                    let claim = YAT.decode(token)
                    store.dispatch(ACTION.SET_USER__ACTION_FUNC({
                        user: {
                            username : userInfo.username,
                            userId : claim.userId,
                            role : roleInfo.authority,
                            email : userInfo.email,
                            sex : userInfo.sex,
                            phone : userInfo.phone,
                            emailValidation : emailValidation.validation
                        }
                    }))

                    store.dispatch(ACTION.LOGIN_ACTION_FUNC());
                })
                .then(()=>resolve(true))
                .catch((err)=>{
                    //토큰 만료 됬을시
                    resolve(true)
                    console.log(err)

            })
    }else{
        //로그인 됬을시
        resolve(true)
    }

    })
    
}