import React, {memo} from "react"
import Col from "../../../layout/Grid/Column";
import IconButton from "../../atoms/IconButton";
import Row from "../../../layout/Grid/Row";
import {useHistory} from "react-router-dom";
import styled from "styled-components"
import Image from "../../atoms/Image";
import icon_notice from "../../../img/그룹 1.png"
import icon_senior from "../../../img/그룹 12.png"
import icon_manage from "../../../img/그룹 6.png"
import icon_match from "../../../img/그룹 11.png"
import icon_authority from "../../../img/그룹 380.png"
import icon_profile from "../../../img/그룹 9.png"
import icon_mypage from "../../../img/그룹 8.png"

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display : none;
  }
`

const MenuIconNav = ({role}) => {

    const history = useHistory()

    return (
        <Wrapper>
            <Row justify={"center"} gutter={[10,10]}>
                <Col span={1} justify={"center"}>

                    <IconButton value={"공고글 바로가기"} size={"large"} onClick={
                        ()=>{
                            document.documentElement.scrollTo(0,document.documentElement.scrollHeight)
                        }
                    }>
                        <Image src={icon_notice} width={"3rem"}></Image>
                    </IconButton>
                </Col>
                {

                    (role==="ADMIN" || role === "SUPER_ADMIN") ?
                        <>
                            <Col span={1} justify={"center"}>
                                <IconButton value={"피봉사자 데이터 업로드"} size={"large"} onClick={
                                    ()=>{
                                        history.push("seniors")
                                    }
                                }>
                                    <Image src={icon_senior} width={"3rem"}></Image>
                                </IconButton>
                            </Col>
                            <Col span={1} justify={"center"}>
                                <IconButton value={"봉사 공고글 관리"} size={"large"} onClick={
                                    ()=>{
                                        history.push("manage")
                                    }
                                }>
                                    <Image src={icon_manage} width={"3rem"}></Image>
                                </IconButton>

                            </Col>
                            <Col span={1} justify={"center"}>
                                <IconButton value={"매칭 결과확인"} size={"large"} onClick={
                                    ()=>{

                                        history.push("match")
                                    }
                                }>
                                    <Image src={icon_match} width={"3rem"}></Image>
                                </IconButton>
                            </Col>

                        </> : null
                }
                {
                    (role==="SUPER_ADMIN") ?
                        <Col span={1} justify={"center"}>
                            <IconButton value={"사용자 권한관리"} size={"large"} onClick={
                                ()=>{
                                    history.push("/userauthority")
                                }
                            }>
                                <Image src={icon_authority} width={"3rem"}></Image>
                            </IconButton>
                        </Col> : null
                }
                {
                    (role!=="GUEST") ?
                        <>
                            {(role !== "ADMIN" && role !== "SUPER_ADMIN") ?
                                <Col span={1} justify={"center"}>
                                    <IconButton value={"봉사 조회"} size={"large"} onClick={
                                        () => {

                                            history.push("mypage")
                                        }
                                    }>
                                        <Image src={icon_mypage} width={"3rem"}></Image>
                                    </IconButton>
                                </Col> : null
                            }
                            <Col span={1} justify={"center"}>
                                <IconButton value={"내 정보"} size={"large"} onClick={
                                    ()=>{

                                        history.push("profile")
                                    }
                                }>
                                    <Image src={icon_profile} width={"3rem"}></Image>
                                </IconButton>
                            </Col>
                        </>
                        : null
                }

            </Row>
        </Wrapper>

    )
}

export default memo(MenuIconNav)