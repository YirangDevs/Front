import React from "react"
import qs from "qs"
import LoginProcess from "../../service/transaction/login_process"
import store from "../../store/store"
import ACTION from "../../store/actions/action"

const LoginRedirect =  ({location, history})=>{
    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true
    })
    if(!query.code) alert("정상적인 접근이 아닙니다.")
    else{
        LoginProcess(query.code)
            .then((payload)=>{
                store.dispatch(ACTION.SET_USER__ACTION_FUNC({user : {...payload}}))
                store.dispatch(ACTION.LOGIN_ACTION_FUNC())
                }
            )
            .then(()=>history.push("/")).catch((err)=>{console.log(err)})
    }
    return (
        <>

        </>
    )
}



export default LoginRedirect