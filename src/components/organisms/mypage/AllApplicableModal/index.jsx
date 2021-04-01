/**
 * @author :  chaeeun
 * @date : 2021-03-14 02:40:15
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-02 01:20:03
 */

import React, { memo } from 'react'

import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Button from "../../../atoms/Button"
import TableBox from '../../../atoms/TableBox'

const DeleteCanCelApplyForm = ({ manage_body_Lists, viewNoticeOnclick, cancelApplyOnclick }) => {


    return (
        <>
            <Row gutter={[7, 0]} style={{
                maxHeight: '600px',
                overflow: 'scroll',

            }}>

                <Col span={12}>
                    {
                        (manage_body_Lists).map((lists) => {
                            // const noticeId = lists.noticeId
                            const noticeId = 546
                            let data = Object.assign({
                                serviceDate: lists.date,
                                region: lists.region,
                                result: lists.result,
                                applyDate: lists.applyDate
                            }, {})

                            return (
                                <>
                                    <Row gutter={[4, 0]} align="center">
                                        <Col xs={9} sm={9} md={9} lg={9} span={9}>
                                            <TableBox headList={["봉사 일시", "장소", "매칭상태", "신청 날짜"]} bodyList={[data]} border={"top"}></TableBox>
                                        </Col>
                                        <Col xs={3} sm={3} md={3} lg={3} span={3}>
                                            <Row gutter={[0.5, 5]}>
                                                <Col xs={12} span={12}>
                                                    <Button block size="large" value="공고글 보기" types={"primary"} onClick={() => viewNoticeOnclick(noticeId)}></Button>
                                                </Col>

                                                <Col xs={12} span={12}>
                                                    <Button block size="large" value="신청취소" types={"primary"} onClick={cancelApplyOnclick} ></Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
        </>
    )
}

export default DeleteCanCelApplyForm