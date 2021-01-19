import React from "react"
import styled from "styled-components"
import Logo from "../../atoms/Logo"
import Row from "../../../layout/Grid/Row";
import Col from "../../../layout/Grid/Column";

const HeaderStyle = styled.div`
  background-color : rgba(255,255,255,0.4);
  ${props => props.theme=="dark" ?
          'background-color : rgba(0,0,0,0.3);' :
          null
  }
  ${props => props.position ? `position : `+props.position +`;`: null }
  width: 100%;
  height : 72px;
  display: flex;
  align-items: center;
  @media(max-width: 1200px){
    height : 72px;
  }

  @media(max-width: 768px){
    height : 56px;
  }

  @media(max-width: 576px){
    height : 40px;
  }
`

const RegisterLoginBtn = styled.button`
  width : auto;
  height : 100%;
  background : rgba(255,255,255,0.3);
  padding : 0px 14px;
  border : 0;
  outline : 0;
  color : white;
`

const Label = styled.span`
  font-weight: bold;
`

const Header = ({theme, logined, role, position}) => {
    return (
        <>
            <HeaderStyle theme={theme} position={position}>
                <Row align={"center"} justify={"space-between"} style={{
                    height: "inherit"
                }}>
                    <Col span={2} style={{
                        height : "100%"
                    }}>
                        <Logo></Logo>
                    </Col>

                    {
                        (logined) ?

                            <Col span={8} xs={2} sm={0} md={6} justify={"center"} style={{
                                color : "white"
                            }}>

                                    <Label>SKIN TYPE</Label>| 관리자

                            </Col>

                             :
                            <Col span={2} style={{
                                height: '100%',

                            }} justify={"flex-end"}>
                                <RegisterLoginBtn>REGISTER/LOGIN</RegisterLoginBtn>
                            </Col>
                    }


                </Row>

            </HeaderStyle>
        </>
    )
}

export default Header