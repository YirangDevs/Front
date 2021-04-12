import React, {memo} from "react"
import styled from "styled-components"
import Header from "../../containers/redux/components/Header/index";
import ContentContainer from "../../containers/redux/pages/home/ContentContainer";
// import SideNav from "../../containers/pages/sidenav/ContentContainer"
import SideNav from "../../containers/redux/components/SideNav"
import Button from "../../components/atoms/Button";

const SideHide = styled.div`
    
`
const WholeWrapper = styled.div`
    width : 100%;
    overflow-x: hidden;

    display: flex;
`
const ContentWrapper = styled.div`
    height : 100%;
    position : relative;
`

const Home = () => (
    <>
    <WholeWrapper>
            <SideNav></SideNav>
        <ContentWrapper>
            <Header position={"absolute"}/>
            <ContentContainer></ContentContainer>
        </ContentWrapper>
    </WholeWrapper>
    
        
    </>
)

export default memo(Home)