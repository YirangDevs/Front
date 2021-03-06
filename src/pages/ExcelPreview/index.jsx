import React from "react"
import TableBox from "../../components/atoms/TableBox";
import styled from "styled-components"
import TableScrollbar from "react-table-scrollbar"
import Col from "../../layout/Grid/Column";
import Button from "../../components/atoms/Button";
import Row from "../../layout/Grid/Row";

const ModalContent = styled.div`
        margin: 0;
        width: 100%;
        position: relative;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-direction: column;
`

const TableBoxHeadLists = ["이름", "성별", "지역", "전화번호", "봉사종류", "봉사날짜", "우선순위","필요인원"]
const ExcelPreview = ({excelData, closeModal, postSeniorsOnClick}) => {
    
    const filteredData = excelData.map((i)=>{
        return {
            name : i.name,
            sex: i.sex,
            region: i.region,
            phone : i.phone,
            type : i.type,
            date : i.date,
            priority : i.priority,
            needs : i.needs
        }
    })

    return (
        <>
            <ModalContent>
                <TableScrollbar rows={18}>
                    <TableBox headList={TableBoxHeadLists} bodyList={filteredData} colgroup={[10,10,10,20,10,20,10,10]}>

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
        </>
    )
}

export default ExcelPreview