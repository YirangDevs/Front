import React, {memo} from "react"
import styled from "styled-components"
import ContentContainer from "../../containers/pages/match/ContentContainer"
import Header from "../../containers/redux/components/Header";
import SideNav from "../../containers/redux/components/SideNav";
import useSideNav from "../../hook/useSideNav"

const WholeWrapper = styled.div`
    width : 100%;
    position : relative;
    display : -webkit-box;
    display : -moz-box;
    overflow-x: hidden;
`
const ContentWrapper = styled.div`
    height : 100vh;
    position : relative;
    
`

const Match = () => {

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

export default memo(Match)