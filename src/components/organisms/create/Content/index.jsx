import React from "react"
import Button from "../../../atoms/Button"
import TextAreaBox from "../../../atoms/TextAreaBox"
import NoticeFormContainer from "../../../../containers/redux/pages/create/NoticeFormContainer"
import Content from "../../../../layout/Content/"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
const CreateContent = ({titleOnChange, timeOnChange, deadlineOnChange, uploadOnClick, contentOnChange}) => {
    return (
        <Content>
            <Row gutter={[5,5]}>
                <Col span={12}>
                    <Button value="게시글 작성 완료" onClick={uploadOnClick} block types={"primary"}/>
                </Col>
                <Col span={12}>
                    <NoticeFormContainer titleOnChange={titleOnChange} timeOnChange={timeOnChange} deadlineOnChange={deadlineOnChange}/>
                </Col>
                <Col span={12} style={{
                    height : "60vh"
                }}>
                    <TextAreaBox placeholder="내용을 입력해주세요" contentOnChange={contentOnChange}/>
                </Col>
            </Row>
        </Content>
    )
}

export default CreateContent