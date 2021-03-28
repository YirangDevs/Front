/**
 * @author : chaeeun
 * @Date : 2021-02-16 23:47:36
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-18 19:59:04
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

const MyPageContent = ({
    //redux user information
    username,
    email,
    role,


}) => {
    console.log(username)
    console.log(email)
    console.log(role)
    const manage_basic_head = ["봉사 일시", "장소", "매칭상태", "참고"]
    const null_table_head = ["-"]
    //봉사관리 body api에서 받아오면 수정 
    const manage_hard_body = [
        { date: '2021-07-01', region: '달서구', result: '매칭 대기', refer: "참고사항" },
        { date: '2021-07-03', region: '서구', result: '매칭 완료', refer: "-" }]

    //받아오는 body가 없을 경우! 
    //const hard_body = null

    const manage_table_head = (manage_hard_body) ? manage_basic_head : null_table_head
    const manage_body_Lists = manage_hard_body || [{ date: "신청한 봉사가 없습니다. " }]


    const typeoptions = ["노력봉사", "말벗봉사"];

    const check_basic_head = ["봉사일시", "장소", "봉사분야", "기타"]

    const check_hard_body = [
        { date: '2021-07-01', region: '달서구', tpye: '재가봉사', refer: "참고사항" },
        { date: '2021-07-03', region: '서구', tpye: '재가봉사', refer: "-" }]

    const check_table_head = (check_hard_body) ? check_basic_head : null_table_head
    const check_body_Lists = check_hard_body || [{ date: "조회할 봉사가 없습니다. " }]

    const history = useHistory()
    return (
        <>

            <ContentLayout   >
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
                                            {`emil을 인정해 주세요  >`}
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




                    {/* 오른 쪽 */}
                    <Col xs={12} sm={12} md={7.5} span={7.5} offset={0.5}>
                        <Row gutter={[0, 0]} justify={"space-between"} style={{ margin: "2.5rem 0 0 0 " }} >
                            <Col span={6}>
                                <Typo size={"1.2rem"} weight={"500"} > 신청봉사 관리</Typo>
                            </Col>
                            <Col span={6} justify={"flex-end"}>
                                <Typo size={"1.1rem"} weight={"500"} >  전체 신청 보기 {'>'}</Typo>
                            </Col>
                        </Row>

                        <Row gutter={[0, 0]}>
                            <Col span={12}>
                                {
                                    (manage_body_Lists).map((lists) => {
                                        let data = Object.assign({
                                            date: lists.date,
                                            region: lists.region,
                                            result: lists.result,
                                            refer: lists.refer
                                        }, {})

                                        return (
                                            <>
                                                <Row gutter={[4, 0]} align="center">
                                                    <Col xs={9} sm={9} md={9} lg={9} span={9}>
                                                        <TableBox headList={manage_table_head} bodyList={[data]} border={"top"}></TableBox>
                                                    </Col>

                                                    <Col xs={3} sm={3} md={3} lg={3} span={3}>
                                                        <Row gutter={[0.5, 5]}>
                                                            <Col xs={12} span={12}>
                                                                <Button block size="large" value="공고글 보기" types={"primary"}></Button>
                                                            </Col>

                                                            <Col xs={12} span={12}>
                                                                <Button block size="large" value="신청취소" types={"primary"} ></Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </>
                                        )
                                    })
                                }
                            </Col>

                            <Row gutter={[6, 0]} justify={"space-between"} style={{ margin: '2.5rem 0 0 0 ' }}>
                                <Col span={6}>
                                    <Typo size={"1.2rem"} weight={"500"} > 봉사 기록 조회</Typo>
                                </Col>
                                <Col span={6} justify={"flex-end"}>
                                    <Typo size={"1.1rem"} weight={"500"} > 전체 기록 보기 {'>'}</Typo>
                                </Col>
                            </Row>

                            <Row gutter={[4, 5]} align="center" >
                                <Col xs={8} sm={8} md={8} lg={7} xl={6} xxl={5} justify={"space-between"} align={"center"} style={{
                                    height: "3.4rem",
                                    backgroundColor: "#f5f5f5",
                                    borderBottom: "1px solid #ccd4e0",

                                    borderTop: " 2px solid #000000",
                                }}>
                                    <Row gutter={[0, 0]} justify={"space-around"} style={{
                                        fontSize: "0.8rem",
                                    }}>
                                        <Col span={4}>
                                            <DateSelector block size={"small"} border />
                                        </Col>
                                        <Col span={4}>
                                            <DateSelector block size={"small"} border />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={5} xl={4} xxl={5} span={5} justify={"center"} align={"center"} style={{
                                    height: "3.4rem",
                                    backgroundColor: "#f5f5f5",
                                    borderLeft: " 1.2px solid #000000",
                                    borderBottom: "1px solid #ccd4e0",
                                    borderTop: " 2px solid #000000",
                                }}>

                                    <RadioBox name="gender" options={typeoptions} />

                                </Col>
                                <Col xs={0} sm={0} md={0} lg={12} xl={2} xxl={2} span={2} >
                                    <Button block size="large" value="조회하기" types={"primary"}></Button>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={0} xl={0} xxl={0} span={0} style={{
                                    marginTop: "0.5rem",
                                }} >
                                    <Button block size="default" value="조회하기" types={"primary"}></Button>
                                </Col>
                            </Row>

                            <Row gutter={[0, 0]} align="center" style={{ margin: '0.8rem 0 0 0 ' }}>
                                <TableBox headList={check_table_head} bodyList={check_body_Lists} border={"top"}></TableBox>
                            </Row>
                        </Row>
                    </Col>
                </Row>


            </ContentLayout>
        </>
    )

}

export default MyPageContent;