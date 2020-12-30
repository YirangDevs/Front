import React from "react"
import styled from "styled-components"
import Row from "../../layout/Grid/Row/index"
import Col from "../../layout/Grid/Column/index"
import Button from "../atoms/Button/index"


const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const ModalButtonGroup = ({postSeniorsOnClick, closeModal}) => {
    return(
        <>
        <ButtonWrapper>
            <Row>
                <Col span={6}>
                    <Button value="확인" onClick={postSeniorsOnClick} block/>
                </Col>
                <Col span={6}>
                    <Button value="취소" onClick={closeModal} block/>
                </Col>
            </Row>
        </ButtonWrapper>
        </>
    )
}

export default ModalButtonGroup