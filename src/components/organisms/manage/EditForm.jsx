import { number } from 'prop-types';
import React, { useEffect } from 'react'
import NoticeForm from '../../molecules/NoticeForm/index'


//{title, region, nor, dov, tov, dod, titleOnChange, timeOnChange, deadlineOnChange}

const EditForm = ({ updateNotice, updateFunction }) => {
    const { title, region, nor, dov, tov, dod } = updateNotice;

    return (

        <>
            <NoticeForm title={title} region={region} nor={nor} dov={dov} tov={tov} dod={dod} titleOnChange={updateFunction.title} timeOnChange={updateFunction.tov} deadlineOnChange={updateFunction.dod}></NoticeForm>
        </>
    )
}

export default EditForm