import React, { useEffect } from 'react'
import ContentInput from './ContentInput';
import ContentText from '../../containers/read/ContentText';

import _ from "../../config/env"


const Content = (props) => {

    const setSelectData = (notice) => {
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
    useEffect(() => {
        new Promise(async (resolve, reject) => {
            let file = await fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/" + Number(props.selectId), {
                method: 'GET',

            }).then((res) => res.json());
            if (file) {
                resolve(file);
                console.log(file);
            } else reject(new Error('User non exist'));
        }).then((resolve) => {
            console.log(resolve);
            setSelectData(resolve)
        });
        // 데이터는 response.data 안에 들어있습니다.
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