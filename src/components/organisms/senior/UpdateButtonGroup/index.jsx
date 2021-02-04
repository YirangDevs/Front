import React from "react"
import FileBox from "../../../atoms/FileBox"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Button from "../../../atoms/Button"
import ExcelPreview from "../../../../pages/ExcelPreview"
import Modal from "../../../atoms/Modal"


const UpdateButtonGroup = ({uploadFile, uploadOnClick, addButton, editDeleteButton, isModalOpen, excelData, closeModal, postSeniorsOnClick}) => {

    return(
        <>
            <FileBox name="aFile" accept=".xls, .xlsx" onChange={uploadFile}/>
            <Row gutter={[5,3]}>
                <Col span={4}>
                    <Button types={"primary"} value="업로드" onClick={uploadOnClick} block/>
                </Col>
                <Col span={4}>
                    <Button types={"primary"} value="추가" onClick={addButton} block/>
                </Col>
                <Col span={4}>
                    <Button types={"primary"} value="수정/삭제" onClick={editDeleteButton} block/>
                </Col>
            </Row>
        <Modal visible={isModalOpen} onClose={closeModal} size={12}
            children={<ExcelPreview excelData={excelData} closeModal={closeModal} postSeniorsOnClick={postSeniorsOnClick}/>} 
            title="업로드 할 엑셀 데이터"/>
        </>
    )
}

export default UpdateButtonGroup