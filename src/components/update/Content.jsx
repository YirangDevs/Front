import React, { useEffect } from 'react'
import ContentInput from './ContentInput';
import ContentText from '../../containers/update/ContentText';

import _ from "../../config/env"



const Content = (props) => {

    useEffect(() => {
        if (props.selectId) {
            console.log("UPDATE working");
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
            console.log(notice.title)
            props.SET_CONFIG({
                notice: {
                    Title: notice.title,
                    tContent: notice.content,
                    Nor: notice.nor,
                    Noa: notice.noa,
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