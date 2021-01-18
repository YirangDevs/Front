import React from "react"
import styled from "styled-components"

const ContentStyle = styled.div`
    width: 100%;
    height : auto;
    display : flex;
    justify-content : center;
    margin : 0 auto;
    flex-wrap : wrap;
    padding : 2rem;
    flex-direction: column;
    box-sizing: border-box;
`

const Content = ({ children, style }) => {
    return (
        <>
            <ContentStyle style={style}>
                {children}
            </ContentStyle>
        </>
    )
}

export default Content