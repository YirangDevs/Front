import React from "react"
import styled from "styled-components"

const HeaderStyle = styled.header`
    width : 100%;
    height : 64px;
    display : flex;
`

const Header = ({children}) => {
    return (
        <>
            <HeaderStyle>
                {children}
            </HeaderStyle>
        </>
    )
}

export default Header