/**
 * @author : chaeeun
 * @Date : 2020-12-21 16:50:25
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-01-28 20:07:38
 */

import React from "react"
import NoticeForm from "../../molecules/NoticeForm"
import TextAreaBox from "../../atoms/TextAreaBox"
import Row from "../../../layout/Grid/Row"
import Col from "../../../layout/Grid/Column"


const ReadForm = ({ updateFunction, selectNotice }) => {
    const { title, region, nor, dov, tov, dod, content } = selectNotice;

    return (

        <>
            <Row gutter={[0, 0]}>
                <Col span={12}>
                    <NoticeForm title={title} region={region} nor={nor} dov={dov} tov={tov} dod={dod} titleOnChange={updateFunction.title} timeOnChange={updateFunction.tov} deadlineOnChange={updateFunction.dod}></NoticeForm>
                </Col>
                <Col span={12} style={{
                    height: "50vh"
                }}>
                    <TextAreaBox placeholder="내용을 입력해주세요" value={content} contentOnChange={updateFunction.content} />
                </Col>
            </Row>
        </>
    )
}

export default ReadForm