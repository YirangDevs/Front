import React from "react"
import Image from "../../../atoms/Image";
import MainImg from "../../../../img/main.png"
import ContentLayout from "../../../../layout/Content"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import IconButton from "../../../atoms/IconButton";
import {MdFormatListBulleted, MdOpenInBrowser, MdTune, MdToday} from "react-icons/md"

const Content = () => {
    return (
        <>
            <Image src={MainImg} width={"100%"}>

            </Image>
            <ContentLayout>
                <Row justify={"center"} gutter={[10,10]}>
                    <Col span={1.5}>
                        <IconButton value={"공고글 바로가기"}>
                            <MdFormatListBulleted/>
                        </IconButton>
                    </Col>
                    <Col span={1.5}>
                        <IconButton value={"피봉사자 데이터 업로드"}>
                            <MdOpenInBrowser/>
                        </IconButton>
                    </Col>
                    <Col span={1.5}>
                        <IconButton value={"봉사 공고글 관리"}>
                            <MdTune/>
                        </IconButton>
                    </Col>
                    <Col span={1.5}>
                        <IconButton value={"매칭 결과확인"}>
                            <MdToday/>
                        </IconButton>
                    </Col>
                </Row>
            </ContentLayout>
        </>
    )
}

export default Content