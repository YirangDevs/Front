import React from "react"
import styled from "styled-components"

const HeaderStyle = styled.div`
    width: 100%;
    height : auto;
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