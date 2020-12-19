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
const Content = ({titleOnChange, regionOnChange, needsOnChange, dateOnChange, timeOnChange, deadlineOnChange, uploadOnClick}) => {
    return (
        <Container>
            <Button value="게시글 작성 완료" onClick={uploadOnClick} block/>
            <CreateContainer titleOnChange={titleOnChange} regionOnChange={regionOnChange} needsOnChange={needsOnChange} dateOnChange={dateOnChange} timeOnChange={timeOnChange} deadlineOnChange={deadlineOnChange}></CreateContainer>
            <TextAreaBox placeholder="내용을 입력해주세요"></TextAreaBox>
        </Container>
    )
}

export default Content