import React from "react"
import styled from "styled-components"
import SelectBox from "../../atoms/SelectBox"
import TableBox from "../../atoms/TableBox"
import Pagination from "../../atoms/Pagination"
import UpdateButtonGroup from "./UpdateButtonGroup"
import VolunteerUpdateForm from "../senior/VolunteerUpdateForm"
import Button from "../../atoms/Button/index"
import GuideButtonGroup from "../../molecules/GuideButtonGroup"


const Container = styled.div`
    display: flex;
    width: 80%;
    height: auto;
    margin-top: 10rem;
`

const BottomLayout = styled.div`
    display: flex;
    width: 80%;
    height: auto;
    justify-content: flex-start;
`

const PaginationLayout = styled.div`
    display: flex;
    width: 50%;
    height: auto;
    justify-content: center;
`

const VolunteerLayout = styled.div`
    width: 50%;
    height: auto;
`

const AdminLayout = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const EditDeleteLayout = styled.div`
width : 90%

`

const SelectBoxWrapper = styled.div`
    margin-bottom: 1rem;
`

const selectBoxOptions = ["전체","수성구","중구","동구","서구","남구","북구","달서구"]
const TableBoxHeadLists = ["이름", "성별", "지역", "전화번호", "봉사종류", "봉사날짜", "우선순위", "필요인원"]

const Content = ({
                     currentSenior,
                     button,
                     region,
                     posts,
                     seniors,
                     selectRegion,
                     selectPage,
                     selectSenior,
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

                     postOnClick,
                     editOnClick,
                     uploadOnClick,
                     deleteOnClick,
                     addButton,
                     editDeleteButton,
                     isModalOpen,
                     excelData}) => {
    return (
        <>
            <Container>
                <VolunteerLayout>
                    <SelectBoxWrapper>
                        <SelectBox width="20%" height="2rem" defaultValue={region} onChange={selectRegion} options={selectBoxOptions}/>
                    </SelectBoxWrapper>
                    <TableBox headList={TableBoxHeadLists} bodyList={posts} primaryKey={"name"} onClick={selectSenior}/>

                </VolunteerLayout>
                <AdminLayout>
                    {/* <InputForm></InputForm> */}
                    <VolunteerUpdateForm nameOnChange={nameOnChange} genderOnChange={genderOnChange} typeOnChange={typeOnChange} priorityOnChange={priorityOnChange} needsOnChange={needsOnChange} dateOnChange={dateOnChange} phoneOnChange={phoneOnChange} regionOnChange={regionOnChange} addressOnChange={addressOnChange} currentSenior={currentSenior}></VolunteerUpdateForm>

                    {button? <Button width="90%" height="2.5rem" onClick={postOnClick} value="확인" ></Button>:
                        <EditDeleteLayout>
                            <Button onClick={editOnClick} width="50%" height="2.5rem" value="수정"></Button>
                            <Button onClick={deleteOnClick} width="50%" height="2.5rem" value="삭제"></Button>
                        </EditDeleteLayout>}
                    {/* <Function></Function> */}
                    <UpdateButtonGroup postSeniorsOnClick={postSeniorsOnClick} uploadFile={uploadFile} uploadOnClick={uploadOnClick} addButton={addButton} editDeleteButton={editDeleteButton} isModalOpen = {isModalOpen} excelData={excelData} closeModal={closeModal}></UpdateButtonGroup>
                    <GuideButtonGroup></GuideButtonGroup>
                </AdminLayout>

            </Container>
            <BottomLayout>
                <PaginationLayout>
                    <Pagination num={(seniors.length/10<1) ? 0 : (seniors.length%10===0) ? seniors.length/10 : seniors.length/10 + 1} onClick={selectPage}/>
                </PaginationLayout>
            </BottomLayout>

        </>
    )
}

export default Content