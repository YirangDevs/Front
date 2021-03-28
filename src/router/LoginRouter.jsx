import { useHistory} from "react-router-dom";
import React from "react";
import Login from "../pages/Login/"


const LoginRouter = ({security, userInfo}) => {
    const history = useHistory()
    if(security.indexOf(userInfo.role)!==-1){
        return <Login/>
    }
    history.push("/")
    return null
}

export default LoginRouter