import React from "react"
import styled from "styled-components"
import Button from "../../atoms/Button/index"
import NoticeUpdateForm from "./NoticeUpdateForm"

const Container = styled.div`
    width: 92%;
    height: 10%;
`
const Content = () => {
    return (
        <Container>
            <Button value="게시글 작성 완료" block/>
            <NoticeUpdateForm></NoticeUpdateForm>
        </Container>
    )
}

export default Content