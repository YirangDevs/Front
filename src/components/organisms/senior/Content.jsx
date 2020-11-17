import React, { useState } from "react"
import styled from "styled-components"
import SelectBox from "../../atoms/SelectBox"
import TableBox from "../../atoms/TableBox"
import Pagination from "../../atoms/Pagination"
import UpdateButton from "../senior/UpdateButton"
import VolunteerUpdateForm from "../senior/VolunteerUpdateForm"
import ConfirmButtonBox from "../../atoms/ConfirmButtonBox"
import EditDeleteGroup from "../../molecules/EditDeleteButton"
import GuideButtonGroup from "../../molecules/GuideButtonGroup"
import postSeniorToServer from "../../../business/service/post_senior_to_server"

const Container = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    margin-top: 5rem;
`

const VolunteerLayout = styled.div`
    width: 50%;
    height: 100%;
`

const AdminLayout = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const selectBoxOptions = ["전체","수성구","중구","동구","서구","남구","북구","달서구"]
const TableBoxHeadLists = ["이름", "성별", "지역", "전화번호", "봉사종류", "봉사날짜", "우선순위"]

const Content = ({currentSenior, button, region, posts, selectRegion, selectPage, selectSenior, nameOnChange, genderOnChange, typeOnChange, priorityOnChange, dateOnChange, phoneOnChange, regionOnChange, addressOnChange, uploadFile, uploadOnClick, addButton, editDeleteButton}) => {
    return (
        <>
            <Container>
                <VolunteerLayout>
                    <SelectBox width="20%" height="2rem"defaultValue={region} onChange={selectRegion} options={selectBoxOptions}/>
                    <TableBox headList={TableBoxHeadLists} bodyList={posts} primaryKey={"name"} onClick={selectSenior}/>
                    <Pagination num={posts.length} onClick={selectPage}/>
                </VolunteerLayout>
                <AdminLayout>
                    {/* <InputForm></InputForm> */}
                    <VolunteerUpdateForm nameOnChange={nameOnChange} genderOnChange={genderOnChange} typeOnChange={typeOnChange} priorityOnChange={priorityOnChange} dateOnChange={dateOnChange} phoneOnChange={phoneOnChange} regionOnChange={regionOnChange} addressOnChange={addressOnChange}></VolunteerUpdateForm>
                    {button? <ConfirmButtonBox width="90%" height="2.5rem" value="확인" onClick={postSeniorToServer}></ConfirmButtonBox>:<EditDeleteGroup></EditDeleteGroup>}
                    {/* <Function></Function> */}
                    <UpdateButton uploadFile={uploadFile} uploadOnClick={uploadOnClick} addButton={addButton} editDeleteButton={editDeleteButton}></UpdateButton>
                    <GuideButtonGroup></GuideButtonGroup>  
                </AdminLayout>
            </Container>
        </>
    )
}

export default Content