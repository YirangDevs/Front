import React from "react"
import styled from "styled-components"
import FileBox from "../../atoms/FileBox/index"
import Row from "../../../layout/Grid/Row/index"
import Col from "../../../layout/Grid/Column/index"
import Button from "../../atoms/Button/index"
import ExcelPreview from "../../../pages/ExcelPreview/index"


const VolunteerButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const UpdateButtonGroup = ({uploadFile, uploadOnClick, addButton, editDeleteButton, isModalOpen, excelData, closeModal, postSeniorsOnClick}) => {
    return(
        <>
        <VolunteerButtonWrapper>
            <FileBox name="aFile" accept=".xls, .xlsx" onChange={uploadFile}/>
            {/*//<input type="file" id="selectedFile" name="aFile" accept=".xls,.xlsx" onChange={openModal}/>
            <FunctionButton width="29.5%" height="3rem" value="업로드" onClick={uploadOnClick}/>
            <FunctionButton width="29.5%" height="3rem" value="추가" onClick={addButton}/>
            <FunctionButton width="29.5%" height="3rem" value="수정/삭제" onClick={editDeleteButton}/>
            <ExcelPreview isModalOpen={isModalOpen} excelData={excelData} closeModal={closeModal} postSeniorsOnClick={postSeniorsOnClick}></ExcelPreview> */}
            <Row>
                <Col span={4}>
                    <Button value="업로드" onClick={uploadOnClick} block/>
                </Col>
                <Col span={4}>
                    <Button value="추가" onClick={addButton} block/>
                </Col>
                <Col span={4}>
                    <Button value="수정/삭제" onClick={editDeleteButton} block/>
                </Col>
            </Row>
        </VolunteerButtonWrapper>
        <ExcelPreview isModalOpen={isModalOpen} excelData={excelData} closeModal={closeModal} postSeniorsOnClick={postSeniorsOnClick}></ExcelPreview>
        </>
    )
}

export default UpdateButtonGroup