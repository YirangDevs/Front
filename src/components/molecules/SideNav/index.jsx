import React, { useEffect } from "react"
import styled from "styled-components"
import Img from "../../atoms/Image"
import Button from "../../atoms/Button"
import SideNavIcon from "../SideNavIcon"



const SideNavStyle = styled.div`
    background-color: #f7f7f7;
    height: 100vh;
    // width: 518px;
    transition : width 0.75s ease;
    
    ${props=>props.navOpen?`
      width: 280px;

    `:
    `
    width : 0;
    overflow : hidden;
    `
    }
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
const NavContentWrapper = styled.div`
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
      cursor: pointer;
`


const SideNav = ({
  imgUrl,
  children,

  logined,

  navOpen,
  setNavState
}) => {

    useEffect(()=>console.log("dfs",navOpen),[navOpen])
    
    return (
        <>
            <SideNavStyle navOpen={navOpen}>
                <NavHeader>
                  <Text onClick={setNavState}>&#215;</Text>
                </NavHeader>
                <NavContent>
                  <NavContentWrapper>
                    {(logined)?
                    <Img src={imgUrl} width={'100px'} circle></Img>: null}
                    {/* <Img src={DefaultImg} width={'100px'} circle></Img> */}
                  </NavContentWrapper>

                  <NavContentWrapper>
                    <Button value="프로필 수정" />
                  </NavContentWrapper>

                  <SideNavIcon logined={logined}/>

                </NavContent>
                
            </SideNavStyle>

            
            {children}
            
        </>
    )
}

export default SideNav