import {Route, useHistory} from "react-router-dom";
import React from "react";
import Logout from "../pages/Logout/"
import NotificationPool from "../containers/redux/components/NotificationPool/";

const LogoutRouter = ({security, role}) => {
    const history = useHistory()
    if(security.indexOf(role)!=-1){
        return <Logout/>
    }
    history.push("/")
    NotificationPool.api.add({
        title : "로그아웃 실패",
        content : "로그아웃이 원활히 진행되지 않았습니다.",
        status : "error"
    })
    return null

}

export default LogoutRouter