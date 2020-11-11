import React from 'react'
import NoticeList from '../../containers/readAllNotice/NoticeList'
import Main from './Main'

// RAN
const Content = () => {
    return (
        <>
            <div className="containerRan__content">

                <NoticeList></NoticeList>
                <Main></Main>
            </div>
        </>
    )
}

export default Content;