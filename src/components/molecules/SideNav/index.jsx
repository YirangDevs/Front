import React from "react"
import styled from "styled-components"
import Img from "../../atoms/Image"

const SideNavStyle = styled.div`
    background-color: #f7f7f7;
    height: 100vh;
    width: 518px;
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
      border: 1px solid red;
      height: 100%;
`

const SideNav = ({
  imgUrl
}) => {
    console.log(imgUrl)
    return (
        <>
            <SideNavStyle>
                <NavHeader></NavHeader>
                <NavContent>
                  {(imgUrl)?
                  <Img src={imgUrl} width={'100px'} circle></Img>: null}
                  {/* <Img src={DefaultImg} width={'100px'} circle></Img> */}
                </NavContent>
            </SideNavStyle>
        </>
    )
}

export default SideNav