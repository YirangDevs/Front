/** 
 * @author : chaeeun
 * @Date : 2021-03-17 15:43:10 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-22 19:45:53
 */
import React from "react"
import styled from "styled-components"
import ContentContainer from "../../containers/redux/pages/profile/ContentContainer"
import Header from "../../containers/redux/components/Header";
import SideNav from "../../containers/redux/components/SideNav";
import useSideNav from "../../hook/useSideNav"


const WholeWrapper = styled.div`
    width : 100wv;;
    display: fixed;
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
                    <Header theme={"dark"} position={"static"} setNavState={setNavState}/>
                    <ContentContainer />
                </ContentWrapper>
            </SideNav>
        </WholeWrapper>
            

        </>
    )
}

export default Profile