//container
import React from 'react'
import Notice from './NoticeContent'
import Menu from './MenuContent'
const Content = () => {
    return (
        <>
            <div className="content container__content">
                <Notice></Notice>
                {/* <div className="notice content__notice"></div> */}
                <Menu></Menu>
                {/* <div className="menu content__menu"></div> */}
            </div>
        </>
    )
}

export default Content;