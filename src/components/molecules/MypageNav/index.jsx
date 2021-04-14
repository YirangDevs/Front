/**
 * @author : chaeeun
 * @date : 2021-02-24 15:44:35
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-14 19:18:57
 */

import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import styled from 'styled-components'
import Col from "../../../layout/Grid/Column"
import Row from "../../../layout/Grid/Row"
import Divider from "../../atoms/Divider"
import Typo from '../../atoms/Typography'



const MypageNav = styled.div`
background-color : #f5f5f5;
padding : 8px 16px;
border-bottom : 1.8px solid black;
width : 100%;
display : flex;
justify-content : space-between;
align-items: center;
cursor : pointer;
&: hover {
    background-color : #000000;
    color: #f5f5f5;
}
`


const MenuNav = ({ role }) => {

    const location = useLocation()
    const history = useHistory()
    console.log(location)
    console.log(location.pathname)
    const path = location.pathname
    return (
        <>
            <Row>
                <Col span={12}>
                    <Divider marginTop={'0px'} marginBottom={'0px'} color={"#000000"} borderWidth={'3.3px'} />
                </Col>

                {(path !== '/profile') ?
                    <Col span={12}>

                        <MypageNav block onClick={
                            () => {
                                history.push("/profile")
                            }
                        } >
                            <Typo>프로필 수정</Typo>
                            <Typo>{'>'}</Typo>

                        </MypageNav>
                    </Col>
                    : null
                }


                {(role === "SUPER_ADMIN" && path !== "/userauthority") ?
                    <Col span={12}>
                        <MypageNav path={path} block onClick={
                            () => {
                                history.push("/userauthority")
                            }
                        } >
                            <Typo>사용자 권한 관리</Typo>
                            <Typo>{'>'}</Typo>
                        </MypageNav>
                    </Col>
                    : null
                }

                {(role === "VOLUNTEER" && path !== "/mypage") ?
                    <Col span={12}>
                        <MypageNav path={path} block onClick={
                            () => {
                                history.push("/mypage")
                            }
                        } >
                            <Typo>마이 페이지</Typo>
                            <Typo>{'>'}</Typo>
                        </MypageNav>
                    </Col>
                    :
                    <>
                        {(path !== "/seniors") ?
                            <Col span={12}>
                                <MypageNav page={"/seniors"} path={path} block onClick={
                                    () => {
                                        history.push("/seniors")
                                    }
                                } >
                                    <Typo>피봉사자 데이터 업로드</Typo>
                                    <Typo>{'>'}</Typo>
                                </MypageNav>
                            </Col> : null
                        }


                        {(path !== "/match") ?
                            <Col span={12}>
                                <MypageNav page={"/match"} path={path} block onClick={
                                    () => {
                                        history.push("/match")
                                    }
                                } >
                                    <Typo>매칭결과확인</Typo>
                                    <Typo>{'>'}</Typo>
                                </MypageNav>
                            </Col>
                            : null
                        }

                        {
                            (path !== "/manage") ?
                                <Col span={12}>
                                    <MypageNav page={"/manage"} path={path} block onClick={
                                        () => {
                                            history.push("/manage")
                                        }
                                    } >
                                        <Typo>공고글 관리</Typo>
                                        <Typo>{'>'}</Typo>
                                    </MypageNav>
                                </Col>
                                : null
                        }
                    </>
                }


                <Col span={12}>
                    <Divider marginTop={'0px'} marginBottom={'0px'} color={"#000000"} borderWidth={'1.6px'} />
                </Col>
            </Row>
        </>
    )
}

export default MenuNav