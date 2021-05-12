import React, { memo, useRef } from "react"
import Col from "../../../layout/Grid/Column";
import IconButton from "../../atoms/IconButton";
import { MdFormatListBulleted, MdOpenInBrowser, MdPeople, MdToday, MdTune, MdPerson } from "react-icons/md";
import Row from "../../../layout/Grid/Row";
import { useHistory, useLocation } from "react-router-dom";

const MenuIconNav = ({ role }) => {

    const history = useHistory()
    const { current: size } = useRef(40)
    const location = useLocation()
    const path = location.pathname
    const IntroColor = (path == "/Intro") ? '#00B700' : '#000000'
    return (
        <Row justify={"center"} gutter={[10, 10]}>
            {
                (path == "/Intro") ?
                    <Col span={1} justify={"center"}>
                        <IconButton value={"공고글 바로가기"} size={"large"} onClick={
                            () => {
                                history.push("/")
                            }
                        }>
                            <MdFormatListBulleted size={size} color={IntroColor} />
                        </IconButton>
                    </Col>
                    :
                    <Col span={1} justify={"center"}>
                        <IconButton value={"공고글 바로가기"} size={"large"} onClick={
                            () => {
                                document.documentElement.scrollTo(0, document.documentElement.scrollHeight)
                            }
                        }>
                            <MdFormatListBulleted size={size} />
                        </IconButton>
                    </Col>
            }

            {

                (role === "ADMIN" || role === "SUPER_ADMIN") ?
                    <>
                        <Col span={1} justify={"center"}>
                            <IconButton value={"피봉사자 데이터 업로드"} size={"large"} onClick={
                                () => {
                                    history.push("seniors")
                                }
                            }>
                                <MdOpenInBrowser size={size} color={IntroColor} />
                            </IconButton>
                        </Col>
                        <Col span={1} justify={"center"}>
                            <IconButton value={"봉사 공고글 관리"} size={"large"} onClick={
                                () => {
                                    history.push("manage")
                                }
                            }>
                                <MdTune size={size} color={IntroColor} />
                            </IconButton>

                        </Col>
                        <Col span={1} justify={"center"}>
                            <IconButton value={"매칭 결과확인"} size={"large"} onClick={
                                () => {

                                    history.push("match")
                                }
                            }>
                                <MdToday size={size} color={IntroColor} />
                            </IconButton>
                        </Col>

                    </> : null
            }
            {
                (role === "SUPER_ADMIN") ?
                    <Col span={1} justify={"center"}>
                        <IconButton value={"사용자 권한관리"} size={"large"} onClick={
                            () => {
                                history.push("/userauthority")
                            }
                        }>
                            <MdPeople size={size} color={IntroColor} />
                        </IconButton>
                    </Col> : null
            }
            {
                (role !== "GUEST") ?
                    <Col span={1} justify={"center"}>
                        <IconButton value={"마이페이지"} size={"large"} onClick={
                            () => {

                                history.push("mypage")
                            }
                        }>
                            <MdPerson size={size} color={IntroColor} />
                        </IconButton>
                    </Col> : null
            }

        </Row>
    )
}

export default memo(MenuIconNav)