/**
 * @author : chaeeun
 * @date : 2021-02-24 15:44:35
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-24 17:03:22
 */

import React from "react"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'
import Typo from '../../atoms/Typography'

// const MyPageNav = styled.input.attrs(props => ({ type: "button" }))`
// background-color : #f5f5f5;
// padding : 8px 16px;
// border-top : 1.8px solid black;
// width : 100%;
// display : flex;
// justify-content : space-evenly;
// align-items: center;
// `

const MyPageNav2 = styled.div`
background-color : #f5f5f5;
padding : 8px 16px;
border-top : 1.8px solid black;
width : 100%;
display : flex;
justify-content : space-between;
align-items: center;
cursor : pointer;
${props => (props.border) ? 'border-bottom : 1.8px solid black' : null}
`

const MenuNav = ({ role }) => {
    const history = useHistory()
    return (
        <>




            <MyPageNav2 onClick={
                () => {
                    history.push("/manage")
                }
            } >
                <Typo>봉사 공고글 관리</Typo>
                <Typo>{'>'}</Typo>
            </MyPageNav2>

            <MyPageNav2 onClick={
                () => {
                    history.push("/")
                }
            } >
                <Typo>매칭 결과 확인</Typo>
                <Typo>{'>'}</Typo>
            </MyPageNav2>
            {role === "SUPER_ADMIN" || "ADMIN" ?
                <MyPageNav2 value="사용자 권한 관리" block onClick={
                    () => {
                        history.push("/userauthority")
                    }
                } >
                    <Typo>사용자 권한 관리</Typo>
                    <Typo>{'>'}</Typo>
                </MyPageNav2>
                : null}
            {role === "VOLUNTEER" ?
                <MyPageNav2 block onClick={
                    () => {
                        history.push("/mypage")
                    }
                } >
                    <Typo>회원탈퇴</Typo>
                    <Typo>{'>'}</Typo>
                </MyPageNav2>
                : null}

            <MyPageNav2 border onClick={
                () => {
                    history.push("/profile")
                }
            } >
                <Typo>프로필 수정</Typo>
                <Typo>{'>'}</Typo>

            </MyPageNav2>
        </>
    )
}

export default MenuNav