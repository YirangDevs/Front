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

const SeniorInfoForm = () => {
    return (
        <>
        <FormWrapper>
            <Row>
                <Col span={4}>
                    <Box>
                        <TextBox size="default" placeholder="이름 입력" />
                    </Box>
                </Col>
                <Col span={4} rightborder>
                    <Box>
                        <RadioBox size="large" name="gender" options={genderoptions}/>
                    </Box>
                </Col>
                <Col span={4}>
                    <Box>
                    <RadioBox size="large" name="type" options={typeoptions}/>
                    </Box>
                </Col>
            </Row>
            <Row border>
                <Col span={2}>
                    <Box>
                        <SelectBox size="default" options={priorityoptions}/>
                    </Box>
                </Col>
                <Col span={2}>
                    <Box>
                        <SelectBox size="default" options={needsoptions}/>
                    </Box>
                </Col>
                <Col span={4}>
                    <Box>
                        <DateSelector size="default" defaultValue="2020-12-01"></DateSelector>
                    </Box>
                </Col>
                <Col span={4}>
                    <Box>
                        <TextBox size="default" placeholder="-를 제외하고 입력" /> 
                    </Box>
                </Col>
            </Row>
            <Row>
                <Col span={2} rightborder>
                    <Box>
                        <SelectBox size="default" options={regionoptions}></SelectBox>
                    </Box>
                </Col>
                <Col span={10}>
                    <Box>
                        <TextBox size="default" placeholder="ㅇㅇ구를 제외한 상세주소 입력" block/> 
                    </Box>
                </Col>
            </Row>
            </FormWrapper>
        </>
    )
}

export default SeniorInfoForm