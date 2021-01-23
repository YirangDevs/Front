/** 
 * @author: chaeeun 
 * @Date 2020-12-09 01:08:49 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-01-23 03:40:59
 */
import React from "react"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import ContentLayout from "../../../../layout/Content"
import TableButton from '../../../molecules/TableButton'
import '../../../../css/manage.css';
import MenuNav from "../../../../containers/redux/components/MenuNav"; // 이거 information만들면 지우기
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

                                                updateNotice={updateNotice}
                                                updateFunction={updateFunction}
                                            >
                                            </TableButton>

                                        </>
                                    )
                                })
                                : null

                        }
                    </Col>
                    <Col span={4}>
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