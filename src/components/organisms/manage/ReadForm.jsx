/**
 * @Author : chaeeun
 * @Date : 2020-12-21 16:50:25
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-01-27 05:53:47
 */

import React from "react"
import NoticeForm from "../../molecules/NoticeForm"


const ReadForm = ({ updateFunction, selectNotice }) => {
    const { title, region, nor, dov, tov, dod } = selectNotice;

    return (

        <>
            <NoticeForm title={title} region={region} nor={nor} dov={dov} tov={tov} dod={dod} titleOnChange={updateFunction.title} timeOnChange={updateFunction.tov} deadlineOnChange={updateFunction.dod}></NoticeForm>
        </>
    )
}

export default ReadForm