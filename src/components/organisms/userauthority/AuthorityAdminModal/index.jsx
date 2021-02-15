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
    modalClose,
    selectedUser
}) => {
    return (
        <>
        <Row>
            <Col span={12}>{selectedUser.authority=="관리자"||selectedUser.authority=="봉사자"?
                <Label>"{selectedUser.userName}"님의 "{selectedUser.authority}" 권한을 "{selectedUser.authority=="관리자"?"봉사자":"관리자"}"로 정말 바꾸시겠습니까?</Label>
                :<Label>"{selectedUser.userName}"님의 슈퍼관리자 권한은 수정할 수 없습니다.</Label>
            }</Col>
        </Row>
        {selectedUser.authority=="관리자"||selectedUser.authority=="봉사자"?
        <Row gutter={[20,5]}>
            <Col span={6}><Button value="확인" types="primary" onClick={authorityChange} block></Button></Col>
            <Col span={6}><Button value="취소" types="primary" onClick={modalClose} block></Button></Col>
        </Row>
        :null}
            
            
            
        </>
    )
}

export default AuthorityAdminModal