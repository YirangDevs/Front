/** 
 * @author: chaeeun 
 * @Date 2020-12-09 01:08:49 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-01-24 01:14:42
 */
import React, { useState } from "react"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import ContentLayout from "../../../../layout/Content"
import TableButton from '../../../molecules/TableButton'
import MenuNav from '../../../molecules/MenuNav'
import TableBox from '../../../atoms/TableBox'
import Button from '../../../atoms/Button'
import Modal from '../../../atoms/Modal'
import EditForm from '../EditForm'
// 이거 tableButton 다만들면 지우기






const ManageContent = ({
    setListTotalNum,
    setPagingNum,
    selectNotice,
    setSelectNotice,
    updateNotice,
    setUpdateNotice,
    setDeleteId,
    lists,
    setLists,
    getNotice,
    updateClick,
    deleteClick,
    pagingClick,
    updateFunction,
    logoutEvent

}) => {
    // notice header
    const NoticeTableHeadLists = [" ", "제목", "봉사날짜", "봉사지역"]
    // list를 못받아올 경우 
    const noticeLists = lists || [{ id: null, title: "게시글이없습니다.", dov: null, region: null }]

    //modal handling
    const [isReadVisible, setIsReadVisible] = useState(false)
    const [isEditVisible, setIsEditVisible] = useState(false)
    const read = {
        show() {
            setIsReadVisible(true)
        },
        close() {
            setIsReadVisible(false)
        }
    }
    const edit = {
        show() {
            setIsEditVisible(true)
        },
        close() {
            setIsEditVisible(false)
        }
    }


    return (
        <>
            {/*manage Page 의 Content를 감싸는 Container */}
            <ContentLayout style={{
                padding: "1rem"
            }}>
                {/*<Col span = {7} > = notice 영역을 감사는 layout (left) */}
                {/*<Col span = {5} > = menu 영역을 감사는 layout (right) */}
                <Row gutter={[10, 10]}>
                    <Col xs={12} sm={12} md={9} lg={8}>
                        {/* information */}
                    </Col>
                </Row>
                <Row gutter={[10, 10]}>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        {
                            (noticeLists)
                                ?
                                (noticeLists).map((lists) => {
                                    let data = Object.assign({
                                        id: lists.id,
                                        title: lists.title,
                                        dov: lists.dov,
                                        region: lists.region
                                    }, {})


                                    return (
                                        <>
                                            <Row gutter={[4, 0]} align="center">
                                                <Col xs={9} sm={10} md={9} lg={10}>
                                                    <TableBox key={lists.id} headList={NoticeTableHeadLists}
                                                        bodyList={[data]} primaryKey={"title"} onClick={read.show} ></TableBox>
                                                </Col>
                                                <Col xs={2} sm={2} md={3} lg={2}>
                                                    <Row gutter={[0.5, 5]}>
                                                        <Col xs={1} span={12}>
                                                            <Button block size="large" value="수정" types={"primary"} onClick={edit.show}></Button>
                                                        </Col>
                                                        <Row>
                                                            <Col span={12} xs={12}>
                                                                <Modal visible={isEditVisible}
                                                                    closable={true} maskClosable={false} onClose={edit.close} size={10}>
                                                                    <EditForm updateNotice={updateNotice} noticeId={data.id} getNotice={getNotice}
                                                                        setUpdateNotice={setUpdateNotice} updateClick={updateClick} updateFunction={updateFunction} ></EditForm>
                                                                </Modal>

                                                            </Col>
                                                        </Row>
                                                        <Col xs={1} span={12}>
                                                            <Button block size="large" value="삭제" types={"primary"} ></Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={12} xs={12}>
                                                    <Modal visible={isReadVisible}
                                                        closable={true} maskClosable={true} onClose={read.close} size={10}>
                                                        <div > 모오오 닫ㄹ아아알</div>
                                                        <div > 모오오 닫ㄹ아아알</div>
                                                        <div > 모오오 닫ㄹ아아알</div>
                                                    </Modal>
                                                </Col>
                                            </Row>

                                        </>
                                    )
                                })
                                : null

                        }
                    </Col>
                    <Col xs={0} sm={0} md={1} lg={4} >
                        <Row gutter={[5, 0]}>
                            <Col span={12} style={{
                                fontFamily: "NotoSansCJKKR",
                                fontSize: "1.125rem",
                                fontWeight: "bold",
                                color: "#707070"
                            }}>메뉴
                            </Col>
                            <Col span={12}>
                                <MenuNav />
                            </Col>
                        </Row>
                    </Col>


                </Row>


            </ContentLayout>
        </>
    )
}

export default ManageContent;