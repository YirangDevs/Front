/** 
 * @author : chaeeun 
 * @date : 2021-02-24 16:20:36 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-27 19:42:14
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
import Divider from "../../../atoms/Diviver"

const ProfileContent = ({
    userProfile, // 우저정보

    editProfileFunction,// userProfile 수정함수들

    isDeleteConfirmVisible, // 탈퇴하기 modal 
    confirmDeleteModal, // 탈퇴하기 modal handler
    deleteOnClick,// 탈퇴하기  모달 show
    okDeleteConfirmOnclick, //  탈퇴하기재확인모달 확인
    cancelDeleteConfirmOnclick, //탈퇴하기재확인모달 확인

    isCustomImgPostForm, //  //true : 커스텀이미지 저장하기 + 이미지 올리기  form 열기   false :  커스텀이미지 저장하기 + 이미지 올리기 form 닫기 
    uploadImgOnclick, // 로컬에서 선택한 이미지를 업로드하기 
    postImgOnclick, //업로드한 이미지를 저장하기
    kakaoImgOnclick, //카카오톡 프로필 사진으로  프로필 사진 변경

    isEditNickNameForm, //true : 닉네임 변경하는 form   false :  닉네임 변경하는 form 닫기
    editNicknameOnclick, // 닉네임을 변경하는 form open 
    postNicknameOnclick, //닉네임 변경후 저장하기

    isEditRealNameForm, //true : 이름 변경하는 form   false :  이름 변경하는 form 닫기 
    editRealNameOnclick, //이름 변경하는 form open 
    postRealNameOnclick, //이름 변경후 저장하기

}) => {
    console.log(userProfile)
    const { role, email, firstRegion, imgUrl, isReceivingEmail, phone, realname, secondRegion,
        sex, username, validation, imgType, } = userProfile;

    {/* xs={ } sm={ } md ={ } lg={ } xl={ } xxl ={ } */ }
    return (
        <>
            <ContentLayout >
                <Row>
                    {/* SECTION Left */}
                    <Col xs={0} sm={0} md={4} lg={4} xl={4} xxl={4} style={{
                        border: "1px black solid", //지워
                        marginRight: '4.1%'
                    }}>
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
                        maskClosable={true} onClose={confirmDeleteModal.close} size={4} xs={7} sm={7} md={6} lg={6} xl={5} xxl={4}>
                        <DeleteMyInfoModal username={username} okDeleteConfirmOnclick={okDeleteConfirmOnclick} cancelDeleteConfirmOnclick={cancelDeleteConfirmOnclick}></DeleteMyInfoModal>
                    </Modal>


                    {/* SECTION Right */}
                    <Col xs={12} sm={12} md={7.5} span={7.5}>
                        <Row >
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"bold"} > 프로필 수정</Typo>
                            </Col>
                        </Row>

                        {/* PIN 프로필사진 */}
                        <Divider color={'#000000'} marginTop={'15px'} marginBottom={'0px'} borderWidth={'3px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "110px" }}>

                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                <Typo weight={'bold'}>프로필 사진</Typo>
                            </Col>
                            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}  >
                                    <Col offset={0.25} span={4} justify={"start"} align={"center"}>
                                        {
                                            (imgUrl) ?
                                                <Img src={imgUrl} width={'100px'} circle></Img>
                                                :
                                                <Img src={DefaultImg} width={'100px'} circle></Img>
                                        }
                                    </Col>
                                    <Col span={3}>
                                        {
                                            (isCustomImgPostForm === false) ?
                                                <Row gutter={[0, 0]} justify={'center'} align={'center'} style={{ alignContent: "space-evenly" }}  >
                                                    <Col span={12}>
                                                        <FileBox block id={"customImg"} accept="image/*" onChange={uploadImgOnclick} >이미지선택</FileBox>
                                                    </Col>
                                                    <Col span={12} >
                                                        <Button block value={'카카오 사진으로'} onClick={kakaoImgOnclick}></Button>
                                                    </Col>
                                                </Row>
                                                :
                                                <>
                                                    <Row gutter={[0, 0]} justify={'space-between'} align={'center'}   >
                                                        <Col span={7}>
                                                            <FileBox block id={"customImg"} accept="image/*" onChange={uploadImgOnclick} >파일선택</FileBox>
                                                        </Col>
                                                        <Col span={4} >
                                                            <Button block types={'primary'} value={'저장'} onClick={postImgOnclick}></Button>
                                                        </Col>
                                                    </Row>
                                                    <Row justify={'flex-end'}>
                                                        <Col span={12} >
                                                            <Button block value={'카카오 사진으로'} onClick={kakaoImgOnclick}></Button>
                                                        </Col>
                                                    </Row>
                                                </>
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>



                        {/* PIN 닉네임  */}
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "50px" }}>

                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                <Typo weight={'bold'}>닉네임</Typo>
                            </Col>

                            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditNickNameForm === false) ?
                                            <>
                                                <Col offset={0.25} span={8} justify={"start"} align={"center"} >
                                                    {
                                                        (username) ?
                                                            <Typo weight={"bold"}>{username}</Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'닉네임을 기입해 주새요'} </Typo>
                                                    }
                                                </Col>

                                                <Col span={3}>
                                                    <Button block value={'닉네임 변경'} onClick={editNicknameOnclick}></Button>
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.25} span={8} justify={"center"} align={"center"} >
                                                    <Row align={'center'}>
                                                        <Col xs={5} sm={6} md={5} lg={6} xl={6} xxl={6} align={'center'} justify={'center'} >
                                                            <TextBox color={"black"} border block
                                                                radius={'22px'} align={'center'}
                                                                onChange={editProfileFunction.username} value={username}></TextBox>
                                                        </Col>
                                                        <Col xs={7} sm={6} md={7} lg={6} xl={6} xxl={6} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                                                            <Typo color={'#707070'} size={'0.8rem'}>초기설정은 카톡닉네임입니다.</Typo>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={3}>
                                                    <Button types={"primary"} block value={'닉네임저장'} onClick={postNicknameOnclick}></Button>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>





                        {/* PIN 이름 */}
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "50px" }}>
                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                <Typo weight={'bold'}>닉네임</Typo>
                            </Col>

                            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditRealNameForm === false) ?
                                            <>
                                                <Col offset={0.25} span={8} justify={"start"} align={"center"} >
                                                    {
                                                        (realname) ?
                                                            <Typo weight={"bold"}>{realname}</Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'실명을 기입해 주새요'} </Typo>
                                                    }
                                                </Col>

                                                <Col span={3}>
                                                    <Button block value={'이름변경'} onClick={editRealNameOnclick}></Button>
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.25} span={8} justify={"center"} align={"center"} >
                                                    <Row align={'center'}>
                                                        <Col xs={5} sm={6} md={5} lg={6} xl={6} xxl={6} align={'center'} justify={'center'} >
                                                            <TextBox color={"black"} border block
                                                                radius={'22px'} align={'center'}
                                                                onChange={editProfileFunction.realname} value={realname}></TextBox>
                                                        </Col>
                                                        <Col xs={6} sm={6} md={7} lg={6} xl={6} xxl={6} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                                                            <Typo color={'#707070'} size={'0.8rem'}>반드시 실명을 기입해 주세요.</Typo>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={3}>
                                                    <Button types={"primary"} block value={'이름저장'} onClick={postRealNameOnclick}></Button>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>


                        {/* PIN  전화번호 */}

                        {/* PIN 성별 */}

                        {/* PIN 이메일 */}

                        {/* PIN 괸심지역  */}

                        {/* PIN 이메일 수신 여부  */}















                    </Col>
                </Row>
            </ContentLayout>
        </>
    )

}

export default ProfileContent;