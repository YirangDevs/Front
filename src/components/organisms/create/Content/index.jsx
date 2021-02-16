import React from "react"
import Button from "../../../atoms/Button"
import TextAreaBox from "../../../atoms/TextAreaBox"
import NoticeFormContainer from "../../../../containers/redux/pages/create/NoticeFormContainer"
import Content from "../../../../layout/Content/"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import NoticeForm from "../../../molecules/NoticeForm";

const CreateContent = ({ title, region, nor, date, time, titleOnChange, timeOnChange, deadlineOnChange, uploadOnClick, contentOnChange }) => {
    return (
        <Content>
            <Row gutter={[5, 5]}>
                <Col span={12}>
                    <Button value="게시글 작성 완료" onClick={uploadOnClick} block types={"primary"} />
                </Col>
                <Col span={12}>
                    <NoticeForm title={title} region={region} nor={nor} dov={date} tov={time} titleOnChange={titleOnChange} timeOnChange={timeOnChange} deadlineOnChange={deadlineOnChange}></NoticeForm>
                </Col>
                <Col span={12} style={{
                    height: "25rem"
                }}>
                    <TextAreaBox placeholder="내용을 입력해주세요" contentOnChange={contentOnChange} />
                </Col>
            </Row>
        </Content>
    )
}

export default CreateContent