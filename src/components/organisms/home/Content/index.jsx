import React from "react"
import Image from "../../../atoms/Image";
import MainImg from "../../../../img/main.png"
import ContentLayout from "../../../../layout/Content"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import TableBox from "../../../atoms/TableBox/"
import Pagination from "../../../atoms/Pagination/"
import MenuIconNav from "../../../../containers/redux/components/MenuIconNav/";

const HomeContent = ({
                         role,
                         noticeList,
                         bodyList,
                         noticeNum,
                         currentNoticePage,

                         setNoticeNum,
                         onPaginationClick
}) => {
    const table_head = ["제목", "봉사날짜", "봉사지역", "모집인원"]
    return (
        <>
            <Image src={MainImg} width={"100%"}>

            </Image>
            <ContentLayout >
                <MenuIconNav></MenuIconNav>
                <Row justify={"center"} style={{
                    marginTop : "8rem"
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