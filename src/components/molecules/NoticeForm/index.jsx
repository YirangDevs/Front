import React from "react"
import Row from "../../../layout/Grid/Row"
import Col from "../../../layout/Grid/Column"
import TextBox from "../../atoms/TextBox/index"
import DateSelector from "../../atoms/DateSelector/index"
import TimeSelector from "../../atoms/TimeSelector/index"
import styled from "styled-components"


const Text = styled.div`

    color: #707070;
    
`


const NoticeForm = ({ title, region, nor, dov, tov, dod, titleOnChange, timeOnChange, deadlineOnChange }) => {

    return (
        <>
            <Row>
                <Col span={12} xl={1} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>제목</Text>
                </Col>
                <Col span={12} xl={7.9} lg={10.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <TextBox theme="white" size={"small"} value={title}
                        onChange={titleOnChange} placeholder="제목을 입력하세요" block />
                </Col>
                <Col span={12} xl={1.1} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>장소</Text>
                </Col>
                <Col span={12} xl={2} lg={4.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <TextBox theme="white" size={"small"} disabled="disabled" value={region} block />
                </Col>


                <Col span={12} xl={1} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>필요인원</Text>
                </Col>
                <Col span={12} xl={2} lg={4.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <TextBox theme="white" placeholder="필요인원 수를 입력하세요" value={String(nor)} disabled="disabled" block />
                </Col>
                <Col span={12} xl={0.8} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>봉사날짜</Text>
                </Col>
                <Col span={12} xl={2} lg={2.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <DateSelector theme="white" defaultValue={dov} disabled="disabled" size={"small"} />
                </Col>
                <Col span={12} xl={1.1} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>시작시간</Text>
                </Col>
                <Col span={12} xl={2} lg={2.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <TimeSelector theme="white" defaultValue={tov} size={"small"} onChange={timeOnChange} />
                </Col>
                <Col span={12} xl={1.1} lg={1.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>신청마감</Text>
                </Col>
                <Col span={12} xl={2} lg={2.5} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <DateSelector theme="white" size={"small"} defaultValue={dod} onChange={deadlineOnChange} />
                </Col>
            </Row>
        </>
    )

}


NoticeForm.defaultProps = {
    title: "",
    region: "",
    nor: "",
    dov: "",
    tov: "",
    dod: "",

};

export default NoticeForm