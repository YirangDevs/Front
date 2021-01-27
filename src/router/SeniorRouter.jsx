import {Route, useHistory} from "react-router-dom";
import React from "react";
import Senior from "../pages/Seniors/"
import NotificationPool from "../containers/redux/components/NotificationPool/";

const SeniorRouter = ({security, role}) => {
    const history = useHistory()
    if(security.indexOf(role)!=-1){
        return <Senior/>
    }
    history.push("/")
    NotificationPool.api.add({
        title : "접근 실패",
        content : "로그인이 필요하거나 권한이 없습니다",
        status : "error"
    })
    return null
}

export default SeniorRouter