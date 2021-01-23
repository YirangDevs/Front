import React from 'react'
import NoticeForm from '../../molecules/NoticeForm/index'




const EditForm = () => {

    const helpMe = {
        title: "title ",
        titleOnChange: "ttle 바꾸는 함수",
        timeOnChange: "12:54:00",
        deadlineOnChange: "2021-02-21",

        region: "서구",
        dov: "2021-02-30",
        nor: 24
    }
    const { title, titleOnChange, timeOnChange, deadlineOnChange, region, dov, nor } = helpMe
    return (
        <>
            <NoticeForm title={title} titleOnChange={titleOnChange} timeOnChange={deadlineOnChange} region={region}
                dov={dov} nor={nor}></NoticeForm>
        </>
    )
}

export default EditForm