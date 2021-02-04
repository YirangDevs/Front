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
    margin-top: 10px;
    border-radius: 5px;
`
const Box = styled.div`
    height: 3rem;
    width: 100%;
    border: 1px solid #ccd4e0;
    border-collapse: seperate;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 992px){
        ${props => (props.title) ? `background-color: #f1f3f6;` : null}
    }   
    
`
const Text = styled.div`
    font-size: 1rem;
    color: #707070;
    
`


const regionoptions = ["지역선택", "수성구", "동구", "서구", "남구", "북구", "중구", "달서구"];

const NoticeUpdateForm = (props) => {

    console.log(props.dov)
    return (
        <>
            <NoticeUpdateFormWrapper>
                <Row>
                    <Col span={12} xl={1} lg={1.5}>
                        <Box title><Text>제목</Text></Box>
                    </Col>
                    <Col span={12} xl={7.9} lg={10.5}>
                        <Box><TextBox theme="white" placeholder="제목을 입력하세요" onChange={props.titleOnChange} block /></Box>
                    </Col>
                    <Col span={12} xl={1.1} lg={1.5}>
                        <Box title><Text>장소</Text></Box>
                    </Col>
                    <Col span={12} xl={2} lg={4.5}>
                        <Box><SelectBox theme="white" size="large" defaultValue={props.region} options={regionoptions} disabled="disabled" ></SelectBox></Box>
                    </Col>


                    <Col span={12} xl={1} lg={1.5}>
                        <Box title><Text>필요인원</Text></Box>
                    </Col>
                    <Col span={12} xl={2} lg={4.5}>
                        <Box><TextBox theme="white" placeholder="필요인원 수를 입력하세요" value={props.nor} disabled="disabled" block /></Box>
                    </Col>
                    <Col span={12} xl={0.8} lg={1.5}>
                        <Box title><Text>봉사날짜</Text></Box>
                    </Col>
                    <Col span={12} xl={2} lg={2.5}>
                        <Box><TextBox theme="white" value={props.dov} disabled="disabled" /></Box>
                    </Col>
                    <Col span={12} xl={1.1} lg={1.5}>
                        <Box title><Text>시작시간</Text></Box>
                    </Col>
                    <Col span={12} xl={2} lg={2.5}>
                        <Box><TimeSelector theme="white" size="default" onChange={props.timeOnChange} /></Box>
                    </Col>
                    <Col span={12} xl={1.1} lg={1.5}>
                        <Box title><Text>신청마감</Text></Box>
                    </Col>
                    <Col span={12} xl={2} lg={2.5}>
                        <Box><DateSelector theme="white" onChange={props.deadlineOnChange} /></Box>
                    </Col>
                </Row>
            </NoticeUpdateFormWrapper>
        </>
    )
}

export default NoticeUpdateForm