/**
 * @author : chaeeun
 * @date : 2021-02-24 15:44:35
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-28 01:57:10
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



&:hover {
    background-color : #000000;
    color : #f5f5f5;
}

${props => (props.border) ? 'border-bottom : 1.8px solid black;' : null}

`
const MenuNav = ({ role }) => {
    const history = useHistory()
    return (
        <>
            <MypageNav block onClick={
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
                //    <MypageNav onClick={
                //     () => {
                //         history.push("/manage")
                //     }
                // } >
                //     <Typo>봉사 공고글 관리</Typo>
                //     <Typo>{'>'}</Typo>
                // </MypageNav>
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

            <MypageNav border block onClick={
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