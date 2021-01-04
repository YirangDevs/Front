import React from "react"
import styled from "styled-components"
import TopBar from "../../components/molecules/TopBar/index";
import ContentContainer from "../../containers/senior/ContentContainer";
const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`
const Content = () => {
    return (
        <>
            <TopBar />
            <ContentWrapper>
                <ContentContainer></ContentContainer>
            </ContentWrapper>
        </>
    )
}

export default Content