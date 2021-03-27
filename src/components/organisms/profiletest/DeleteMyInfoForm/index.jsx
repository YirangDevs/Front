/**
 * @author :  chaeeun
 * @date : 2021-03-14 02:40:15
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-15 05:55:47
 */

import React from 'react'
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Typo from "../../../atoms/Typography"
import { MdErrorOutline } from "react-icons/md";
import Button from "../../../atoms/Button"
const SexConfirmModal = ({ username, okDeleteConfirmOnclick, cancelDeleteConfirmOnclick }) => {


    return (
        <>
            <Row gutter={[7, 0]}>

                <Col justify={'center'} span={12}>
                    <MdErrorOutline color={'#ff4d4f'} size={40} />
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo weight={'bold'} size={"1.4rem"}>{username}님 탈퇴하시겠습니까?</Typo>
                </Col>
                <Col span={12} justify={'center'} >
                    <Typo weight={'bold'} color={'#ff4d4f'}>탈퇴 시 정보  및 봉사신청이 모두 삭제되며 복구되지 않습니다.</Typo>
                </Col>

                <Col justify={'center'} span={12}>
                    <Typo>탈퇴를 원하시면 확인을 눌러주세요.</Typo>
                </Col>
                <Col justify={'center'} span={12} style={{ borderTop: "1px solid black" }}>

                </Col>
            </Row>
            <Row justify={"space-evenly"} gutter={[10, 0]}>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} onClick={cancelDeleteConfirmOnclick} value={'취소'} />
                </Col>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} onClick={okDeleteConfirmOnclick} value={'확인'} />
                </Col>
            </Row>
        </>
    )
}

export default SexConfirmModal