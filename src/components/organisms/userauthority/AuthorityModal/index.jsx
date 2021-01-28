import React from "react"
import Button from "../../../atoms/Button"
import Col from "../../../../layout/Grid/Column"
import Row from "../../../../layout/Grid/Row"
import styled from "styled-components"

const Label = styled.span`
  font-weight: bold;
  padding-bottom: 30px;
`

const AuthorityModal = ({
    authorityChange,
    modalClose
}) => {

    return (
        <>
        <Row>
            <Col span={12}><Label>"홍길동"님의 "관리자" 권한을 "봉사자"로 정말 바꾸시겠습니까?</Label></Col>
        </Row>
        <Row gutter={[0,5]}>
            <Col span={6}><Button value="확인" types="primary" onClick={authorityChange} block></Button></Col>
            <Col span={6}><Button value="취소" types="primary" onClick={modalClose} block></Button></Col>
        </Row>
            
            
            
        </>
    )
}

export default AuthorityModal