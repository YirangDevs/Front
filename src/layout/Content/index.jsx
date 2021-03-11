import React from "react"
import styled from "styled-components"

const ContentStyle = styled.div`
width :auto; // 채은 수정 이거 아니면 빼주셈
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