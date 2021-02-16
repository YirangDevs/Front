/** 
 * @author : chaeeun 
 * @Date :  2021-02-08 00:37:21 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-16 22:15:23
 */

import React from "react"
import styled from "styled-components"
import Col from "../../../layout/Grid/Column"
import Row from "../../../layout/Grid/Row"
import Icon from "../../../img/KakaoIcon.png"
import { useHistory } from "react-router-dom"

const UserInfoWrapper = styled.div`
height : 138px;
// height : 9rem;
width : 100%;
background-color :  #f5f5f5;
font-family: Noto Sans CJK KR;
`

const Title = styled.div`
font-size : 15px;
//font-size : 0.7rem;

`
const MypageBtn = styled.div`
font-size : 12px;
//font-size : 0.7rem;
font-size : 12px;
height : 1rem;
display : flex;
align-items : center;
justify-content : center;
cursor : pointer;

`
const UserName = styled.div`
padding-top : 4px;
font-size : 23px;
//font-size : 1.4rem;
font-weight : bold;
display : flex;

`
const KakaoIcon = styled.img.attrs((props) => ({
    src: props.src

}))`
    width : ${props => props.width};
    display : flex;
    align-items : center;
    justify-content : center;
    padding-left : 5px;
    
`
const UserEmail = styled.div`
font-size : 12px;
//font-size : 0.7rem;
color: #000000;
opacity: 0.5;
`


const UserInfo = (props) => {
    const handleClick = () => {
        console.log(props)
    }
    const history = useHistory()
    return (
        <UserInfoWrapper onClick={handleClick}>
            <Row gutter={[19, 0]}>
                <Col span={12}>
                    <Row gutter={[0, 17]} justify={"space-between"}>
                        <Col span={6} align={"center"}>
                            <Title>
                                Profile of kakao talk
                            </Title>
                        </Col>
                        <Col span={3} justify={"center"}>
                            <MypageBtn onClick={
                                () => {
                                    history.push("/mypage")
                                }
                            }>
                                마이페이지 {'>'}
                            </MypageBtn>
                        </Col>
                    </Row>
                </Col>
                <Row gutter={[0, 17]}>
                    <Col span={12}>
                        <Row gutter={[0, 0]}>
                            <Col span={4} align={"baseline"} justify={"left"}>
                                <UserName >
                                    {props.username}
                                </UserName>

                                <KakaoIcon src={Icon} width="1rem"></KakaoIcon>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <UserEmail>
                            {
                                (props.email) ? `${props.email} >` : `email을 인증해 주세요`
                            }
                        </UserEmail>
                    </Col>
                </Row>
            </Row>
        </UserInfoWrapper>
    )
}

export default UserInfo;