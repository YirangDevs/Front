import React from "react"
import styled from "styled-components"

const ContentStyle = styled.div`
    width: 100%;
    height : auto;
    display : flex;
    justify-content : center;
    margin : 0 auto;
    flex-wrap : wrap;
    padding : 5.2vh 5.2vw;
    flex-direction: column;
    box-sizing: border-box;

  @media screen and (max-width: 1024px){
    padding : 2.6vh 2.6vw;
  }
  @media screen and (max-width: 768px){
    padding : 0;
  }

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