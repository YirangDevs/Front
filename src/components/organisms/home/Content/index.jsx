import React, { memo } from "react"
import MainVideo from "../../../../mp4/main.mp4"
import ContentLayout from "../../../../layout/Content"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import TableBox from "../../../atoms/TableBox/"
import Pagination from "../../../atoms/Pagination/"
import MenuIconNav from "../../../../containers/redux/components/MenuIconNav/";
import ReadNoticeForm from "../../../molecules/ReadNoticeForm";
import Button from "../../../atoms/Button";
import Video from "../../../atoms/Video";
import SelectBox from "../../../atoms/SelectBox";

const HomeContent = ({
    role,
    noticeList,
    bodyList,
    noticeNum,
    currentNoticePage,
    currentNotice,
    fakeLoginOnChange,

    setNoticeNum,
    closeNotice,
    onPaginationClick,
    onTableClick,
    onApplyBtnClick
}) => {
    const table_head = ["제목", "봉사날짜", "봉사지역", "모집인원"]
    //const history = useHistory()

    return (
        <>
            {/*<Image src={MainImg} width={"100%"}>*/}

            {/*</Image>*/}
            <Video src={MainVideo} width={"100%"} height={"auto"}></Video>
            {/* 임시 버튼 */}
            <Row gutter={[20,20]}>
                <Col>
                    <SelectBox onChange={fakeLoginOnChange} options={["권한 설정","volunteer_1","volunteer_2","volunteer_3","volunteer_4","admin_1","admin_2","super_admin_1"]}/>
                </Col>
            </Row>

            {/* 임시 버튼 끝 */}
            <ContentLayout >

                <Row justify={"center"} >
                    <Col span={12} justify={"center"}>
                        <MenuIconNav></MenuIconNav>
                    </Col>
                    <Col xs={11} sm={11} md={10} lg={7} xl={7} xxl={7} style={{
                        marginTop: "10rem"
                    }}>
                        <Row gutter={[5, 0]}>


                            {
                                currentNotice.visible ?
                                    <>
                                        <Col span={12}>
                                            <Button types={"text"} size={"small"} value={"< 뒤로가기"} onClick={closeNotice}>

                                            </Button>
                                        </Col>
                                        <Col span={12}>
                                            <ReadNoticeForm title={currentNotice.title} region={currentNotice.region} nor={currentNotice.nor} dov={currentNotice.dov} tov={currentNotice.tov} dod={currentNotice.dod}>

                                            </ReadNoticeForm>
                                        </Col>
                                        <Col span={12} style={{
                                            padding: "1rem",
                                            minHeight: "15rem",
                                            backgroundColor: "#EFEFEF4D"
                                        }}>
                                            {currentNotice.content}
                                        </Col>
                                        <Col span={12} justify={"flex-end"} style={{
                                            // backgroundColor : "#EFEFEF4D",
                                            padding: "1rem"
                                        }}>
                                            <Button value={"신청하기"} types={"primary"} onClick={onApplyBtnClick}></Button>
                                        </Col>
                                    </>
                                    :
                                    <>
                                        <Col span={12}>
                                            <span style={{
                                                fontSize: "1.2rem"
                                            }}>공고글 리스트</span>

                                        </Col>
                                        <Col span={12}>
                                            <TableBox headList={table_head} bodyList={bodyList} border={"bottom"} data={noticeList} primaryKey={"title"} onClick={onTableClick} colgroup={[50,20,15,15]}></TableBox>
                                        </Col>
                                        <Col span={12} justify={"center"}>
                                            <Pagination num={Math.ceil(noticeNum / 6)} onClick={onPaginationClick}></Pagination>
                                        </Col>
                                    </>
                            }

                        </Row>

                    </Col>
                </Row>
            </ContentLayout>
        </>
    )
}

export default memo(HomeContent)