import React from "react"
import styled from "styled-components"

const ContentStyle = styled.div`
    width: 90%;
    height : auto;
    display : flex;
    justify-content : center;
    margin : 0 auto;
    flex-wrap : wrap;
    padding : 2rem;
`

const Content = ({ children }) => {
    return (
        <>
            <ContentStyle>
                {children}
            </ContentStyle>
        </>
    )
}

export default Content