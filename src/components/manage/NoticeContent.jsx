// content
import React from 'react'
import NoticeInformation from './NoticeInformation'
import NoticeList from '../../containers/manage/NoticeList'
const NoticeContent = () => {
    return (
        <>
            <div className="notice--manage content__notice--manage">
                <NoticeInformation></NoticeInformation>
                {/* <div className="notice__information"></div> */}
                {/* <NoticeSelect></NoticeSelect> */}
                {/* <div className="notice__select"></div> */}
                <NoticeList></NoticeList>
                {/* <div className="list"></div> */}
            </div>
        </>
    )
}

export default NoticeContent;