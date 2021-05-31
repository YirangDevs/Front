import React from "react"
import styled from "styled-components"
import Img from "../../atoms/Image"
import Button from "../../atoms/Button"
import SideNavIcon from "../SideNavIcon"
import { useHistory } from "react-router-dom"

const SideNavStyle = styled.div`
    background-color: #f7f7f7;
    height: 100vh;
    // width: 518px;
    transition : width 0.3s ease;
    box-sizing: border-box;
    overflow: hidden;
    ${props=>props.navOpen?`
      width: 280px;
    `:
    `
    width : 0;
    
    `
    }
  
`
const NavHeader = styled.div`
      height: 72px;
      //background-color: #00a804;
      background-color: white;
      min-width : 150px;

  @media(max-width: 1200px){
        height : 64px;
      }
    
      @media(max-width: 768px){
        height : 56px;
      }
    
      @media(max-width: 576px){
        height : 40px;
      }
`
const NavContent = styled.div`
      height: 100%;
      display: flex;
      flex-direction : column;
      min-width : 150px;

`
const NavContentWrapper = styled.div`
      justify-content: center;
      display: flex;
      margin-top: 2rem;
`

const Text = styled.span`
      color: black;
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
  role,

  navOpen,
  setNavState,

  viewMap
}) => {
    const history=useHistory()

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
                  {(logined)?
                    <Button onClick={()=>history.push("profile")} value="프로필 수정" />: null}
                  </NavContentWrapper>

                  <SideNavIcon role={role} logined={logined}/>

                </NavContent>

            </SideNavStyle>




            {children}

            
        </>
    )
}

export default SideNav