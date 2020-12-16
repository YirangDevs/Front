import React from "react"
import styled from "styled-components"
//import ContentContainer from "../../containers/senior/ContentContainer"
import TopBar from "../../components/molecules/TobBar/index";
import SeniorContentContainer from "../../containers/senior/SeniorContentContainer";
//import SeniorContent from "./SeniorContent"
const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Content = ({posts}) => {
    console.log({posts});
    return (
        <>
        <TopBar />
        <ContentWrapper>
            {/* <SeniorContent posts={posts}></SeniorContent> */}
            <SeniorContentContainer></SeniorContentContainer>
        </ContentWrapper>
        </>
    )
}

export default Content