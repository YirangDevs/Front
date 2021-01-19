import React from "react"
import SelectBox from "../../../atoms/SelectBox"
import Content from "../../../../layout/Content"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Button from "../../../atoms/Button"
import UpdateButtonGroup from "../UpdateButtonGroup/"
import InfoForm from "../InfoForm/"
import TableBox from "../../../atoms/TableBox"
import Pagination from "../../../atoms/Pagination"
import MenuNav from "../../../molecules/MenuNav";

const TableBoxHeadLists = ["이름", "성별", "지역", "전화번호", "봉사종류", "봉사날짜", "우선순위", "필요인원"];
const regionoptions = ["지역선택"];
const SeniorContent = ({currentSenior,
    button,
    region,
    posts,
    seniors,
    selectRegion,
    selectPage,
    selectSenior,
    myRegion,

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
    excelData}, genderRef) => {
        
        //console.log(posts)
        const regionArray = regionoptions.concat(myRegion)
        console.log(regionArray)

        
    return (
        <>
        
        <Content>

            {/* 지역 선택 파트 */}
            <Row align="start" justify="start" gutter={[10,10]}>
                <Col span={4}>
                        <SelectBox size="large" options={regionArray} onChange={selectRegion} defaultValue={region} border></SelectBox>
                </Col>
            </Row>

            
            <Row align="start" justify="start" gutter={[10,10]}>
                {/* 피봉사자 표 출력 파트 */}
                <Col span={12} xxl={7} xl={6}>

                        <TableBox headList={TableBoxHeadLists} bodyList={posts} primaryKey={"name"} onClick={selectSenior}></TableBox>

                    <Pagination num={Math.ceil(seniors.length/10)} onClick={paginationOnClick}></Pagination>

                </Col>
                
                {/* 피봉사자 정보 입력 폼 파트 */}
                <Col span={12} xxl={5} xl={6}>
                    {/* 그리드로 구현 */}
                    <Row gutter={[5,10]}>
                        <Col span={12}>
                            <InfoForm nameOnChange={nameOnChange} genderOnChange={genderOnChange} typeOnChange={typeOnChange} priorityOnChange={priorityOnChange} needsOnChange={needsOnChange} dateOnChange={dateOnChange} phoneOnChange={phoneOnChange} regionOnChange={regionOnChange} addressOnChange={addressOnChange} currentSenior={currentSenior} genderRef={genderRef}></InfoForm>
                        </Col>
                        <Col span={12}>
                            {button?
                                <Button value="확인" onClick={postOnClick} types={"primary"} block/>
                            :
                                <Row gutter={[0,3]}>
                                    <Col span={6}>
                                        <Button theme="black" value="수정" onClick={editOnClick} types={"primary"} block/>
                                    </Col>
                                    <Col span={6}>
                                        <Button theme="black" value="삭제" onClick={deleteOnClick} types={"primary"} block/>
                                    </Col>
                                </Row>
                            }
                        </Col>
                        <Col span={12}>
                            <UpdateButtonGroup postSeniorsOnClick={postSeniorsOnClick} uploadFile={uploadFile} uploadOnClick={uploadOnClick} addButton={addButton} editDeleteButton={editDeleteButton} isModalOpen = {isModalOpen} excelData={excelData} closeModal={closeModal}></UpdateButtonGroup>

                        </Col>
                        <Col span={12}>
                            <MenuNav/>
                        </Col>
                    </Row>
                </Col>
            </Row>
       
        </Content>
    </>)
}

export default SeniorContent