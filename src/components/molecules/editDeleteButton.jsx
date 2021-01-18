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

const EditDeleteButton = ({editOnClick, deleteOnClick}) => {
    return(
        <>
        <ButtonWrapper>
            <Row gutter={[0,3]}>
                <Col span={6}>
                    <Button theme="black" value="수정" onClick={editOnClick} round block/>
                </Col>
                <Col span={6}>
                    <Button theme="black" value="삭제" onClick={deleteOnClick} round block/>
                </Col>
            </Row>
        </ButtonWrapper>
        </>
    )
}

export default EditDeleteButton