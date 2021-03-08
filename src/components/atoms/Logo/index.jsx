import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const LogoStyle = styled.div`
  width : 100%;
  height: 100%;
  font-family: Montserrat;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  font-weight: bold;
  font-family: Montserrat;
  cursor: pointer;
  padding : 10px 20px;
  box-sizing: border-box;
  background-color: #595959;
  display : flex;
  align-items: center;
  justify-content: center;
`

const Index = () => {
    const history = useHistory();
    return (
        <>
            <LogoStyle onClick={() => history.push("/")}>
                TEAM:YIRANG
            </LogoStyle>
        </>
    )
}

export default Index
