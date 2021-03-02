/**
 * @author : chaeeun
 * @date : 2021-02-24 15:44:35
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-01 22:48:57
 */

import React from "react"
import NavButton from "../../atoms/Button"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'
import Typo from '../../atoms/Typography'


const MypageNav = styled.div`
background-color : #f5f5f5;
padding : 8px 16px;
border-top : 1.8px solid black;
width : 100%;
display : flex;
justify-content : space-between;
align-items: center;
cursor : pointer;


// 마우스올리면 까매지기
&:hover {
    background-color : #000000;
    color : #f5f5f5;
}


${props => (props.border) ? 'border-bottom : 1.8px solid black;' : null}


// 해당하는 거에서 까매지기
${props => (props.mypage) ? `
background-color : #000000;
color : #f5f5f5; `
        : null}

${props => (props.profile) ? `
background-color : #000000;
color : #f5f5f5; `
        : null}

`
const MenuNav = ({ role, mypage, profile }) => {
    const history = useHistory()
    return (
        <>
            <MypageNav mypage={mypage} block onClick={
                () => {
                    history.push("/mypage")
                }
            } >
                <Typo>마이 페이지</Typo>
                <Typo>{'>'}</Typo>
            </MypageNav>

            {role === "SUPER_ADMIN" || "ADMIN" ?

                <MypageNav value="사용자 권한 관리" block onClick={
                    () => {
                        history.push("/userauthority")
                    }
                } >
                    <Typo>사용자 권한 관리</Typo>
                    <Typo>{'>'}</Typo>
                </MypageNav>
                : null}
            {role === "VOLUNTEER" ?
                <MypageNav block onClick={
                    () => {
                        history.push("/mypage")
                    }
                } >
                    <Typo>회원탈퇴</Typo>
                    <Typo>{'>'}</Typo>
                </MypageNav>
                : null}

            <MypageNav profile={profile} border block onClick={
                () => {
                    history.push("/profile")
                }
            } >
                <Typo>프로필 수정</Typo>
                <Typo>{'>'}</Typo>

            </MypageNav>
        </>
    )
}

export default MenuNav