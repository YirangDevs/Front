import React from "react"
import NoticeTitle from "./NoticeTitle"
import NoticeTable from "./NoticeTable"

const NoticeContent = () => (
    <>
        <div className="notice content__notice">
            <NoticeTitle></NoticeTitle>
            <NoticeTable></NoticeTable>
        </div>
    </>
)

export default NoticeContent