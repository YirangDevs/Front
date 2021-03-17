/**
 * @author :  chaeeun
 * @date : 2021-03-14 02:40:15
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-14 04:02:28
 */

import React from 'react'
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Typo from "../../../atoms/Typography"
import { MdErrorOutline } from "react-icons/md";
import Button from "../../../atoms/Button"
const SexConfirmModal = ({ username, sex, editSexForm, confirmModal }) => {
    const settingSex = (sex) => {
        if (sex === 'FEMALE') return '여성';
        if (sex === 'MALE') return '남성';
    }

    return (
        <>
            <Row gutter={[5, 0]}>

                <Col justify={'center'} span={12}>
                    <MdErrorOutline color={'#ff4d4f'} size={40} />
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo weight={'bold'} size={"1.4rem"}>성별은 한번 설정하면 수정할 수 없습니다.</Typo>
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo>{username}님이 선택하신 성별은</Typo>
                    <Typo weight={'bold'} color={'#ff4d4f'}> "{settingSex(sex)}"</Typo>
                    <Typo>입니다.</Typo>
                </Col>
                <Col justify={'center'} span={12}>
                    <Typo>성별이 맞다면 확인을눌러 성별을 설정해주세요.</Typo>
                </Col>
                <Col justify={'center'} span={12} style={{ borderTop: "1px solid black" }}>

                </Col>
            </Row>
            <Row justify={"space-evenly"}>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} onClick={confirmModal.close} value={'취소'} />
                </Col>
                <Col span={3} justify={'center'}>
                    <Button block types={"primary"} onClick={editSexForm.close} value={'확인'} />
                </Col>
            </Row>
        </>
    )
}

export default SexConfirmModal