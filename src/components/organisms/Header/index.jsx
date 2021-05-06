import React, {memo} from "react"
import styled from "styled-components"
import Row from "../../../layout/Grid/Row";
import Col from "../../../layout/Grid/Column";
import _ from "../../../config/env"
import LogoutProcess from "../../../service/transaction/logout_process"
import ProfileButton from "../../../containers/redux/components/ProfileButton";
import {useHistory} from "react-router-dom";
import {MdDehaze} from "react-icons/md"
import Logo from "../../atoms/Logo/index"


const HeaderStyle = styled.div`
  background-color : rgba(255,255,255,0.4);
  ${props => props.theme==="dark" ?
          'background-color : rgba(0,0,0,0.3);' :
          null
  }
  ${props => props.position ? `position : `+props.position +`;`: null }
  width: 100%;
  height : 72px;
  display: flex;
  z-index: 1;
  align-items: center;
  overflow-x: hidden;
  padding-left : 1rem;
  box-sizing: border-box;
  @media(max-width: 1200px){
    height : 64px;
  }

  @media(max-width: 768px){
    height : 56px;
  }

  @media(max-width: 576px){
    height : 40px;
  }
`

const LoginLogoutBtn = styled.a`
  width : 100%;
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

const Header = ({theme, logined, role, position, setNavState}) => {

    const history = useHistory();
    return (
        <>
            <HeaderStyle theme={theme} position={position}>
                <Row align={"center"} justify={"space-between"} style={{
                    height: "inherit"
                }}>
                    <Col span={2} xxl={2} xl={2} lg={2} md={2} sm={4} xs={4} style={{
                        height: "inherit"
                    }}>
                        <Row style={{
                            height: "inherit"
                        }}>
                            <Col xxl={0} xl={0} lg={0} md={0} sm={0} xs={2}   style={{
                                cursor: "pointer",
                                height : "100%"
                            }}  align={"center"} justify={"center"}>
                                <MdDehaze onClick={setNavState} size={25}/>
                            </Col>
                            <Col span={8} style={{
                                height : "100%"
                            }}>
                                <Logo></Logo>
                            </Col>
                        </Row>

                    </Col>

                    {
                        (logined) ?
                        <>
                            {/*<Col  xs={0} sm={0} md={2} lg={2} xl={2} xxl={2} offset={2} justify={"flex-end"} style={{
                                color : "white"
                            }}>

                                <Label>SKIN TYPE</Label><Value>| 일반</Value>

                            </Col>*/}

                            <Col span={6} xxl={6} xl={6} lg={6} md={4} sm={2} xs={0}>

                            </Col>
                            <Col span={1} xxl={1} xl={1} lg={1} md={1} sm={1} xs={1} justify={"center"}>
                                <ProfileButton onClick={()=>{
                                    if(role==="SUPER_ADMIN"||role==="ADMIN") history.push("profile")
                                    else {history.push("mypage");}
                                }}/>

                            </Col>
                            <Col span={2} xxl={2} xl={2} lg={2} md={2} sm={0} xs={0} justify={"flex-start"} style={{
                                color : "white"
                            }}>

                                <Label>ROLE TYPE</Label><Value>| {role}</Value>

                            </Col>

                            <Col  xxl={1} xl={1} lg={1} md={1} sm={2} xs={2} style={{
                                height: '100%',

                            }} justify={"flex-end"}>
                                <LoginLogoutBtn href={_.KAKAO_LOGOUT_URL} onClick={LogoutProcess}>LOGOUT</LoginLogoutBtn>
                            </Col>
                        </>

                             :
                            <Col  xxl={1} xl={1} lg={1} md={2} sm={2} xs={2} style={{
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

export default memo(Header)