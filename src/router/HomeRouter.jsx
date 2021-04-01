import { useHistory} from "react-router-dom";
import React from "react";
import Home from "../pages/Home/";
import NotificationPool from "../containers/redux/components/NotificationPool/";

const HomeRouter = ({security, userInfo}) => {
    const history = useHistory()
    if(security.indexOf(userInfo.role)!==-1){

        return <Home/>
    }


    history.push("/")
    NotificationPool.api.add({
        title : "접근 실패",
        content : "로그인이 필요하거나 권한이 없습니다",
        status : "error"
    })
    return null
}

export default HomeRouter