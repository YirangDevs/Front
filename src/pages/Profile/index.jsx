/** 
 * @author : chaeeun
 * @Date : 2021-03-17 15:43:10 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-05-27 19:39:53
 */
import React from "react"
import styled from "styled-components"
import ContentContainer from "../../containers/redux/pages/profile/ContentContainer"
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

const Profile = () => {

    const [navOpen, setNavState] = useSideNav(false);

    return (
        <>
            <WholeWrapper>
                <SideNav navOpen={navOpen} setNavState={setNavState}>
                    <ContentWrapper>
                        <Header theme={"dark"} position={"static"} setNavState={setNavState} />
                        <ContentContainer />
                    </ContentWrapper>
                </SideNav>
            </WholeWrapper>


        </>
    )
}

export default Profile