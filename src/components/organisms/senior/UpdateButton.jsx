import React from "react"
import styled from "styled-components"
import FileBox from "../../atoms/FileBox"
import FunctionButtonBox from "../../atoms/FunctionButtonBox"


const VolunteerButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`

const VolunteerButton = ({uploadFile, uploadOnClick, addButton, editDeleteButton}) => {
    return(
        <>
        <VolunteerButtonWrapper>
            <FileBox name="aFile" accept=".xls, .xlsx" onChange={uploadFile}/>
            {/* <input type="file" id="selectedFile" name="aFile" accept=".xls,.xlsx" onChange={openModal}/> */}
            <FunctionButtonBox width="29.5%" height="3rem" value="업로드" onClick={uploadOnClick}/>
            <FunctionButtonBox width="29.5%" height="3rem" value="추가" onClick={addButton}/>
            <FunctionButtonBox width="29.5%" height="3rem" value="수정/삭제" onClick={editDeleteButton}/>
        </VolunteerButtonWrapper>
        </>
    )
}

export default VolunteerButton