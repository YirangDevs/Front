import React from "react"
import styled from "styled-components"
import Logo from "../atoms/Logo"

const TopBarStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.18);
`

const TopBar = () => {
    return (
        <>
            <TopBarStyle>
                <Logo></Logo>
            </TopBarStyle>
        </>
    )
}

export default TopBar