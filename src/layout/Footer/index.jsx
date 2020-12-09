import React from "react"
import styled from "styled-components"

const FooterStyle = styled.div`
    width: 100%;
    height : auto;
    display : flex;
    justify-content : center;
`

const Footer = ({children}) => {
    return (
        <>
            <FooterStyle>
                {children}
            </FooterStyle>
        </>
    )
}

export default Footer