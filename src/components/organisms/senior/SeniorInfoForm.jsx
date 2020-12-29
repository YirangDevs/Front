import React from "react"
import styled from "styled-components"
import Row from "../../../layout/Grid/Row/index"
import Col from "../../../layout/Grid/Column/index"
import TextBox from "../../atoms/TextBox/index"
import RadioBox from "../../atoms/RadioButton/index"
import SelectBox from "../../atoms/SelectBox"
import DateSelector from "../../atoms/DateSelector"
const FormWrapper = styled.div`
    border: 1px solid #ccd4e0;
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 4rem;
    background-color: #f1f3f6;
    //border: 1px solid red;
`
const genderoptions = ["남성", "여성"];
const typeoptions = ["노력봉사", "말벗봉사"];
const priorityoptions = ["우선순위", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const needsoptions = ["필요인원", "2", "4", "6"];
const regionoptions = ["수성구", "동구", "서구", "남구", "북구", "중구", "달서구"];

const SeniorInfoForm = ({
    nameOnChange,
    genderOnChange,
    typeOnChange,
    priorityOnChange,
    needsOnChange,
    dateOnChange,
    phoneOnChange,
    regionOnChange,
    addressOnChange,
    currentSenior,

    genderInput

}) => {
    console.log(currentSenior)
    
    return (
        <>
        <FormWrapper>
            <Row>
                <Col span={4}>
                    <Box>
                        <TextBox placeholder="이름 입력" onChange={nameOnChange} value={currentSenior.name} block/>
                    </Box>
                </Col>
                <Col span={3} rightborder>
                    <Box>
                        <RadioBox ref={genderInput} size="default" name="gender" defaultValue={currentSenior.sex} options={genderoptions} onClick={genderOnChange}/>
                    </Box>
                </Col>
                <Col span={5}>
                    <Box>
                    <RadioBox size="default" name="type" options={typeoptions} onClick={typeOnChange}/>
                    </Box>
                </Col>
            </Row>
            <Row border>
                <Col span={2}>
                    <Box>
                        <SelectBox options={priorityoptions} onChange={priorityOnChange} defaultValue={currentSenior.priority} block/>
                    </Box>
                </Col>
                <Col span={2}>
                    <Box>
                        <SelectBox options={needsoptions} onChange={needsOnChange} defaultValue={currentSenior.numsOfRequiredVolunteers} block/>
                    </Box>
                </Col>
                <Col span={4}>
                    <Box>
                        <DateSelector onChange={dateOnChange} defaultValue={currentSenior.date} block/>
                    </Box>
                </Col>
                <Col span={4}>
                    <Box>
                        <TextBox size="default" placeholder="-를 제외하고 입력" onChange={phoneOnChange} value={currentSenior.phone} block/> 
                    </Box>
                </Col>
            </Row>
            <Row>
                <Col span={2} rightborder>
                    <Box>
                        <SelectBox options={regionoptions} onChange={regionOnChange} defaultValue={currentSenior.region} block/>
                    </Box>
                </Col>
                <Col span={10}>
                    <Box>
                        <TextBox placeholder="ㅇㅇ구를 제외한 상세주소 입력" onChange={addressOnChange} value={currentSenior.address} block/> 
                    </Box>
                </Col>
            </Row>
            </FormWrapper>
        </>
    )
}

export default SeniorInfoForm