import { useHistory} from "react-router-dom";
import React from "react";
import Senior from "../pages/Seniors/"
import NotificationPool from "../containers/redux/components/NotificationPool/";

const SeniorRouter = ({security, userInfo}) => {
    const history = useHistory()
    if(security.indexOf(userInfo.role)!==-1){
        if(userInfo.sex==="UNKNOWN" || userInfo.phone === null || userInfo.realname===null){
            history.push("profile")
            NotificationPool.api.add({
                title : "필수",
                content : "프로필을 설정해주세요",
                status : "success"
            })
            return null
        }
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