import React, { useEffect } from 'react'
import ContentInput from './ContentInput';
import ContentText from '../../containers/read/ContentText';

import _ from "../../config/env"


const Content = (props) => {

    useEffect(() => {
        if (props.selectId) {
            console.log("working");
            console.log(props.selectId);
            new Promise(async (resolve, reject) => {
                let selectNotice = await fetch(_.HOST_URL + ":8080/v1/apis/manage/notices/" + Number(props.selectId), {
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("YAT"),
                    }
                }).then((res) => res.json());
                if (selectNotice) {
                    console.log("200 ok")
                    setData(selectNotice);
                }
            })
        } else {
            console.log("No selected")
        }
    }, [])


    const setData = (notice) => {
        console.log(notice)
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