import React, { useEffect } from 'react'
import ContentInput from './ContentInput';
import ContentText from '../../containers/read/ContentText';
import fetchData from "../../business/service/fetch_notice"



const Content = (props) => {

    const setSelectData = (notice) => {
        if (notice) {
            console.log(notice)
            props.SET_SELECT({
                select: {
                    selectTitle: notice.title,
                    selectContent: notice.content,
                    selectNor: notice.nor,
                    selectNoa: notice.noa,
                    selectDov: notice.dov,
                    selectTov: notice.tov,
                    selectDod: notice.dod,
                    selectRegion: notice.region

                }
            })
        }
    }
    useEffect(() => {
        fetchData.getNotice(props.selectId)
            .then((response) => {
                setSelectData(response);
            })
    })

    return (
        <>
            <div className="contents container__contents-read">
                <ContentInput></ContentInput>
                <ContentText></ContentText>
            </div>

        </>
    )
}

export default Content;