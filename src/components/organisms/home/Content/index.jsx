import React from "react"
import Image from "../../../atoms/Image";
import MainImg from "../../../../img/main.png"
import ContentLayout from "../../../../layout/Content"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import IconButton from "../../../atoms/IconButton/";
import TableBox from "../../../atoms/TableBox/"
import {MdFormatListBulleted, MdOpenInBrowser, MdTune, MdToday} from "react-icons/md"
import {useHistory} from "react-router-dom"
import Button from "../../../atoms/Button/"
import Pagination from "../../../atoms/Pagination/"

const HomeContent = ({
                         noticeList,
                         bodyList,
                         noticeNum,
                         currentNoticePage,

                         setNoticeNum,
                         onPaginationClick
}) => {
    const table_head = ["제목", "봉사날짜", "봉사지역", "모집인원"]
    const history = useHistory()
    return (
        <>
            <Image src={MainImg} width={"100%"}>

            </Image>
            <ContentLayout >
                <Row justify={"center"} gutter={[10,10]}>
                    <Col span={1} justify={"center"}>
                        <IconButton value={"공고글 바로가기"} size={"large"} onClick={
                            ()=>{
                                document.documentElement.scrollTo(0,document.documentElement.scrollHeight)

                            }
                        }>
                            <MdFormatListBulleted size={32}/>
                        </IconButton>
                    </Col>
                    <Col span={1} justify={"center"}>
                        <IconButton value={"피봉사자 데이터 업로드"} size={"large"} onClick={
                            ()=>{
                                history.push("seniors")
                            }
                        }>
                            <MdOpenInBrowser size={32}/>
                        </IconButton>
                    </Col>
                    <Col span={1} justify={"center"}>
                        <IconButton value={"봉사 공고글 관리"} size={"large"} onClick={
                            ()=>{
                                history.push("manage")
                            }
                        }>
                            <MdTune size={32}/>
                        </IconButton>

                    </Col>
                    <Col span={1} justify={"center"}>
                        <IconButton value={"매칭 결과확인"} size={"large"} onClick={
                            ()=>{
                                history.push("/")
                            }
                        }>
                            <MdToday size={32}/>
                        </IconButton>
                    </Col>
                </Row>
                <Row justify={"center"} style={{
                    marginTop : "10rem"
                }}>
                    <Col span={6}>
                        <Row gutter={[5,0]}>
                            <Col span={12} justify={"space-between"}>
                                <span style={{
                                    fontSize : "1.2rem"
                                }}>공고글 리스트</span>

                            </Col>
                            <Col span={12}>
                                <TableBox headList={table_head} bodyList={bodyList} border={"bottom"}></TableBox>
                            </Col>
                            <Col span={12} justify={"center"}>
                                <Pagination num={Math.ceil(noticeNum/6)} onClick={onPaginationClick}></Pagination>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </ContentLayout>
        </>
    )
}

export default HomeContent