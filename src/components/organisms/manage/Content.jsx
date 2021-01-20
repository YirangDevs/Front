/** 
 * @author: chaeeun 
 * @Date 2020-12-09 01:08:49 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-01-18 05:52:09
 */
import React, { useState } from "react"
import Row from "../../../layout/Grid/Row/index"
import Col from "../../../layout/Grid/Column/index"
import ContentLayout from "../../../layout/Content/index"
import TableButton from '../../molecules/TableButton/index'
import MenuNav from '../../../components/molecules/MenuNav/index'
import MenuInfo from '../../../components/molecules/MenuInfo/index'

import '../../../css/manage.css'; // 이거 information만들면 지우기






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
    const NoticeTableHeadLists = [" ", "제목", "봉사날짜", "봉사지역"]
    const noticeLists = lists || [{ id: null, title: "게시글이없습니다.", dov: null, region: null }]


    return (
        <>
            {/*manage Page 의 Content를 감싸는 Container */}
            <ContentLayout>
                {/*<Col span = {7} > = notice 영역을 감사는 layout (left) */}
                {/*<Col span = {5} > = menu 영역을 감사는 layout (right) */}
                <Row gutter={[10, 10]}>
                    <Col span={7}>
                        {/* information */}
                    </Col>
                </Row>
                <Row gutter={[10, 10]}>
                    <Col span={8}>
                        {
                            (noticeLists) ?
                                (noticeLists).map((lists) => {
                                    let data = Object.assign({
                                        id: lists.id,
                                        title: lists.title,
                                        dov: lists.dov,
                                        region: lists.region
                                    }, {})

                                    return (
                                        <>
                                            {console.log(data)}
                                            <TableButton
                                                key={lists.id}
                                                headList={NoticeTableHeadLists}
                                                bodyList={[data]}
                                                primaryKey={"title"}
                                                noticeClick={noticeClick}
                                                noticeId={data.id}
                                                updateCLick={updateClick}
                                                deleteClick={deleteClick}
                                            >
                                            </TableButton>
                                        </>
                                    )
                                })
                                : null

                        }
                    </Col>
                    <Col span={4}>
                        <MenuNav
                            title="메뉴"
                            firstMenu="메인화면으로 가기"
                            secondMenu="봉사 공고글 관리"
                            thirdMenu="봉사자 데이터 업로드"
                            firstLink="/"
                            secondLink="/manage"
                            thirdLink="/Seniors"
                        ></MenuNav>
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