/**
 * @author :  chaeeun
 * @date : 2021-03-14 02:40:15
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-05 03:44:50
 */

import React from 'react'

import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Button from "../../../atoms/Button"
import TableBox from '../../../atoms/TableBox'

const DeleteCanCelApplyForm = ({ manage_body_Lists, viewNoticeOnclick, cancelApplyOnclick }) => {


    return (
        <>
            <Row gutter={[7, 0]} style={{
                maxHeight: '600px',
                overflow: 'auto',

            }}>

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
            </Row>
        </>
    )
}

export default DeleteCanCelApplyForm