import React, {memo, useRef} from "react"
import Col from "../../../layout/Grid/Column";
import IconButton from "../../atoms/IconButton";
import {MdFormatListBulleted, MdOpenInBrowser, MdPeople, MdToday, MdTune, MdPerson, MdBookmarkBorder} from "react-icons/md";
import Row from "../../../layout/Grid/Row";
import {useHistory} from "react-router-dom";

const MenuIconNav = ({role}) => {

    const history = useHistory()
    const {current : size} = useRef(40)

    return (
        <Row justify={"center"} gutter={[10,10]}>
            <Col span={1} justify={"center"}>
                <IconButton value={"공고글 바로가기"} size={"large"} onClick={
                    ()=>{
                        document.documentElement.scrollTo(0,document.documentElement.scrollHeight)
                    }
                }>
                    <MdFormatListBulleted size={size}/>
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
                                        <MdOpenInBrowser size={size}/>
                                    </IconButton>
                                </Col>
                                <Col span={1} justify={"center"}>
                                    <IconButton value={"봉사 공고글 관리"} size={"large"} onClick={
                                        ()=>{
                                            history.push("manage")
                                        }
                                    }>
                                        <MdTune size={size}/>
                                    </IconButton>

                                </Col>
                                <Col span={1} justify={"center"}>
                                    <IconButton value={"매칭 결과확인"} size={"large"} onClick={
                                        ()=>{

                                            history.push("match")
                                        }
                                    }>
                                        <MdToday size={size}/>
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
                            <MdPeople size={size} />
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
                                    <MdBookmarkBorder size={size}/>
                                </IconButton>
                            </Col> : null
                        }
                        <Col span={1} justify={"center"}>
                            <IconButton value={"내 정보"} size={"large"} onClick={
                                ()=>{

                                    history.push("profile")
                                }
                            }>
                                <MdPerson size={size}/>
                            </IconButton>
                        </Col>
                    </>
                : null
            }

        </Row>
    )
}

export default memo(MenuIconNav)