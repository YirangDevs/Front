import React from "react"
import styled from "styled-components"
import {MdFormatListBulleted, MdOpenInBrowser, MdToday, MdTune} from "react-icons/md";
import {useHistory} from "react-router-dom"
import LogoutProcess from "../../../service/transaction/logout_process"
import _ from "../../../config/env"

const ContentWrapper = styled.div`
      display: flex;
      margin-top: 40px;
      margin-left: 25%;
      width: 200px;
      
`

const Text = styled.span`
      margin-top: 8px;
      margin-left: 30px;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      ${props=>
          props.guide?`
          color: #707070;
          margin-left: 50px;
          `:null
    }
`

const Loginlogout = styled.a`
        margin-top: 8px;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        color: #707070;
        margin-left: 50px;
`

const SideNavIcon = ({logined}) => {
    const history = useHistory()
    return (
        <>
                <ContentWrapper>
                    <MdFormatListBulleted size={25}/>
                    <Text onClick={()=>history.push("manage")}>공고글 바로가기</Text>
                </ContentWrapper>

                <ContentWrapper>
                    <MdOpenInBrowser size={25}/>
                    <Text onClick={()=>history.push("seniors")}>피봉사자 관리</Text>
                </ContentWrapper>

                <ContentWrapper>
                  <MdTune size={25}/>
                    <Text onClick={()=>history.push("userauthority")}>사용자 권한관리</Text>
                </ContentWrapper>

                <ContentWrapper>
                  <MdToday size={25}/>
                    <Text onClick={()=>history.push("match")}>매칭결과 확인</Text>
                </ContentWrapper>

                {
                    (logined)?
                    <ContentWrapper onClick={LogoutProcess}>
                        <Text guide>로그아웃</Text>
                    </ContentWrapper>
                    :
                    <ContentWrapper>
                        <Loginlogout href={_.KAKAO_AUTHORIZATION_URL} guide>로그인</Loginlogout>
                    </ContentWrapper>
                }
                
                
        </>
    )
}

export default SideNavIcon