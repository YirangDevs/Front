import React from "react"
import TableBox from "../components/atoms/TableBox";
import styled from "styled-components"
import TableScrollbar from "react-table-scrollbar"
import FunctionButtonBox from "../components/atoms/FunctionButtonBox";

const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);

`

const PreviewModal = styled.div`
      width: 580px;
      height: 621px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      position: relative;
      box-sizing: border-box;
      margin: 50px auto;
      padding: 20px;
      background: #fff;
      
`

const ModalContent = styled.div`
        margin: 0 auto;
        width: 100%;
        position: relative;
        padding:30px 10px 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-direction: column;
`

const ButtonLayout = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    
`

const TableBoxHeadLists = ["이름", "성별", "지역", "전화번호", "봉사종류", "봉사날짜", "우선순위"]
const ExcelPreview = ({isModalOpen, excelData, closeModal, postSeniorsOnClick}) => {

    const filteredData = excelData.map((i)=>{
        let  data = i
        delete data.id
        delete data.address
        return data
    })

    return (isModalOpen) ?
    <Modal>
        <PreviewModal>
            <ModalContent>
                <TableScrollbar rows={10}>
                    <TableBox headList={TableBoxHeadLists} bodyList={filteredData}>

                    </TableBox>
                </TableScrollbar>
                <ButtonLayout>
                    <FunctionButtonBox width="45%" height="90%" onClick={closeModal} value="취소"></FunctionButtonBox>
                    <FunctionButtonBox width="45%" height="90%" onClick={postSeniorsOnClick} value="확인"></FunctionButtonBox>
                </ButtonLayout>

            </ModalContent>
        </PreviewModal>

    </Modal> : null;
}

export default ExcelPreview