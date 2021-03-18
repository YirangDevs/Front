import React from "react"
import styled from "styled-components"

const SideNavStyle = styled.div`
    border: 1px gray solid;
    position: absolute;
    float: left;
    background-color: white;
    height: 91%;
    width: 300px;
    margin-top : 72px;

    @media(max-width: 1200px){
        margin-top : 64px;
      }
    
      @media(max-width: 768px){
        margin-top : 56px;
      }
    
      @media(max-width: 576px){
        margin-top : 40px;
      }
`

const SideNav = () => {
    
    return (
        <>
            <SideNavStyle>
                hi
            </SideNavStyle>
        </>
    )
}

export default SideNav