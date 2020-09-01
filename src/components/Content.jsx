import React from "react"
import NoticeContent from "./NoticeContent"
import KakaoLoginBtn from "./KakaoLoginBtn"

const Content = () =>(
    <>
        <div className="content__wrapper">
            <NoticeContent></NoticeContent>
            <KakaoLoginBtn></KakaoLoginBtn>
        </div>
    </>
)

export default Content