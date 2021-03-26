/** 
 * @author : chaeeun 
 * @date : 2021-02-24 16:20:36 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-24 05:37:07
 */


import React from "react"
import MypageNav from "../../../molecules/MypageNav"
import UserCard from "../../../../containers/redux/components/UserCard"
import Typo from "../../../atoms/Typography"


import ContentLayout from "../../../../layout/Content"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Button from "../../../atoms/Button"
import TextBox from "../../../atoms/TextBox"
import Img from "../../../atoms/Image"
import SelectBox from "../../../atoms/SelectBox"
import VerifiedForm from "../../../molecules/VerifiedForm/VerifiedForm"

import RadioBox from "../../../atoms/RadioButton"
import Modal from "../../../atoms/Modal"
import SexConfirmModal from "../SexConfirmForm"

import DeleteMyInfoModal from "../DeleteMyInfoForm"

import DefaultImg from "../../../../img/ProfileDefaultImg.png"

import FileBox from "../../../atoms/FileBox"

const ProfileContent = ({
    userProfile,
    isDeleteConfirmVisible, // 탈퇴하기 modal 
    confirmDeleteModal, // 탈퇴하기 modal handler
    deleteOnClick,// 탈퇴하기  모달 show
    okDeleteConfirmOnclick, //  탈퇴하기재확인모달 확인
    cancelDeleteConfirmOnclick, //탈퇴하기재확인모달 확인

}) => {
    const { role, email, firstRegion, imgUrl, isReceivingEmail, phone, realname, secondRegion,
        sex, username, validation, imgType, } = userProfile;

    {/* xs={ } sm={ } md ={ } lg={ } xl={ } xxl ={ } */ }
    return (
        <>
            <ContentLayout >
                <Row>
                    <Col xs={0} sm={0} md={4} lg={4} xl={4} xxl={4} >
                        {/* [Left]  Name Title */}
                        <Row>
                            <Col span={4}>
                                {/* <Typo size={"2.3rem"} weight={'bold'}>{username} </Typo> */}
                                <Typo size={"2.3rem"} weight={'bold'}>Test </Typo>
                            </Col>
                        </Row>
                        <Row gutter={[3, 0]}>
                            <Col span={12}>
                                <Typo size={"1.1rem"} opacity={'0.5'}>
                                    {
                                        (validation === "YES") ? `${email} >` : `email을 인증해 주세요`
                                    }
                                </Typo>
                            </Col>
                        </Row >

                        {/* [Left]  myPageNav */}
                        <Row gutter={[15, 0]} style={{ marginTop: '2rem' }}>
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"bold"}>로그인 된 카카오계정</Typo>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <UserCard></UserCard>
                            </Col>
                        </Row>
                        <Row gutter={[15, 0]}>
                            <Col span={12}>
                                <MypageNav role={role} />
                            </Col>
                        </Row>


                        {/* [Left]  탈퇴하기 , 업데이트 정보 */}
                        <Row gutter={[15, 0]} style={{ margin: '3.5rem 0 0 0 ' }}>
                            <Col span={4}>
                                <Typo size={"1rem"} color={'#ff4d4f'} weight={"500"} cursor={'pointer'} onClick={deleteOnClick} >탈퇴하기</Typo>
                            </Col>
                            <Col span={8}>
                                <Typo size={"1rem"} color={'#707070'} weight={"500"} cursor={'pointer'} >업데이트 정보</Typo>
                            </Col>
                        </Row>
                    </Col>
                    <Modal headerClose visible={isDeleteConfirmVisible}
                        maskClosable={true} onClose={confirmDeleteModal.close} size={7}>
                        <DeleteMyInfoModal username={username} okDeleteConfirmOnclick={okDeleteConfirmOnclick} cancelDeleteConfirmOnclick={cancelDeleteConfirmOnclick}></DeleteMyInfoModal>
                    </Modal>


                    {/* [Right]  */}





                </Row>
            </ContentLayout>
        </>
    )

}

export default ProfileContent;