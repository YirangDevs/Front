import { useHistory} from "react-router-dom";
import React from "react";
import UserAuthority from "../pages/UserAuthority/"
import NotificationPool from "../containers/redux/components/NotificationPool/";

const UserAuthorityRouter = ({security, userInfo}) => {
    const history = useHistory()
    if(security.indexOf(userInfo.role)!==-1){

        return <UserAuthority/>
    }
    history.push("/")
    NotificationPool.api.add({
        title : "접근 실패",
        content : "로그인이 필요하거나 권한이 없습니다",
        status : "error"
    })
    return null
}

export default UserAuthorityRouter