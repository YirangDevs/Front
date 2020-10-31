// content
import React from 'react'
import NoticeInformation from './NoticeInformation'
import NoticeSelect from './NoticeSelect'
import NoticeList from './NoticeList'
const NoticeContent = () => {
    return (
        <>
            <div className="notice content__notice">
                <NoticeInformation></NoticeInformation>
                {/* <div className="notice__information"></div> */}
                <NoticeSelect></NoticeSelect>
                {/* <div className="notice__select"></div> */}
                <NoticeList></NoticeList>
                {/* <div className="list"></div> */}
            </div>
        </>
    )
}

export default NoticeContent;