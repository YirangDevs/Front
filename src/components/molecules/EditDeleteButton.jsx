import React from "react"
import styled from "styled-components"
import ConfirmButtonBox from "../atoms/ConfirmButtonBox"


const EditDeleteWrapper = styled.div`
    width: 90%;
    flex-direction: row;
`

const EditDeleteGroup = () => {
    return(
        <>
        <EditDeleteWrapper>
            <ConfirmButtonBox width="50%" height="2.5rem" value="수정"></ConfirmButtonBox>
            <ConfirmButtonBox width="50%" height="2.5rem" value="삭제"></ConfirmButtonBox>
        </EditDeleteWrapper>
        </>
    )
}

export default EditDeleteGroup