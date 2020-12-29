import React from "react"
import styled from "styled-components"
//import ContentContainer from "../../containers/senior/ContentContainer"
import TopBar from "../../components/molecules/TobBar/index";
import SeniorContentContainer from "../../containers/senior/SeniorContentContainer";
//import SeniorContent from "./SeniorContent"
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
            <SeniorContentContainer></SeniorContentContainer>
        </ContentWrapper>
        </>
    )
}

export default Content