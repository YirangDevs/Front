import React from "react";
import Login from "../pages/Login/"


const LoginRouter = ({security, userInfo}) => {
    if(security.indexOf(userInfo.role)!==-1){
        return <Login/>
    }
    return null
}

export default LoginRouter