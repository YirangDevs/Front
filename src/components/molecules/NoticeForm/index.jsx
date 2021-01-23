import React from "react"
import Row from "../../../layout/Grid/Row"
import Col from "../../../layout/Grid/Column"
import TextBox from "../../atoms/TextBox/index"
import SelectBox from "../../atoms/SelectBox/index"
import DateSelector from "../../atoms/DateSelector/index"
import TimeSelector from "../../atoms/TimeSelector/index"
import styled from "styled-components"



const NoticeFormWrapper = styled.div`
    margin-top: 10px;
    border-radius: 5px;
`
const Box = styled.div`
    height: 3rem;
    border: 1px solid #ccd4e0;
    border-collapse: collapse;  
    box-sizing : border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size : small;
    @media screen and (max-width: 992px){
        ${props => (props.title) ? `background-color: #f1f3f6;` : null}
    }   
    
`
const Text = styled.div`

    color: #707070;
    
`


const NoticeForm = (props) => {

    return (
        <>
            <NoticeFormWrapper>
                <Row>
                    <Col span={12} xl={1} lg={1.5}>
                        <Box title><Text>제목</Text></Box>
                    </Col>
                    <Col span={12} xl={7.9} lg={10.5}>
                        <Box><TextBox theme="white" size={"small"} value={props.title}
                            onChange={props.titleOnChange} placeholder="제목을 입력하세요" block /></Box>
                    </Col>
                    <Col span={12} xl={1.1} lg={1.5}>
                        <Box title><Text>장소</Text></Box>
                    </Col>
                    <Col span={12} xl={2} lg={4.5}>
                        <Box><TextBox theme="white" size={"small"} disabled="disabled" value={props.region} block /></Box>
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
                        <Box><DateSelector theme="white" disabled="disabled" size={"small"} /></Box>
                    </Col>
                    <Col span={12} xl={1.1} lg={1.5}>
                        <Box title><Text>시작시간</Text></Box>
                    </Col>
                    <Col span={12} xl={2} lg={2.5}>
                        <Box><TimeSelector theme="white" size={"small"} /></Box>
                    </Col>
                    <Col span={12} xl={1.1} lg={1.5}>
                        <Box title><Text>신청마감</Text></Box>
                    </Col>
                    <Col span={12} xl={2} lg={2.5}>
                        <Box><DateSelector theme="white" size={"small"} /></Box>
                    </Col>
                </Row>
            </NoticeFormWrapper>
        </>
    )

}

export default NoticeForm