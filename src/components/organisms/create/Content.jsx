import React from "react"
import styled from "styled-components"
import Button from "../../atoms/Button/index"
import TextAreaBox from "../../atoms/TextAreaBox"
import CreateContainer from "../../../reduxContainer/CreateContainer"

const Container = styled.div`
    width: 90%;
    height: 60%;
    margin-top: 30px; 
    @media(max-width: 1524px){width: 95%;}
    @media(max-width: 1445px){width: 97%;}
`
const Content = ({titleOnChange, timeOnChange, deadlineOnChange, uploadOnClick, contentOnChange}) => {
    return (
        <Container>
            <Button value="게시글 작성 완료" onClick={uploadOnClick} block/>
            <CreateContainer titleOnChange={titleOnChange} timeOnChange={timeOnChange} deadlineOnChange={deadlineOnChange}></CreateContainer>
            <TextAreaBox placeholder="내용을 입력해주세요" contentOnChange={contentOnChange}></TextAreaBox>
        </Container>
    )
}

export default Content