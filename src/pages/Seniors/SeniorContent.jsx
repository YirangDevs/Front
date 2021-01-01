import React from "react"
import styled from "styled-components"
import SelectBox from "../../components/atoms/SelectBox"
import Content from "../../layout/Content"
import Row from "../../layout/Grid/Row/index"
import Col from "../../layout/Grid/Column/index"
import Button from "../../components/atoms/Button/index"
import UpdateButtonGroup from "../../components/organisms/senior/UpdateButtonGroup"
import SeniorInfoForm from "../../components/organisms/senior/SeniorInfoForm"
import TableBox from "../../components/atoms/TableBox/index"
import EditDeleteButton from "../../components/molecules/editDeleteButton"
import AdminButtonGroup from "../../components/molecules/AdminButtonGroup"
import Pagination from "../../components/atoms/Pagination"

const Box = styled.div`
    // background: #0092ff;
    width: auto;
    height: auto;
    color : white;
`

const TableBoxHeadLists = ["이름", "성별", "지역", "전화번호", "봉사종류", "봉사날짜", "우선순위", "필요인원"];
const regionoptions = ["지역선택", "수성구", "동구", "서구", "남구", "북구", "중구", "달서구"];
const SeniorContent = ({currentSenior,
    button,
    region,
    posts,
    seniors,
    selectRegion,
    selectPage,
    selectSenior,

    genderRef,

    excelRegion,
    excelDate,
    needsTotal,

    closeModal,
    nameOnChange,
    genderOnChange,
    typeOnChange,
    priorityOnChange,
    needsOnChange,
    dateOnChange,
    phoneOnChange,
    regionOnChange,
    addressOnChange,
    uploadFile,
    postSeniorsOnClick,
    paginationOnClick,


    postOnClick,
    editOnClick,
    uploadOnClick,
    deleteOnClick,
    addButton,
    editDeleteButton,
    isModalOpen,
    excelData}) => {
        
        //console.log(posts)

        
    return (
        <>
        
        <Content>

            {/* 지역 선택 파트 */}
            <Row align="start" justify="start" gutter={[10,10]}>
                <Col span={4}>
                        <SelectBox size="large" options={regionoptions} onChange={selectRegion} defaultValue={region}></SelectBox>
                </Col>
            </Row>

            
            <Row align="start" justify="start" gutter={[10,10]}>
                {/* 피봉사자 표 출력 파트 */}
                <Col span={12} xxl={7} xl={6}>
                    <Box>
                        <TableBox headList={TableBoxHeadLists} bodyList={posts} primaryKey={"name"} onClick={selectSenior}></TableBox>
                    </Box>
                    <Pagination num={Math.ceil(seniors.length/10)} onClick={paginationOnClick}></Pagination>

                </Col>
                
                {/* 피봉사자 정보 입력 폼 파트 */}
                <Col span={12} xxl={5} xl={6}>
                    {/* 그리드로 구현 */}
                    <Row gutter={[10,10]}>
                        <Col span={12}>
                        <SeniorInfoForm nameOnChange={nameOnChange} genderOnChange={genderOnChange} typeOnChange={typeOnChange} priorityOnChange={priorityOnChange} needsOnChange={needsOnChange} dateOnChange={dateOnChange} phoneOnChange={phoneOnChange} regionOnChange={regionOnChange} addressOnChange={addressOnChange} currentSenior={currentSenior} genderRef={genderRef}></SeniorInfoForm>
                        </Col>
                        <Col span={12}>
                    {button?
                    <Box>
                        <Button value="확인" onClick={postOnClick} block/>
                    </Box>:
                    <EditDeleteButton editOnClick={editOnClick} deleteOnClick={deleteOnClick}></EditDeleteButton>
                    }

                        </Col>
                        <Col span={12}>
                    <Box>
                        <UpdateButtonGroup postSeniorsOnClick={postSeniorsOnClick} uploadFile={uploadFile} uploadOnClick={uploadOnClick} addButton={addButton} editDeleteButton={editDeleteButton} isModalOpen = {isModalOpen} excelData={excelData} closeModal={closeModal}></UpdateButtonGroup>
                    </Box>
                </Col>
                <Col span={12}>
                    <Box>
                        <AdminButtonGroup />
                    </Box>
                </Col>
                

                    </Row>
                    
                </Col>
            </Row>
       
        </Content>
    </>
    )
    
}

export default SeniorContent