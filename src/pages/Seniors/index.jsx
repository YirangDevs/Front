import React from "react"
import styled from "styled-components"
import Header from "../../containers/redux/components/Header";
import ContentContainer from "../../containers/pages/senior/ContentContainer";
import SideNav from "../../containers/redux/components/SideNav";
import useSideNav from "../../hook/useSideNav";

const WholeWrapper = styled.div`
    width : 100vw;
    display : -webkit-box;
    display : -moz-box;
    overflow-x: hidden;
`

const ContentWrapper = styled.div`
    display: relative;
    justify-content: center;
`
const Content = () => {

    const [navOpen, setNavState] = useSideNav(false);

    return (
        <>
        <WholeWrapper>
            <SideNav navOpen={navOpen} setNavState={setNavState}>
                <ContentWrapper>
                    <Header theme={"dark"} setNavState={setNavState}/>
                    <ContentContainer></ContentContainer>
                </ContentWrapper>
            </SideNav>
        </WholeWrapper>
        </>
    )
}

export default Content