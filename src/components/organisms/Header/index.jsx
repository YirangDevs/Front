import React from "react"
import styled from "styled-components"
import Logo from "../../atoms/Logo"
import Row from "../../../layout/Grid/Row";
import Col from "../../../layout/Grid/Column";
import _ from "../../../config/env"
import LogoutProcess from "../../../service/transaction/logout_process"


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

const LoginLogoutBtn = styled.a`
  width : auto;
  height : 100%;
  background : rgba(255,255,255,0.3);
  padding : 0px 14px;
  border : 0;
  outline : 0;
  font-family : Montserrat;
  font-weight: 500;
  display : flex;
  align-items: center;
  justify-content: center;
  color : white;
  cursor : pointer;
`

const Label = styled.span`
  font-weight: bold;
`

const Value = styled.span`
  margin-left : 0.5rem;
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
                        <>
                            <Col span={2} xs={2} sm={0} md={2} offset={4} justify={"flex-end"} style={{
                                color : "white"
                            }}>

                                <Label>SKIN TYPE</Label><Value>| 일반</Value>

                            </Col>
                            <Col span={2} xs={2} sm={0} md={2} offset={0.5} justify={"flex-start"} style={{
                                color : "white"
                            }}>

                                <Label>ROLE TYPE</Label><Value>| {role}</Value>

                            </Col>
                            <Col span={1} style={{
                                height: '100%',

                            }} justify={"flex-end"}>
                                <LoginLogoutBtn href={_.KAKAO_LOGOUT_URL} onClick={LogoutProcess}>LOGOUT</LoginLogoutBtn>
                            </Col>
                        </>

                             :
                            <Col span={2} style={{
                                height: '100%',

                            }} justify={"flex-end"}>
                                <LoginLogoutBtn href={_.KAKAO_AUTHORIZATION_URL}>REGISTER/LOGIN</LoginLogoutBtn>
                            </Col>
                    }


                </Row>

            </HeaderStyle>
        </>
    )
}

export default Header