import React, {memo} from "react"
import styled from "styled-components"
import Header from "../../containers/redux/components/Header/index";
import ContentContainer from "../../containers/redux/pages/home/ContentContainer";
import SideNav from "../../containers/redux/components/SideNav"
import useSideNav from "../../hook/useSideNav";


const WholeWrapper = styled.div`
    width : 100vw;
    display : -webkit-box;
    display : -moz-box;
    overflow-x: hidden;
`
const ContentWrapper = styled.div`
    height : 100%;
    width : 100%;

`

const Home = () =>{

    const [navOpen, setNavState] = useSideNav(false);
    
    
    return (
        <>
        <WholeWrapper>
                <SideNav navOpen={navOpen} setNavState={setNavState}>
                    <ContentWrapper>
                        <Header position={"absolute"} setNavState={setNavState}/>
                        <ContentContainer></ContentContainer>
                    </ContentWrapper>
                </SideNav>
        </WholeWrapper>
        
            
        </>
    )
}

export default memo(Home)