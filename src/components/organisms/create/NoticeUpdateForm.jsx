import React from "react"
import styled from "styled-components"
import CreateTextBox from "../../atoms/CreateTextBox"
import TimeBox from "../../atoms/TimeBox"
import DateBox from "../../atoms/DateBox"

const NoticeUpdateFormWrapper = styled.div`
    width: 100%;
    font-size: 16px;
    border: 1px solid #ccd4e0;
`

const GroupFirst = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ccd4e0
`
const GroupSecond = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
`
const InputText = styled.div`
    width: ${props=>props.width};
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ccd4e0;
    border-left: 1px solid #ccd4e0;
`

const NoticeUpdateForm = () => {
    return (
        <>
        <NoticeUpdateFormWrapper>
            <GroupFirst>
                <InputText width="8%">제목</InputText>
                <CreateTextBox width="74%" placeholder="제목을 입력하세요."></CreateTextBox>
                <InputText width="8%">장소</InputText>
                <CreateTextBox width="10%"></CreateTextBox>
            </GroupFirst>
            <GroupSecond>
                <InputText width="12.5%">필요 인원 수</InputText>
                <CreateTextBox width="12.5%"></CreateTextBox>
                <InputText width="12.5%">봉사 날짜</InputText>
                <CreateTextBox width="12.5%"></CreateTextBox>
                <InputText width="12.5%">봉사 시작 시간</InputText>
                <TimeBox width="12.5%"></TimeBox>
                <InputText width="12.5%">신청 마감 날짜</InputText>
                <DateBox width="12.5%"></DateBox>
            </GroupSecond>
        </NoticeUpdateFormWrapper>
        </>
    )
}

export default NoticeUpdateForm