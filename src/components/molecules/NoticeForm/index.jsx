import React from "react"
import Row from "../../../layout/Grid/Row"
import Col from "../../../layout/Grid/Column"
import TextBox from "../../atoms/TextBox/index"
import DateSelector from "../../atoms/DateSelector/index"
import TimeSelector from "../../atoms/TimeSelector/index"
import styled from "styled-components"
import { MdModeEdit } from "react-icons/md";

const Text = styled.div`

    color: #707070;
     
`


const NoticeForm = ({ title, region, nor, dov, tov, dod, titleOnChange, timeOnChange, deadlineOnChange, isShow }) => {

    const setTov = (tov.length === 8) ? tov.slice(0, 5) : tov



    return (
        <>
            <Row>
                <Col xl={1.5} lg={1.5} sm={4} xs={4} span={12} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>제목</Text>
                </Col>
                <Col xl={10.5} lg={10.5} sm={8} xs={8} span={12} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <TextBox autofocus={isShow} theme="white" size={"small"} value={title}
                        onChange={titleOnChange} placeholder="제목을 입력하세요" block />
                    <MdModeEdit ></MdModeEdit>

                </Col>
                <Col xl={1.5} lg={1.5} sm={4} xs={4} span={12} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>장소</Text>
                </Col>
                <Col xl={10.5} lg={10.5} sm={8} xs={8} span={12} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <TextBox theme="white" size={"small"} disabled="disabled" value={region} block />
                </Col>


                <Col xl={1.5} lg={1.5} sm={4} xs={4} span={12} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>필요인원</Text>
                </Col>
                <Col xl={4.5} lg={4.5} sm={8} xs={8} span={12} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <TextBox theme="white" placeholder="필요인원 수를 입력하세요" value={String(nor)} disabled="disabled" block />
                </Col>
                <Col xl={1.5} lg={1.5} md={4} sm={4} xs={4} span={12} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>봉사날짜</Text>
                </Col>
                <Col xl={4.5} lg={4.5} md={8} sm={8} xs={8} span={12} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <DateSelector theme="white" defaultValue={dov} disabled="disabled" size={"small"} />
                </Col>
                <Col xl={1.5} lg={1.5} md={4} sm={4} xs={4} span={12} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>시작시간</Text>
                </Col>
                <Col xl={4.5} lg={4.5} md={8} sm={8} xs={8} span={12} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <TimeSelector theme="white" defaultValue={setTov} size={"small"} onChange={timeOnChange} />
                </Col>
                <Col xl={1.5} lg={1.5} md={4} sm={4} xs={4} span={1} justify={"center"} align={"center"} style={{
                    height: "3rem",
                    border: "1px solid #ccd4e0",
                    borderCollapse: "collapse",
                }}>
                    <Text>신청마감</Text>
                </Col>
                <Col xl={4.5} lg={4.5} md={8} sm={8} xs={8} span={1} justify={"center"} align={"center"} style={{
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