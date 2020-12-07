import React from "react"
import styled from "styled-components"
import TextBox from "../../atoms/TextBox/index"
import RadioButton from "../../atoms/RadioButton/index"
import SelectBox from "../../atoms/SelectBox/index"
import DateSelector from "../../atoms/DateSelector/index"

const VolunteerUpdateFormWrapper = styled.div`
    display: grid;
    width: 90%;
    background-color: #f1f3f6;
    

`

const SelectBoxOptions1 = ["우선순위","1","2","3","4","5","6","7","8","9","10"]
const SelectBoxOptions2 = ["전체","수성구","중구","동구","서구","남구","북구","달서구"]

const RadioGroup = styled.div`

`

const Group = styled.div`
    height: 4rem;
    border: 1px #ccd4e0 solid;
    justify-content: center;
    align-items: center;
    display: flex;
    &:nth-child(1){
        grid-column: auto / span 2;
    }
    &:nth-child(3){
        grid-column: auto / span 3;
        display: flex;
        justify-content: space-around;
    }   
    &:nth-child(5){
        grid-column: auto / span 2;
    }
`


const VolunteerUpdateForm = ({nameOnChange, genderOnChange, typeOnChange, priorityOnChange, dateOnChange, phoneOnChange, regionOnChange, addressOnChange, currentSenior}) => {
    return (
        <>
        <VolunteerUpdateFormWrapper>
            <Group>
                <TextBox width="50%" height="2.2rem" onChange={nameOnChange} value={currentSenior.name} placeholder="이름 입력"></TextBox>
                <RadioGroup>

                    <RadioButton name="gender" onClick={genderOnChange} value="남" defaultValue={currentSenior.sex==="남"} text="남성"></RadioButton>

                    <RadioButton name="gender" onClick={genderOnChange} value="여" defaultValue={currentSenior.sex==="여"} text="여성"></RadioButton>
                </RadioGroup>

            </Group>
            <Group>
                <RadioGroup>
                    <RadioButton onClick={typeOnChange} name="work" value="노력봉사" defaultValue={currentSenior.type==="노력봉사"} text="노력봉사"></RadioButton>
                    <RadioButton onClick={typeOnChange} name="work" value="말벗봉사" defaultValue={currentSenior.type==="말벗봉사"} text="말벗봉사"></RadioButton>
                </RadioGroup>
            </Group>
            <Group>
                <SelectBox width="20%" height="2.2rem" options={SelectBoxOptions1} defaultValue={currentSenior.priority} onChange={priorityOnChange}></SelectBox>
                <DateSelector width="35%" height="2.2rem" onChange={dateOnChange} defaultValue={currentSenior.date}></DateSelector>
                <TextBox width="35%" height="2.2rem" onChange={phoneOnChange} value={currentSenior.phone} placeholder="- 를 제외하고 입력"></TextBox>
            </Group>
            <Group>
                <SelectBox width="95%" height="2.3rem" onChange={regionOnChange} defaultValue={currentSenior.region} options = {SelectBoxOptions2}></SelectBox>
            </Group>
            <Group>
                <TextBox width="90%" height="2.3rem" onChange={addressOnChange} value={currentSenior.address} placeholder="상세 주소를 입력해주세요."></TextBox>
            </Group>

        </VolunteerUpdateFormWrapper>
        </>
    )
}

export default VolunteerUpdateForm