import React, { useEffect } from 'react'
import ContentInput from './ContentInput';
import ContentText from '../../containers/update/ContentText';
import fetchData from "../../business/service/fetch_notice"


const Content = (props) => {

    useEffect(() => {
        if (props.selectId) {
            fetchData.getNotice(props.selectId)
                .then((response) => {
                    setData(response);
                })
        } else {
            console.log("getNotice ERROR")
        }
    })

    const setData = (notice) => {
        console.log(notice)
        if (notice) {
            props.SET_CONFIG({
                notice: {
                    Title: notice.title,
                    Content: notice.content,
                    Nor: notice.nor,
                    Dov: notice.dov,
                    Tov: notice.tov,
                    Dod: notice.dod,
                    Region: notice.region

                }
            })
        }
    }

    return (
        <>
            <div className="contents container__contents">
                <ContentInput></ContentInput>
                <ContentText></ContentText>
            </div>

        </>
    )
}

export default Content;