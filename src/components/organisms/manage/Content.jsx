/** 
 * @author: chaeeun 
 * @Date 2020-12-09 01:08:49 
 * @Last Modified by: euncherry
 * @Last Modified time: 2020-12-21 16:41:49
 */
import React from "react"
import Row from "../../../layout/Grid/Row/index"
import Col from "../../../layout/Grid/Column/index"
import ContentLayout from "../../../layout/Content/index"
import TableButton from '../../molecules/TableButton/index'
import MenuNav from '../../../components/molecules/MenuNav/index'
import MenuInfo from '../../../components/molecules/MenuInfo/index'
import '../../../css/manage.css'; // 이거 information만들면 지우기
// 이거 tableButton 다만들면 지우기


const NoticeTableHeadLists = [" ", "제목", "봉사날짜", "봉사지역"]


const Content = ({
    setListTotalNum,
    setPagingNum,
    selectNotice,
    setSelectNotice,
    updateNotice,
    setUpdateNotice,
    setDeleteId,
    lists,
    setLists,
    noticeClick,
    updateClick,
    deleteClick,
    pagingClick,
    updateFunction,
    logoutEvent

}) => {

    return (
        <>
            {/*manage Page 의 Content를 감싸는 Container */}
            <ContentLayout>
                {/*<Col span = {7} > = notice 영역을 감사는 layout (left) */}
                {/*<Col span = {5} > = menu 영역을 감사는 layout (right) */}
                <Row gutter={[10, 10]}>
                    <Col span={7}>
                    </Col>
                </Row>
                <Row gutter={[10, 10]}>
                    <Col span={8}>
                        {
                            (lists).map((lists) => {
                                let data = Object.assign({
                                    id: lists.id,
                                    title: lists.title,
                                    dov: lists.dov,
                                    region: lists.region
                                }, {})
                                return (
                                    <>
                                        <TableButton
                                            headList={NoticeTableHeadLists}
                                            bodyList={[data]}
                                            primaryKey={"title"}
                                            noticeClick={noticeClick}
                                            noticeId={data.id}
                                        >
                                        </TableButton>
                                    </>
                                )
                            })

                        }
                    </Col>
                    <Col span={4}>

                        <MenuInfo
                            userName="리덕스"
                            ModeKey="MODE"
                            ModeValue="리덕스"
                            LoginKey="LOGIN"
                            LoginValue="LOGOUT"
                            logoutEvent={logoutEvent}
                        ></MenuInfo>
                    </Col>
                </Row>


            </ContentLayout>
        </>
    )
}

export default Content;