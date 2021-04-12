import React from "react"
import styled from "styled-components"
import Img from "../../atoms/Image"
import Button from "../../atoms/Button"
import SideNavIcon from "../SideNavIcon"


const SideNavStyle = styled.div`
    background-color: #f7f7f7;
    height: 100vh;
    
    ${props=>props.navOpen?`
      width: 518px;display: block;
    `:`display:none;`}
  /*
    @media(max-width: 1200px){
        margin-top : 64px;
      }
    
      @media(max-width: 768px){
        margin-top : 56px;
      }
    
      @media(max-width: 576px){
        margin-top : 40px;
      }
      */
`
const NavHeader = styled.div`
      height: 72px;
      background-color: #00a804;
`
const NavContent = styled.div`
      height: 100%;
      display: flex;
      flex-direction : column;
      margin-top: 30px;
`
const ContentWrapper = styled.div`
      justify-content: center;
      display: flex;
      margin-top: 40px;
`

const Text = styled.span`
      color: white;
      float: right;
      font-weight: bold;
      font-size: 30px;
      margin-right: 20px;
`

const SideNav = ({
  imgUrl,
  onClose,
  onOpen,
  navOpen
}) => {
    console.log(imgUrl)
    return (
        <>
            <SideNavStyle navOpen={navOpen}>
                <NavHeader>
                  <Text onClick={onClose}>&#215;</Text>
                </NavHeader>
                <NavContent>
                  <ContentWrapper>
                    {(imgUrl)?
                    <Img src={imgUrl} width={'100px'} circle></Img>: null}
                    {/* <Img src={DefaultImg} width={'100px'} circle></Img> */}
                  </ContentWrapper>

                  <ContentWrapper>
                    <Button value="프로필 수정" />
                  </ContentWrapper>

                  <SideNavIcon/>
                  
                    
                    
                  
                    

        
                  
                </NavContent>
            </SideNavStyle>
        </>
    )
}

export default SideNav