/**
 * @author : chaeeun
 * @Date : 2021-02-16 23:47:36
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-05 05:21:09
 */

import React from 'react'
import ContentLayout from '../../../../layout/Content'
import Col from '../../../../layout/Grid/Column'
import Row from '../../../../layout/Grid/Row'
import Typo from '../../../atoms/Typography'
import UserCard from '../../../../containers/redux/components/UserCard'
import TableBox from "../../../atoms/TableBox"
import Button from '../../../atoms/Button'
import DateSelector from '../../../atoms/DateSelector'
import RadioBox from '../../../atoms/RadioButton'
import MypageNav from "../../../molecules/MypageNav"
import { useHistory } from 'react-router-dom'
import DeleteCanCelApplyForm from '../DeleteCancelApplyForm'
import Modal from '../../../atoms/Modal'
import NoticeModal from '../NoticeModal'
import AllApplicableModal from "../AllApplicableModal"
import FilterApplicableModal from "../FilterPastApplicants"
import CheckBox from '../../../atoms/CheckBox'
import AllPastApplicableModal from '../AllFilterApplicableModal'
import FilterPastApplicants from "../FilterPastApplicants"
const MyPageContent = ({
    //redux user information
    username,
    email,
    role,


    currentApplicants,
    pastApplicants,

    selectedNotice,
    settingDate,
    settingTime,

    numMyApplicants,


    isSelectedNoticeVisible,
    selectedNoticeModal,


    isApplyCancelConfirmVisible,
    confirmApplyCancelModal,

    viewNoticeOnclick,
    cancelApplyOnclick,
    okCancelConfirmOnclick,
    cancelCancelConfirmOnclick,

    isApplyViewAllVisible,
    confirmApplyViewAllModal,
    viewAllApplyOnclick,

    isPastViewFilterVisible,
    PastViewFilterModal,
    filterApplicants,
    isPastViewAllVisible,
    PastViewAllModal,
    viewAllPastOnclick,

    filterDate,
    filterFirstDateOnchange,
    filterSecondDateOnchange,
    filterType,
    FilterTypeOnchange,
    viewPassFilterOnclick,


}) => {
    console.log('filterType')
    console.log(filterType)


    const manage_body_Lists = currentApplicants.slice(0, 2)


    console.log('pastApplicants')
    console.log(pastApplicants)
    console.log(filterApplicants)

    const past_body_Lists = pastApplicants.slice(0, 2)



    const history = useHistory()
    return (
        <>

            <ContentLayout   >
                {/* SECTION   LEFT */}
                <Row>
                    <Col xs={0} sm={0} md={4} span={4}>
                        <Row>
                            <Col span={4} >
                                <Typo size={"2.3rem"} weight={'bold'}>{username}</Typo>
                            </Col>
                        </Row>
                        <Row gutter={[3, 0]}>
                            <Col span={12}>
                                {
                                    (email) ?
                                        <Typo size={"1.1rem"} opacity={'0.5'}>{`${email}  >`} </Typo>
                                        :
                                        <Typo size={"1.1rem"} opacity={'0.5'} cursor={"pointer"} onClick={
                                            () => {
                                                history.push("/profile")
                                            }
                                        }>
                                            {`emil을 인정해 주세요 `}
                                        </Typo>
                                }
                            </Col>
                        </Row>
                        <Row gutter={[15, 0]} style={{ marginTop: '2rem' }}>
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"500"}>로그인 된 카카오계정</Typo>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <UserCard></UserCard>
                            </Col>
                        </Row>
                        <Row gutter={[15, 0]}>
                            <Col span={12}>
                                <MypageNav role={role} />
                            </Col>
                        </Row>
                        <Row gutter={[15, 0]} style={{ margin: '2.5rem 0 0 0 ' }}>
                            <Col span={4}>
                                <Typo size={"1rem"} color={'#707070'} weight={"500"} cursor={'pointer'} >문의하기</Typo>
                            </Col>
                            <Col span={8}>
                                <Typo size={"1rem"} color={'#707070'} weight={"500"} cursor={'pointer'} >업데이트 정보</Typo>
                            </Col>
                        </Row>
                    </Col>
                    {/* !SECTION   LEFT */}



                    {/* SECTION RIGHT */}

                    <Col xs={12} sm={12} md={7.5} span={7.5} offset={0.5}>
                        {/* SECTION 신청봉사내역 */}
                        <Row gutter={[0, 0]} justify={"space-between"} style={{ margin: "2.5rem 0 0 0 " }} >
                            <Col span={6}>
                                <Typo size={"1.2rem"} weight={"bold"} > 신청봉사내역</Typo>
                            </Col>
                            {
                                (currentApplicants.length > 2) ?
                                    <Col span={6} justify={"flex-end"} style={{
                                        paddingRight: ' 5px'
                                    }}>
                                        <Typo cursor={'pointer'} size={"1.1rem"} weight={"500"} onClick={viewAllApplyOnclick}>  전체 신청 보기 {'>'}</Typo>
                                    </Col>
                                    :
                                    null
                            }
                        </Row>

                        <Col span={12}>
                            {
                                (manage_body_Lists).map((lists) => {
                                    // const noticeId = lists.noticeId
                                    const noticeId = 546
                                    const applyId = lists.applyId
                                    let data = Object.assign({
                                        serviceDate: lists.date,
                                        region: lists.region,
                                        result: lists.result,
                                        applyDate: lists.applyDate
                                    }, {})

                                    return (
                                        <>
                                            <Row gutter={[0, 1]} align="flex-start" justify={"space-between"} style={{ marginTop: "10px" }}>
                                                <Col xs={9} sm={10} md={9} lg={9} xl={10} xxl={10} span={10}>
                                                    <TableBox primaryKey={"result"} headList={["봉사일시", "장소", "매칭상태", "신청날짜"]} bodyList={[data]} onClick={() => viewNoticeOnclick(noticeId)} border={"top"}></TableBox>
                                                </Col>

                                                <Col xs={3} sm={2} md={3} lg={3} xl={2} xxl={2} span={2}>
                                                    <Button block size="large" value="신청취소" types={"primary"} onClick={() => cancelApplyOnclick(applyId)} ></Button>
                                                </Col>
                                            </Row>
                                        </>
                                    )
                                })
                            }
                        </Col>
                        {/* !SECTION 신청봉사내역 */}
                        {/* NOTE modal */}
                        <Modal visible={isSelectedNoticeVisible} title={"공고글 보기"}
                            closable={true} maskClosable={true} onClose={selectedNoticeModal.close} size={10}>
                            <NoticeModal selectedNotice={selectedNotice} />
                        </Modal>

                        <Modal headerClose visible={isApplyCancelConfirmVisible}
                            maskClosable={true} onClose={confirmApplyCancelModal.close} size={4} xs={7} sm={7} md={6} lg={6} xl={5} xxl={4}>
                            <DeleteCanCelApplyForm username={username} okCanCelConfirmOnclick={okCancelConfirmOnclick} cancelCanCelConfirmOnclick={cancelCancelConfirmOnclick} />
                        </Modal>

                        <Modal visible={isApplyViewAllVisible}
                            maskClosable={true} closable={true} title={"전체 신청봉사보기"} onClose={confirmApplyViewAllModal.close} size={8} xs={9} sm={9} md={9} lg={9} xl={9} xxl={9}>
                            <AllApplicableModal manage_body_Lists={currentApplicants} viewNoticeOnclick={viewNoticeOnclick} cancelApplyOnclick={cancelApplyOnclick} />
                        </Modal>

                        <Modal visible={isPastViewFilterVisible}
                            maskClosable={true} closable={true} title={"필터기록 보기"} onClose={PastViewFilterModal.close} size={10} xs={10} sm={10} md={9} lg={9} xl={9} xxl={9}>
                            <FilterPastApplicants filterApplicants={filterApplicants} filterType={filterType}
                                FilterTypeOnchange={FilterTypeOnchange} filterDate={filterDate} filterFirstDateOnchange={filterFirstDateOnchange}
                                filterSecondDateOnchange={filterSecondDateOnchange} viewPassFilterOnclick={viewPassFilterOnclick} />
                        </Modal>

                        <Modal visible={isPastViewAllVisible}
                            maskClosable={true} closable={true} title={"전체기록 보기"} onClose={PastViewAllModal.close} size={10} xs={10} sm={10} md={9} lg={9} xl={9} xxl={9}>
                            <AllPastApplicableModal filterApplicants={pastApplicants} />
                        </Modal>

                        {/* SECTION 봉사기록조회 */}
                        <Row gutter={[6, 0]} justify={"space-between"} style={{ margin: '2.5rem 0 0 0 ' }}>
                            <Col span={6}>
                                <Typo size={"1.2rem"} weight={"bold"} > 봉사 기록 조회</Typo>
                            </Col>
                            {
                                (pastApplicants.length > 2) ?
                                    <Col span={6} justify={"flex-end"}>
                                        <Typo cursor={'pointer'} size={"1.1rem"} weight={"500"} onClick={viewAllPastOnclick}> 전체 기록 보기 {'> '}</Typo>
                                    </Col>
                                    :
                                    null
                            }
                        </Row>

                        <Row gutter={[4, 5]} align="center">
                            <Col xs={8} sm={8} md={8} lg={8} xl={6} xxl={5} justify={"space-between"} align={"center"} style={{
                                height: "43px",
                                backgroundColor: "#f5f5f5",
                                borderBottom: "1px solid #ccd4e0",
                                borderTop: " 2px solid #000000",
                            }}>
                                <Row gutter={[0, 0]} justify={"space-around"} style={{
                                    fontSize: "0.8rem",
                                }}>
                                    <Col span={4}>
                                        <DateSelector max={`${filterDate.secondDate}` || null} defaultValue={filterDate.firstDate} onChange={filterFirstDateOnchange} radius={'true'} block size={"small"} border />
                                    </Col>
                                    <Col span={4}>
                                        <DateSelector min={`${filterDate.firstDate}` || null} defaultValue={filterDate.secondDate} onChange={filterSecondDateOnchange} radius={'true'} block size={"small"} border />
                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={5} span={5} justify={"center"} align={"center"} style={{
                                height: "43px",
                                backgroundColor: "#f5f5f5",
                                borderLeft: " 1.2px solid #000000",
                                borderBottom: "1px solid #ccd4e0",
                                borderTop: " 2px solid #000000",
                            }}>

                                {/* <RadioBox name="gender" options={["노력봉사", "말벗봉사"]} /> */}
                                <CheckBox justify={'space-around'} defaultChecked={filterType} onChange={FilterTypeOnchange} options={['노력봉사', '말벗봉사']} />
                            </Col>
                            <Col xs={0} sm={0} md={0} lg={12} xl={2} xxl={2} span={2} >
                                <Button block size="large" value="조회하기" types={"primary"} onClick={viewPassFilterOnclick}></Button>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={0} xl={0} xxl={0} span={0} style={{
                                marginTop: "0.5rem",
                            }} >
                                <Button block size="default" value="조회하기" types={"primary"} onClick={viewPassFilterOnclick}></Button>
                            </Col>
                        </Row>


                        <Row gutter={[0, 0]} align="center" style={{ margin: '0.8rem 0 0 0 ' }}>
                            <TableBox headList={["봉사일시", "장소", "봉사분야", "신청날짜"]} bodyList={past_body_Lists} border={"top"}></TableBox>
                        </Row>

                        {/* !SECTION 봉사기록조회 */}
                    </Col>
                </Row>
                {/* !SECTION RIGHT */}

            </ContentLayout>
        </>
    )

}

export default MyPageContent;