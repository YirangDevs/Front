import React from "react"
import styled from "styled-components"
import {MdFormatListBulleted, MdOpenInBrowser, MdToday, MdTune} from "react-icons/md";

const ContentWrapper = styled.div`
      display: flex;
      margin-top: 40px;
      margin-left: 20%;
`

const Text = styled.span`
      margin-left: 30px;
      font-weight: bold;
      font-size: 1rem;
      ${props=>
          props.guide?`
          color: #707070;
          margin-left: 50px;
          `:null
    }
`

const SideNavIcon = () => {
    return (
        <>
                <ContentWrapper>
                    <MdFormatListBulleted size={25}/>
                    <Text>공고글 바로가기</Text>
                </ContentWrapper>

                <ContentWrapper>
                    <MdOpenInBrowser size={25}/>
                    <Text>피봉사자 관리</Text>
                </ContentWrapper>

                <ContentWrapper>
                  <MdTune size={25}/>
                    <Text>봉사 공고글 관련</Text>
                </ContentWrapper>

                <ContentWrapper>
                  <MdToday size={25}/>
                    <Text>매칭결과 확인</Text>
                </ContentWrapper>

                <ContentWrapper>
                    <Text guide>로그아웃</Text>
                </ContentWrapper>
        </>
    )
}

export default SideNavIcon