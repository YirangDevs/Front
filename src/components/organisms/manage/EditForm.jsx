import React, { useEffect } from 'react'
import NoticeForm from '../../molecules/NoticeForm/index'




const EditForm = ({ setUpdateNotice, updateNotice, noticeId, getNotice, updateClick, updateFunction }) => {

    // useEffect((noticeId) => {


    // }, [])



    (updateNotice) ?
        console.log("updateNotice exist")
        :
        // getNotice(noticeId)
        //     .then((res) => {
        //         console.log(res.notices)
        //         console.log(res)
        //         setUpdateNotice(res.notices)
        //     })
        console.log(noticeId)



    return (
        <>
            <div>dfefd</div>
            {/* <NoticeForm></NoticeForm> */}
        </>
    )
}

export default EditForm