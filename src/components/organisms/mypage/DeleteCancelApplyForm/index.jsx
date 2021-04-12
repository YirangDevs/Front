/**
 * @author :  chaeeun
 * @date : 2021-03-14 02:40:15
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-30 20:22:03
 */

import React from 'react'
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Typo from "../../../atoms/Typography"
import { MdErrorOutline } from "react-icons/md";
import Button from "../../../atoms/Button"
const DeleteCanCelApplyForm = ({ username, okCanCelConfirmOnclick, cancelCanCelConfirmOnclick }) => {


    return (
        <>
            <Row gutter={[7, 0]}>

                <Col justify={'center'} span={12}>
                    <MdErrorOutline color={'#ff4d4f'} size={40} />
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo weight={'bold'} size={"1.4rem"}>{username}님 신청취소하시겠습니까?</Typo>
                </Col>
                <Col span={12} justify={'center'} >
                    <Typo weight={'bold'} color={'#ff4d4f'}>신청취소시 -설명-</Typo>
                </Col>

                <Col justify={'center'} span={12}>
                    <Typo>신청취소를 원하시면 확인을 눌러주세요.</Typo>
                </Col>
                <Col justify={'center'} span={12} style={{ borderTop: "1px solid black" }}>

                </Col>
            </Row>
            <Row justify={"space-evenly"} gutter={[10, 0]}>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} onClick={cancelCanCelConfirmOnclick} value={'취소'} />
                </Col>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} onClick={okCanCelConfirmOnclick} value={'확인'} />
                </Col>
            </Row>
        </>
    )
}

export default DeleteCanCelApplyForm