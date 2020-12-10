import React from "react"
import styled from "styled-components"
import Logo from "../atoms/Logo/index"

const TopBarStyle = styled.div`
${props => props.main ? `
     position : absolute; 
     background-color: rgba(0, 0, 0, 0.18);
     `: `
     position: static;
     background-color: rgba(204, 212, 224, 0.77);
     `} 
     width: 100%;
     height: 4rem;
     display: flex;
     justify-content: center;
     align-items: center;
`

const TopBar = ({ absolute }) => {
    return (
        <>
            <TopBarStyle main={absolute}>
                <Logo></Logo>
            </TopBarStyle>
        </>
    )
}

export default TopBar