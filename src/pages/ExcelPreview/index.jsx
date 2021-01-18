import React from "react"
import TableBox from "../../components/atoms/TableBox";
import styled from "styled-components"
import TableScrollbar from "react-table-scrollbar"
import Col from "../../layout/Grid/Column";
import Button from "../../components/atoms/Button";
import Row from "../../layout/Grid/Row";

const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);

`

const PreviewModal = styled.div`
      width: 645px;
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

const TableBoxHeadLists = ["이름", "성별", "지역", "전화번호", "봉사종류", "봉사날짜", "우선순위", "필요인원"]
const ExcelPreview = ({isModalOpen, excelData, closeModal, postSeniorsOnClick}) => {
    
    const filteredData = excelData.map((i)=>{
        return {
            name : i.name,
            sex: i.sex,
            region: i.region,
            date : i.date,
            needs : i.needs,
            phone : i.phone,
            priority : i.priority,
            type : i.type
        }
    })

    return (isModalOpen) ?
    <Modal>
        <PreviewModal>
            <ModalContent>
                <TableScrollbar rows={10}>
                    <TableBox headList={TableBoxHeadLists} bodyList={filteredData}>

                    </TableBox>
                </TableScrollbar>
                <Row>
                    <Col span={6}>
                        <Button value="확인" onClick={postSeniorsOnClick} block/>
                    </Col>
                    <Col span={6}>
                        <Button value="취소" onClick={closeModal} block/>
                    </Col>
                </Row>

            </ModalContent>
        </PreviewModal>

    </Modal> : null;
}

export default ExcelPreview