import React, {useState} from "react"
import styled from "styled-components"
import Content from "../../components/organisms/create/Content"

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ContentContainer = () => {
    
    return (
        <>
            <Container>
                <Content>
                </Content>
            </Container>
        </>
    )
}

export default ContentContainer