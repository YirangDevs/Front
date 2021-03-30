/**
 * @author :  chaeeun
 * @date : 2021-03-14 02:40:15
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-30 20:46:13
 */

import React from 'react'
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Typo from "../../../atoms/Typography"
import { MdErrorOutline } from "react-icons/md";
import Button from "../../../atoms/Button"
import ReadNoticeForm from '../../../molecules/ReadNoticeForm';


const NoticeModal = ({ selectedNotice }) => {


    return (
        <>
            <Col span={12}>
                <ReadNoticeForm title={selectedNotice.title} region={selectedNotice.region} nor={selectedNotice.nor}
                    dov={selectedNotice.dov} tov={selectedNotice.tov} dod={selectedNotice.dod}>

                </ReadNoticeForm>
            </Col>
            <Col span={12} style={{
                padding: "1rem",
                minHeight: "15rem",
                backgroundColor: "#EFEFEF4D"
            }}>
                {selectedNotice.content}
            </Col>
        </>
    )
}

export default NoticeModal