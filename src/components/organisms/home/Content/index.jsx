import React from "react"
import Image from "../../../atoms/Image";
import MainImg from "../../../../img/main.png"
import ContentLayout from "../../../../layout/Content"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import IconButton from "../../../atoms/IconButton";
import {MdFormatListBulleted, MdOpenInBrowser, MdTune, MdToday} from "react-icons/md"
import {useHistory} from "react-router-dom"

const Content = () => {
    const history = useHistory()
    return (
        <>
            <Image src={MainImg} width={"100%"}>

            </Image>
            <ContentLayout>
                <Row justify={"center"} gutter={[10,10]}>
                    <Col span={1} justify={"center"}>
                        <IconButton value={"공고글 바로가기"} size={"large"} >
                            <MdFormatListBulleted size={28}/>
                        </IconButton>
                    </Col>
                    <Col span={1} justify={"center"}>
                        <IconButton value={"피봉사자 데이터 업로드"} size={"large"} onClick={
                            ()=>{
                                history.push("seniors")
                            }
                        }>
                            <MdOpenInBrowser size={28}/>
                        </IconButton>
                    </Col>
                    <Col span={1} justify={"center"}>
                        <IconButton value={"봉사 공고글 관리"} size={"large"} onClick={
                            ()=>{
                                history.push("manage")
                            }
                        }>
                            <MdTune size={28}/>
                        </IconButton>

                    </Col>
                    <Col span={1} justify={"center"}>
                        <IconButton value={"매칭 결과확인"} size={"large"} onClick={
                            ()=>{
                                history.push("/")
                            }
                        }>
                            <MdToday size={28}/>
                        </IconButton>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </ContentLayout>
        </>
    )
}

export default Content