import React, {useEffect} from "react"
import qs from "qs"
import LoginProcess from "../../service/transaction/login_process"
import store from "../../store/store"
import ACTION from "../../store/actions/action"
import {useHistory, useLocation} from "react-router-dom";
import NotificationPool from "../../containers/redux/components/NotificationPool/";

const LoginRedirect =  ()=>{
    const history = useHistory()
    const location = useLocation()

    useEffect(()=>{
            const query = qs.parse(location.search,{
                ignoreQueryPrefix:true
            })

            if(!query.code) NotificationPool.api.add({
                title : "접근 실패",
                content : "잘못된 접근입니다.",
                status : "error"
            })
            else{
                LoginProcess(query.code)
                    .then((payload)=>{
                            store.dispatch(ACTION.SET_USER__ACTION_FUNC({user : {...payload}}))
                            store.dispatch(ACTION.LOGIN_ACTION_FUNC())
                            return payload.isNewbie
                        }
                    )
                    .then((isNewbie)=>{
                        if(isNewbie) {
                            NotificationPool.api.add({
                                title: "환영합니다!",
                                content: "프로필을 설정해주세요",
                                status: "success",
                                duration: 3
                            })
                            history.push("profile")
                        }
                        else {
                            history.push("/")
                        }
                    }).catch((err)=>{console.log(err)})
            }
        },
        [history, location.search])

    return (
        <>

        </>
    )
}



export default LoginRedirect