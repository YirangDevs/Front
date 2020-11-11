//container
import React from 'react'
import Notice from './NoticeContent'
import Menu from './MenuContent'
const Content = () => {


    return (
        <>
            <div className="content container__content">
                <Notice></Notice>
                <Menu></Menu>
            </div>
        </>
    )
}

export default Content;