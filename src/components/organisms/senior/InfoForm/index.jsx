import React from "react"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import TextBox from "../../../atoms/TextBox"
import RadioBox from "../../../atoms/RadioButton"
import SelectBox from "../../../atoms/SelectBox"
import DateSelector from "../../../atoms/DateSelector"

const genderoptions = ["남성", "여성"];
const typeoptions = ["노력봉사", "말벗봉사"];
const priorityoptions = ["우선순위", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const needsoptions = ["필요인원", "2", "4", "6"];
const regionoptions = ["수성구", "동구", "서구", "남구", "북구", "중구", "달서구"];

const InfoForm = ({
    nameOnChange,
    genderOnChange,
    typeOnChange,
    priorityOnChange,
    needsOnChange,
    dateOnChange,
    phoneOnChange,
    regionOnChange,
    addressOnChange,
    currentSenior

}, genderRef) => {

    return (
        <>
            <Row style={{
                border: "1px solid #ccd4e0"
            }}>
                <Col span={4} justify={"center"} align={"center"} style={{
                    height: "4rem",
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccd4e0",
                    padding: "0.5rem"
                }}>

                    <TextBox placeholder="이름 입력" onChange={nameOnChange} value={currentSenior.name} border radius={'5px'} block />

                </Col>
                <Col span={3} rightborder justify={"center"} align={"center"} style={{
                    height: "4rem",
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccd4e0"

                }}>

                    <RadioBox ref={genderRef} size="default" name="gender" defaultValue={currentSenior.sex} options={genderoptions} onClick={genderOnChange} />

                </Col>
                <Col span={5} justify={"center"} align={"center"} style={{
                    height: "4rem",
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccd4e0"
                }}>

                    <RadioBox size="default" name="type" options={typeoptions} onClick={typeOnChange} />

                </Col>
                <Col span={2.5} justify={"center"} align={"center"} style={{
                    height: "4rem",
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccd4e0"
                }}>

                    <SelectBox options={priorityoptions} onChange={priorityOnChange} defaultValue={currentSenior.priority} border block />

                </Col>
                <Col span={2.5} justify={"center"} align={"center"} style={{
                    height: "4rem",
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccd4e0"
                }}>

                    <SelectBox options={needsoptions} onChange={needsOnChange} defaultValue={currentSenior.numsOfRequiredVolunteers} border block />

                </Col>
                <Col span={7} justify={"center"} align={"center"} style={{
                    height: "4rem",
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccd4e0",
                    padding: "0.5rem",
                    boxSizing : "border-box"
                }}>

                    <DateSelector onChange={dateOnChange} defaultValue={currentSenior.date} border block />

                </Col>
                <Col span={3} justify={"center"} align={"center"} style={{
                    height: "4rem",
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccd4e0",
                    padding: "0.5rem",
                    boxSizing : "border-box"
                }}>

                    <TextBox size="default" placeholder="-를 제외하고 입력" onChange={phoneOnChange} value={currentSenior.phone} border radius={'5px'} block />

                </Col>
                <Col span={2} justify={"center"} align={"center"} style={{
                    height: "4rem",
                    borderRight: "1px solid #ccd4e0",
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccd4e0"
                }}>

                    <SelectBox options={regionoptions} onChange={regionOnChange} defaultValue={currentSenior.region} border block />

                </Col>
                <Col span={7} justify={"center"} align={"center"} style={{
                    height: "4rem",
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ccd4e0"
                }}>

                    <TextBox placeholder="ㅇㅇ구를 제외한 상세주소 입력" onChange={addressOnChange} value={currentSenior.address} border radius={'5px'} block />
                    
                </Col>
            </Row>

            
        </>
    )
}

export default InfoForm