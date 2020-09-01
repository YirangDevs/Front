import React from "react"
import NoticeTitle from "./NoticeTitle"
import NoticeTable from "./NoticeTable"

const NoticeContent = () =>(
        <>
        <div className="content__notice__wrapper">
            <NoticeTitle></NoticeTitle>
            <NoticeTable></NoticeTable>
        </div>
    </>
)

export default NoticeContent