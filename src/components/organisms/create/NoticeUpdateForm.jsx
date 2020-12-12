import React from "react"
import styled from "styled-components"
import Row from "../../../layout/Grid/Row/index"
import Col from "../../../layout/Grid/Column/index"
import TextBox from "../../atoms/TextBox"
import SelectBox from "../../atoms/SelectBox"
import DateSelector from "../../atoms/DateSelector"
import TimeSelector from "../../atoms/TimeSelector"

const NoticeUpdateFormWrapper = styled.div`
    width: 100%;
    font-size: 16px;
    border: 1px solid #ccd4e0;
    margin-top: 10px;
    border-radius: 5px;
`
const Box = styled.div`
    height: 3rem;
    border: 1px solid #ccd4e0;
    border-collapse: seperate;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Text = styled.div`
    font-size: 1rem;
    color: #707070;
`


const regionoptions = ["수성구", "동구", "서구", "남구", "북구", "중구", "달서구"];

const NoticeUpdateForm = () => {
    return (
        <>
        <NoticeUpdateFormWrapper>
            <Row>
                <Col span={1}>
                    <Box><Text>제목</Text></Box>
                </Col>
                <Col span={8}>
                    <Box><TextBox theme="white" placeholder="제목을 입력하세요" block/></Box>
                </Col>
                <Col span={1.5}>
                    <Box><Text>장소</Text></Box>
                </Col>
                <Col span={1.5}>
                    <Box><SelectBox theme="white" size="large" options={regionoptions}></SelectBox></Box>
                </Col>
            </Row>
            <Row>
                <Col span={1}>
                    <Box><Text>필요 인원 수</Text></Box>
                </Col>
                <Col span={2}>
                    <Box><TextBox theme="white" size="default" placeholder="필요인원 수를 입력하세요"/></Box>
                </Col>
                <Col span={1}>
                    <Box><Text>봉사 날짜</Text></Box>
                </Col>
                <Col span={2}>
                    <Box><DateSelector theme="white" size="large"/></Box>
                </Col>
                <Col span={1}>
                    <Box><Text>봉사 시작 시간</Text></Box>
                </Col>
                <Col span={2}>
                    <Box><TimeSelector theme="white" size="large"/></Box>
                </Col>
                <Col span={1}>
                    <Box><Text>신청 마감 날짜</Text></Box>
                </Col>
                <Col span={2}>
                    <Box><DateSelector theme="white" size="large"/></Box>
                </Col>
            </Row>
        </NoticeUpdateFormWrapper>
        </>
    )
}

export default NoticeUpdateForm