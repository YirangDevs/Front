/** 
 * @author : chaeeun
 * @Date : 2021-01-28 20:00:02 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-14 23:25:38
 */

import React from 'react'
import NoticeForm from '../../../molecules/NoticeForm'
import Button from "../../../atoms/Button"
import TextAreaBox from "../../../atoms/TextAreaBox"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"

//{title, region, nor, dov, tov, dod, titleOnChange, timeOnChange, deadlineOnChange}

const EditForm = ({ updateNotice, updateFunction, completeEdit }) => {
    const { id, title, region, nor, dov, tov, dod, content } = updateNotice;
    return (

        <>
            <Row gutter={[0, 0]}>
                <Col span={12}>
                    <NoticeForm title={title} region={region} nor={nor} dov={dov} tov={tov} dod={dod}
                        titleOnChange={updateFunction.title} timeOnChange={updateFunction.tov} deadlineOnChange={updateFunction.dod}></NoticeForm>
                </Col>
                <Col span={12} style={{
                    height: "20rem"
                }}>
                    <TextAreaBox placeholder="내용을 입력해주세요" value={content} contentOnChange={updateFunction.content} />
                </Col>
                <Row justify={"flex-end"} gutter={[20, 0]}>
                    <Col span={2}>
                        <Button value="게시글 수정 완료" block types={"primary"} onClick={() => completeEdit(id)} />
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default EditForm