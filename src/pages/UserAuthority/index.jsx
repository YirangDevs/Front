import React from "react"
import styled from "styled-components"
import Header from "../../containers/redux/components/Header/";
import ContentContainer from "../../containers/pages/userauthority/ContentContainer"
import SideNav from "../../containers/redux/components/SideNav";
import useSideNav from "../../hook/useSideNav";

const WholeWrapper = styled.div`
    width : 100%;
    display : -webkit-box;
    display : -moz-box;
    overflow-x: hidden;
    position : relative;
    border: 1px solid black;
`

const ContentWrapper = styled.div`
    width: 100%;
    position: relative;
    justify-content: center;
`

const UserAuthority = () => {
    const [navOpen, setNavState] = useSideNav(false);
    return (
        <>
            <WholeWrapper>
                <SideNav navOpen={navOpen} setNavState={setNavState}>
                    <ContentWrapper>
                        <Header theme={"dark"} setNavState={setNavState}/>
                        <ContentContainer/>
                    </ContentWrapper>
                </SideNav>
            </WholeWrapper>
        </>
    )
}

export default UserAuthority