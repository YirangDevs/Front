import React from "react"
import styled from "styled-components"
import {MdFormatListBulleted, MdOpenInBrowser, MdToday, MdTune, MdPerson, MdPeople} from "react-icons/md";
import {useHistory} from "react-router-dom"
import LogoutProcess from "../../../service/transaction/logout_process"
import _ from "../../../config/env"

const ContentWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
`

const MenuWrapper = styled.div`
  display : flex;
  align-items: center;
  width : 80%;
  margin : 2rem 0;
`

const Text = styled.span`
      margin-left : 1rem;
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
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        color: #707070;
`

const SideNavIcon = ({logined, role}) => {
    const history = useHistory()
    return (
        <>
        {(role==="SUPER_ADMIN")?
        <ContentWrapper>
            <MenuWrapper>
                <MdFormatListBulleted size={25}/>
                <Text onClick={()=>history.push("home")}>공고글 바로가기</Text>
            </MenuWrapper>

            <MenuWrapper>
                <MdOpenInBrowser size={25}/>
                <Text onClick={()=>history.push("seniors")}>피봉사자 관리</Text>
             </MenuWrapper>

             <MenuWrapper>
                <MdTune size={25}/>
                <Text onClick={()=>history.push("manage")}>봉사 공고글 관리</Text>
            </MenuWrapper>

            

            <MenuWrapper>
                <MdToday size={25}/>
                <Text onClick={()=>history.push("match")}>매칭결과 확인</Text>
            </MenuWrapper>
            <MenuWrapper>
                 <MdPeople size={25}/>
                <Text onClick={()=>history.push("userauthority")}>사용자 권한관리</Text>
            </MenuWrapper>
        </ContentWrapper>
    :
    (role==="ADMIN")?
        <ContentWrapper>
            <MenuWrapper>
                <MdFormatListBulleted size={25}/>
                <Text onClick={()=>history.push("home")}>공고글 바로가기</Text>
            </MenuWrapper>
            <MenuWrapper>
                <MdOpenInBrowser size={25}/>
                <Text onClick={()=>history.push("seniors")}>피봉사자 관리</Text>
             </MenuWrapper>
            <MenuWrapper>
                <MdTune size={25}/>
                <Text onClick={()=>history.push("manage")}>봉사 공고글 관리</Text>
            </MenuWrapper>

            

             <MenuWrapper>
                <MdToday size={25}/>
                <Text onClick={()=>history.push("match")}>매칭결과 확인</Text>
            </MenuWrapper>
            <MenuWrapper>
                <MdPerson size={25}/>
                <Text onClick={()=>history.push("mypage")}>마이페이지</Text>
            </MenuWrapper>
        </ContentWrapper>
    :
    (role==="VOLUNTEER")?
        <ContentWrapper>
            <MenuWrapper>
                <MdFormatListBulleted size={25}/>
                <Text onClick={()=>history.push("home")}>공고글 바로가기</Text>
            </MenuWrapper>
            <MenuWrapper>
                <MdPerson size={25}/>
                <Text onClick={()=>history.push("mypage")}>마이페이지</Text>
            </MenuWrapper>
        </ContentWrapper>
    :
        <ContentWrapper>
            <MenuWrapper>
                <MdFormatListBulleted size={25}/>
                <Text onClick={()=>history.push("home")}>공고글 바로가기</Text>
            </MenuWrapper>
        </ContentWrapper>
    }
                

                {
                    (logined)?
                    <ContentWrapper onClick={LogoutProcess} style={{
                        justifyContent : "center"
                    }}>
                        <Loginlogout href={_.KAKAO_LOGOUT_URL}>로그아웃</Loginlogout>
                    </ContentWrapper>
                    :
                    <ContentWrapper style={{
                        justifyContent : "center"
                    }}>
                        <Loginlogout href={_.KAKAO_AUTHORIZATION_URL}>로그인</Loginlogout>
                    </ContentWrapper>
                }
                
                
        </>
    )
}

export default SideNavIcon