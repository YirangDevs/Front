/** 
 * @author: chaeeun 
 * @Date 2020-12-09 01:08:49 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-08 19:02:27
 */
import React from "react"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import ContentLayout from "../../../../layout/Content"
import MenuNav from '../../../molecules/MenuNav'
import TableBox from '../../../atoms/TableBox'
import Button from '../../../atoms/Button'
import Modal from '../../../atoms/Modal'
import ReadForm from '../ReadForm'
import EditForm from '../EditForm'
import UserCard from "../../../../containers/redux/components/UserCard"
import Pagination from "../../../atoms/Pagination"
import Typo from "../../../atoms/Typography"





const ManageContent = ({
    listTotalNum,
    setListTotalNum,
    setPagingNum,
    selectNotice,
    setSelectNotice,
    updateNotice,
    setUpdateNotice,
    setDeleteId,
    lists,
    setLists,

    setNotice,
    completeEdit,
    deleteClick,
    pagingClick,
    updateFunction,
    logoutEvent,

    toReadHandle,
    toEditHandle,

    isReadVisible,
    isEditVisible,
    readModal,
    editModal,
    isUrgentVisible,
    UrgentModal,

    isUrgentIcon,


    urgentIconOnchange,
    updateUrgentTitle,
    urgentTitle,
    getOriginalTitleOnchange,
    isOriginal,
    okUrgentOnclick,
}) => {
    // notice header
    const NoticeTableHeadLists = [" ", "제목", "봉사날짜", "봉사지역"]
    // list를 못받아올 경우 
    const noticeLists = lists || [{ id: null, title: "게시글이없습니다.", dov: null, region: null }]

    return (
        <>
            <ContentLayout>
                {/*<Col span = {7} > = notice 영역을 감사는 layout (left) */}
                {/*<Col span = {5} > = menu 영역을 감사는 layout (right) */}
                <Row gutter={[10, 10]}>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        {/* information */}
                    </Col>
                </Row>
                <Row gutter={[10, 10]} justify={"space-between"}>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Row>
                            <Col span={12}>
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
                                                    <Row key={lists.id} gutter={[4, 0]} align="center">
                                                        <Col xs={10} sm={10} md={9} lg={10} xl={10}>
                                                            <TableBox key={lists.id} headList={NoticeTableHeadLists}
                                                                bodyList={[data]} primaryKey={"title"} onClick={() => toReadHandle(data.id)} >
                                                            </TableBox>
                                                        </Col>

                                                        <Col xs={2} sm={2} md={3} lg={2} xl={2}>
                                                            <Row gutter={[0.5, 5]}>
                                                                <Col xs={12} span={12}>
                                                                    <Button block size="large" value="수정" types={"primary"} key={data.id} onClick={() => toEditHandle(data.id)}></Button>
                                                                </Col>

                                                                <Col xs={12} span={12}>
                                                                    <Button block size="large" value="삭제" types={"primary"} ></Button>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col span={12}>

                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col span={12} xs={12}>
                                                            <Modal visible={isReadVisible}
                                                                closable={true} maskClosable={true} onClose={readModal.close} size={10}>
                                                                <ReadForm isOriginal={isOriginal} updateUrgentTitle={updateUrgentTitle} urgentIconOnchange={urgentIconOnchange} selectNotice={selectNotice}
                                                                    isUrgentVisible={isUrgentVisible} UrgentModal={UrgentModal} urgentTitle={urgentTitle}
                                                                    getOriginalTitleOnchange={getOriginalTitleOnchange}
                                                                    isUrgentIcon={isUrgentIcon} okUrgentOnclick={okUrgentOnclick}></ReadForm>
                                                            </Modal>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col span={12} xs={12}>
                                                            <Modal visible={isEditVisible}
                                                                closable={true} maskClosable={false} onClose={editModal.close} size={10}>
                                                                <EditForm updateNotice={updateNotice} updateFunction={updateFunction} completeEdit={completeEdit}></EditForm>
                                                            </Modal>
                                                        </Col>
                                                    </Row>
                                                </>
                                            )
                                        })
                                        : null

                                }
                            </Col>
                            <Col span={12}>
                                <Pagination num={Math.ceil(listTotalNum / 6)} onClick={pagingClick}></Pagination>
                            </Col>
                        </Row>
                    </Col>






                    <Col xs={0} sm={0} md={3.5} lg={3.5} xl={3.5}>
                        <Row gutter={[10, 0]}>
                            <Col span={12} >
                                <Typo weight={"bold"} size={"1.125rem"} color={"#707070"}>메뉴</Typo>
                            </Col>
                            <Col span={12}>
                                <MenuNav />
                            </Col>
                            <Col span={12}>
                                <UserCard ></UserCard>
                            </Col>
                        </Row>
                    </Col>


                </Row>


            </ContentLayout>
        </>
    )
}

export default ManageContent;