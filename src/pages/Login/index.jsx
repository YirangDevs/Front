import React from "react"
import qs from "qs"
import LoginProcess from "../../service/transaction/login_process"
import store from "../../store/store"
import ACTION from "../../store/actions/action"
import {useHistory, useLocation} from "react-router-dom";
import NotificationPool from "../../containers/redux/components/NotificationPool/";

const LoginRedirect =  ()=>{
    const history = useHistory()
    const location = useLocation()
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
                }
            )
            .then().catch((err)=>{console.log(err)})
    }
    return (
        <>

        </>
    )
}



export default LoginRedirect