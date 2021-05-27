import React from "react"
import styled from "styled-components"
import {MdFormatListBulleted, MdOpenInBrowser, MdToday, MdTune, MdPerson, MdPeople} from "react-icons/md";
import {useHistory} from "react-router-dom"
import LogoutProcess from "../../../service/transaction/logout_process"
import _ from "../../../config/env"

const ContentWrapper = styled.div`
      display: flex;
      margin-top: 40px;
      margin-left: 23%;
      width: 200px;
      
`
const IconByRole = styled.div`
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

const SideNavIcon = ({logined, role}) => {
    const history = useHistory()
    return (
        <>
        {(role==="SUPER_ADMIN")?
        <IconByRole>
            <ContentWrapper>
                <MdFormatListBulleted size={25}/>
                <Text onClick={()=>history.push("/")}>공고글 바로가기</Text>
            </ContentWrapper>

            <ContentWrapper>
                <MdOpenInBrowser size={25}/>
                <Text onClick={()=>history.push("seniors")}>피봉사자 관리</Text>
             </ContentWrapper>

             <ContentWrapper>
                <MdTune size={25}/>
                <Text onClick={()=>history.push("manage")}>봉사 공고글 관리</Text>
            </ContentWrapper>

            

            <ContentWrapper>
                <MdToday size={25}/>
                <Text onClick={()=>history.push("match")}>매칭결과 확인</Text>
            </ContentWrapper>
            <ContentWrapper>
                 <MdPeople size={25}/>
                <Text onClick={()=>history.push("userauthority")}>사용자 권한관리</Text>
            </ContentWrapper>
        </IconByRole>
    :
    (role==="ADMIN")?
        <IconByRole>
            <ContentWrapper>
                <MdFormatListBulleted size={25}/>
                <Text onClick={()=>history.push("home")}>공고글 바로가기</Text>
            </ContentWrapper>
            <ContentWrapper>
                <MdOpenInBrowser size={25}/>
                <Text onClick={()=>history.push("seniors")}>피봉사자 관리</Text>
             </ContentWrapper>
            <ContentWrapper>
                <MdTune size={25}/>
                <Text onClick={()=>history.push("manage")}>봉사 공고글 관리</Text>
            </ContentWrapper>

            

             <ContentWrapper>
                <MdToday size={25}/>
                <Text onClick={()=>history.push("match")}>매칭결과 확인</Text>
            </ContentWrapper>
            <ContentWrapper>
                <MdPerson size={25}/>
                <Text onClick={()=>history.push("mypage")}>마이페이지</Text>
            </ContentWrapper>
        </IconByRole>
    :
    (role==="VOLUNTEER")?
        <IconByRole>
            <ContentWrapper>
                <MdFormatListBulleted size={25}/>
                <Text onClick={()=>history.push("home")}>공고글 바로가기</Text>
            </ContentWrapper>
            <ContentWrapper>
                <MdPerson size={25}/>
                <Text onClick={()=>history.push("mypage")}>마이페이지</Text>
            </ContentWrapper>
        </IconByRole>
    :
        <IconByRole>
            <ContentWrapper>
                <MdFormatListBulleted size={25}/>
                <Text onClick={()=>history.push("home")}>공고글 바로가기</Text>
            </ContentWrapper>
        </IconByRole>
    }
                

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