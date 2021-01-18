import React from "react"
import styled from "styled-components"
import Row from "../../../layout/Grid/Row"
import Col from "../../../layout/Grid/Column"
import TextBox from "../../atoms/TextBox"
import SelectBox from "../../atoms/SelectBox"
import DateSelector from "../../atoms/DateSelector"
import TimeSelector from "../../atoms/TimeSelector"


const Text = styled.div`
    font-size: 1rem;
    color: #707070;
    
`


const regionoptions = ["지역선택", "수성구", "동구", "서구", "남구", "북구", "중구", "달서구"];

const NoticeForm = (props) => {

    return (
        <>
            <Row>
                <Col span={12} xl={1} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <Text>제목</Text>
                </Col>
                <Col span={12} xl={7.9} lg={10.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <TextBox theme="white" placeholder="제목을 입력하세요" onChange={props.titleOnChange} block/>
                </Col>
                <Col span={12} xl={1.1} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <Text>장소</Text>
                </Col>
                <Col span={12} xl={2} lg={4.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <SelectBox theme="white" size="large" defaultValue={props.region} options={regionoptions} disabled="disabled" ></SelectBox>
                </Col>
            
            
                <Col span={12} xl={1} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <Text>필요인원</Text>
                </Col>
                <Col span={12} xl={2} lg={4.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <TextBox theme="white" placeholder="필요인원 수를 입력하세요" value={props.nor} disabled="disabled" block/>
                </Col>
                <Col span={12} xl={0.8} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <Text>봉사날짜</Text>
                </Col>
                <Col span={12} xl={2} lg={2.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <DateSelector theme="white" defaultValue={props.dov} disabled="disabled"/>
                </Col>
                <Col span={12} xl={1.1} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <Text>시작시간</Text>
                </Col>
                <Col span={12} xl={2} lg={2.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <TimeSelector theme="white" size="default" onChange={props.timeOnChange}/>
                </Col>
                <Col span={12} xl={1.1} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <Text>신청마감</Text>
                </Col>
                <Col span={12} xl={2} lg={2.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse"
                }}>
                    <DateSelector theme="white" onChange={props.deadlineOnChange}/>
                </Col>
            </Row>
        </>
    )
}

export default NoticeForm