/** 
 * @author : chaeeun 
 * @Date :  2021-02-08 00:37:21 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-14 20:33:38
 */

import React from "react"
import styled from "styled-components"
import Col from "../../../layout/Grid/Column"
import Row from "../../../layout/Grid/Row"
import Icon from "../../../img/KakaoIcon.png"
import { useHistory } from "react-router-dom"
import Typo from "../../atoms/Typography"

const UserCardWrapper = styled.div`
height : 7rem;
width : 100%;
background-color :  #f5f5f5;
font-family: Noto Sans CJK KR;
border-radius: 7px;
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

const UserCard = ({ email, username, emailValidation }) => {
    const handleClick = () => {
        // console.log(props)
    }
    const history = useHistory()
    return (
        <UserCardWrapper onClick={handleClick}>
            <Row gutter={[0, 0]}>
                <Col xs={0} sm={0} md={12} span={12}>
                    <Row justify={"space-between"} style={{ padding: '0.8rem 17px' }} >
                        <Col xs={12} sm={12} md={7} lg={7} xl={8} xxl={7} align={"center"}>
                            <Typo weight={'bold'} size={"0.8rem"}>
                                Profile of kakao talk
                                </Typo>
                        </Col>

                        <Col xs={0} sm={0} md={5} lg={5} xl={4} xxl={5} align={'center'} justify={"flex-end"}>
                            <Typo size={'0.65rem'} cursor={'pointer'} onClick={() => { history.push("/mypage") }} >
                                마이페이지 {'>'}
                            </Typo>
                        </Col>
                    </Row>
                </Col>
                <Row gutter={[0, 17]}>
                    <Col span={12}>
                        <Row gutter={[0, 0]}>
                            <Col span={12} align={"baseline"} justify={"left"}>
                                <Typo size={'1.3rem'} weight={'bold'}  >{username}</Typo>
                                <KakaoIcon src={Icon} width="1rem"></KakaoIcon>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Typo color={"rgba(0,0,0,0.5)"} size={"0.7rem"} >
                            {
                                (emailValidation === 'YES') ? `${email} ` : `email을 인증해 주세요`
                            }
                        </Typo>
                    </Col>
                </Row>
            </Row>
        </UserCardWrapper >
    )
}

export default UserCard;
