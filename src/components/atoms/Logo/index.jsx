import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import logo from "../../../img/logo.png";

const LogoStyle = styled.div`
  width : auto;
  height: inherit;
  cursor: pointer;
`

const Index = () => {
    const history = useHistory();
    return (
        <>
            <LogoStyle onClick={() => history.push("/")}>
                <img src={logo} alt="" style={{
                    height : "100%",
                    width : "auto"
                }}/>
            </LogoStyle>
        </>
    )
}

export default Index
