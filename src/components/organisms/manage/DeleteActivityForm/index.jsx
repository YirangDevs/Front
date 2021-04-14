/**
 * @author :  chaeeun
 * @date : 2021-03-14 02:40:15
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-14 21:29:22
 */

import React from 'react'
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Typo from "../../../atoms/Typography"
import { MdErrorOutline } from "react-icons/md";
import Button from "../../../atoms/Button"

const DeleteMyInfoForm = ({ noticeId, noticeTitle, activityDeleteOKOnclick, activityDeleteModal }) => {


    return (
        <>
            <Row gutter={[7, 0]}>

                <Col justify={'center'} span={12}>
                    <MdErrorOutline color={'#ff4d4f'} size={40} />
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo weight={'bold'} size={"1.4rem"}>게시물을 삭제하시겠습니까?</Typo>
                </Col>
                <Col span={12} justify={'center'} >
                    <Typo weight={'bold'} color={'#ff4d4f'}>게시물을 삭제하면 게시물과 관련된 모든 활동이 삭제됩니다.</Typo>
                </Col>

                <Col justify={'center'} span={12}>
                    <Typo> 게시물 제목 : {noticeTitle} </Typo>
                </Col>
                <Col justify={'center'} span={12} style={{ borderTop: "1px solid black" }}>

                </Col>
            </Row>
            <Row justify={"space-evenly"} gutter={[10, 0]}>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} onClick={activityDeleteModal.close} value={'취소'} />
                </Col>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} onClick={() => activityDeleteOKOnclick(noticeId)} value={'확인'} />
                </Col>
            </Row>
        </>
    )
}

export default DeleteMyInfoForm