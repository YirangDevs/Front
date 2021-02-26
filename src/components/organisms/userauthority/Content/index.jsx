import React from "react"
import Content from "../../../../layout/Content"
import Row from "../../../../layout/Grid/Row/index"
import Col from "../../../../layout/Grid/Column/index"
import SelectBox from "../../../atoms/SelectBox"
import TextBox from "../../../atoms/TextBox"
import Button from "../../../atoms/Button"
import TableBox from "../../../atoms/TableBox"
import Modal from "../../../../components/atoms/Modal"
import MenuNav from "../../../../containers/redux/components/MenuNav"
import Pagination from "../../../atoms/Pagination"
import AuthorityAdminModal from "../../../../components/organisms/userauthority/AuthorityAdminModal"
import AuthorityRegionModal from "../../../../components/organisms/userauthority/AuthorityRegionModal"


const selectAuthority = ["전체", "슈퍼관리자", "관리자", "봉사자"]
const TableBoxHeadLists = ["회원등급", "이름", "성별", "연락처", "이메일"]
const authorityTable = ["관리모드"]
const regionTable = ["지역"]

const UserAuthorityContent = ({
    regionOnClick,
    authorityOnClick,
    modalClose,
    authorityRegionChange,
    authorityChange,
    getMyAuthority,
    regionOnCheck,
    paginationOnClick,
    searchName,

    regionModal,
    regionArray,
    regionOptions,
    authorityModal,

    certainUsers,
    posts,
    adminPosts,
    regionsPosts,
    idArray,
    selectedUser
}) => {
    //console.log(regionArray)
    return(
        <>
            <Content>
                <Row gutter={[10,10]}>
                    <Col span={2}>
                            <SelectBox options={selectAuthority} onChange={getMyAuthority} border block></SelectBox>
                    </Col>
                    <Col span={1.8}>
                            <TextBox placeholder="이름을 검색하십시오" border></TextBox>
                    </Col>
                    <Col span={1}>
                        <Button value="검색" theme="white" onClick={searchName} round/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} xxl={5.8} xl={8.8}>
                        <TableBox headList={TableBoxHeadLists} bodyList={posts}/>
                    </Col>
                    <Col span={0.2} /> {/* 빈칸 */}
                    <Col span={0} xxl={1} xl={1.5}>
                        <TableBox headList={authorityTable} bodyList={adminPosts} dataOnClick={authorityOnClick} data={idArray} black back/>
                    </Col>
                    <Col span={0} xxl={1} xl={1.5}>
                    <TableBox headList={regionTable} bodyList={regionsPosts} dataOnClick={regionOnClick} data={idArray} black back/>  
                    </Col>
                    <Col xxl={0.5} /> {/* 빈칸 */}
                    <Col span={0} xxl={3.5}>
                        <MenuNav />
                    </Col>
                </Row>
                <Row>
                <Col span={12} xxl={7} xl={6} justify={"center"}>
                    <Pagination num={Math.ceil(certainUsers.length/10)} onClick={paginationOnClick}></Pagination>
                </Col>
            </Row>
            </Content>
            <Modal title="권한 할당" visible={authorityModal} size={12} closable={true} onClose={modalClose} children={<AuthorityAdminModal authorityChange={authorityChange} modalClose={modalClose} selectedUser={selectedUser}/>}/>
            <Modal title="지역 할당" visible={regionModal} size={12} children={<AuthorityRegionModal regionOnCheck={regionOnCheck} modalClose={modalClose} authorityRegionChange={authorityRegionChange} regionArray={regionArray} regionOptions={regionOptions}/>}/>
        </>
    )
}

export default UserAuthorityContent