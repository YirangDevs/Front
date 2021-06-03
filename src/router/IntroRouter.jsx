import React from "react"
import { useHistory } from "react-router"
import NotificationPool from "../containers/redux/components/NotificationPool"
import Intro from "../pages/Intro"


const IntroRouter = ({ security, userInfo }) => {
    const history = useHistory()
    if (security.indexOf(userInfo.role) !== -1) {

        return <Intro />
    }
    history.push("/")
    NotificationPool.api.add({
        title: "접근실패",
        content: "로그인이 필요하거나 권한이 없습니다.",
        status: "error"
    })

}

export default IntroRouter