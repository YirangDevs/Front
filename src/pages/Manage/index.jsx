import React from "react"
import styled from "styled-components"
import ContentContainer from "../../containers/pages/manage/ContentContainer"
import Header from "../../containers/redux/components/Header";
import SideNav from "../../containers/redux/components/SideNav";
import useSideNav from "../../hook/useSideNav";

const WholeWrapper = styled.div`
    width : 100vw;
    display : -webkit-box;
    display : -moz-box;
    overflow-x: hidden;
`
const ContentWrapper = styled.div`
    width : 100%;

`

const Manages = () => {

    const [navOpen, setNavState] = useSideNav(false);

    return (
        <>
        <WholeWrapper>
            <SideNav navOpen={navOpen} setNavState={setNavState}>
                <ContentWrapper>
                    <Header theme={"dark"} position={"static"} setNavState={setNavState}/>
                    <ContentContainer />
                </ContentWrapper>
               
            </SideNav>
        </WholeWrapper>

        </>
    )
}

export default Manages