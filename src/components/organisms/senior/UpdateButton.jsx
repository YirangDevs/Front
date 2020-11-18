import React from "react"
import styled from "styled-components"
import FileBox from "../../atoms/FileBox"
import FunctionButtonBox from "../../atoms/FunctionButtonBox"
import ExcelPreview from "../../../pages/ExcelPreview"


const VolunteerButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const UpdateButton = ({uploadFile, uploadOnClick, addButton, editDeleteButton, isModalOpen, excelData, closeModal, postSeniorsOnClick}) => {
    return(
        <>
        <VolunteerButtonWrapper>
            <FileBox name="aFile" accept=".xls, .xlsx" onChange={uploadFile}/>
            {/* <input type="file" id="selectedFile" name="aFile" accept=".xls,.xlsx" onChange={openModal}/> */}
            <FunctionButtonBox width="29.5%" height="3rem" value="업로드" onClick={uploadOnClick}/>
            <FunctionButtonBox width="29.5%" height="3rem" value="추가" onClick={addButton}/>
            <FunctionButtonBox width="29.5%" height="3rem" value="수정/삭제" onClick={editDeleteButton}/>
            <ExcelPreview isModalOpen={isModalOpen} excelData={excelData} closeModal={closeModal} postSeniorsOnClick={postSeniorsOnClick}></ExcelPreview>
        </VolunteerButtonWrapper>
        </>
    )
}

export default UpdateButton