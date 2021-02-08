import React from "react"
import Button from "../../../atoms/Button"
import Col from "../../../../layout/Grid/Column"
import Row from "../../../../layout/Grid/Row"
import styled from "styled-components"

const Label = styled.span`
  font-weight: bold;
`

const AuthorityAdminModal = ({
    authorityChange,
    authorityModalText,
    authorityTargetText,
    modalClose
}) => {

    return (
        <>
        <Row>
            <Col span={12}>{authorityModalText=="관리자"||authorityModalText=="봉사자"?
                <Label>"홍길동"님의 "{authorityModalText}" 권한을 "{authorityTargetText}"로 정말 바꾸시겠습니까?</Label>
                :<Label>"홍길동"님의 슈퍼관리자 권한은 수정할 수 없습니다.</Label>
            }</Col>
        </Row>
        <Row gutter={[20,5]}>
            <Col span={6}><Button value="확인" types="primary" onClick={authorityChange} block></Button></Col>
            <Col span={6}><Button value="취소" types="primary" onClick={modalClose} block></Button></Col>
        </Row>
            
            
            
        </>
    )
}

export default AuthorityAdminModal