import React from "react"
import styled from "styled-components"

const ContentStyle = styled.div`
    width: 100%;
    height : auto;
    display : flex;
    justify-content : center;
`

const Content = ({children}) => {
    return (
        <>
            <ContentStyle>
                {children}
            </ContentStyle>
        </>
    )
}

export default Content