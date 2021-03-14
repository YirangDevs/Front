/** 
 * @author : chaeeun 
 * @date : 2021-02-24 16:20:36 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-15 06:05:08
 */


import React from "react"
import MypageNav from "../../../molecules/MypageNav"
import UserInfo from "../../../../containers/redux/components/UserInfo"
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

const ProfileContent = ({
    //contentContainer

    minutes,
    seconds,
    userProfile,
    editProfileFunction,
    isEditNickNameForm,
    editNickNameForm,
    isEditRealNameForm,
    editRealNameForm,
    isEditSexForm,
    editSexForm,
    isEditEmailForm,
    editEmailForm,
    firstRegionOptions,
    secondRegionOptions,
    isEditPhoneForm,
    editPhoneForm,
    isInputAuthNum,
    inputAuthNumForm,
    isAuthNum,
    editAuthNum,
    editCompleted,
    isSexConfirmVisible,
    confirmModal,
    DeleteCompleted,
    isDeleteConfirmVisible,
    deleteConfirmModal
}) => {

    const { username, imgUrl, realname, phone, email, sex,
        firstRegion, secondRegion, role, verified } = userProfile;


    const settingSex = (sex) => {
        if (sex === 'FEMALE') return '여성';
        if (sex === 'MALE') return '남성';
    }

    return (
        <>
            <ContentLayout style={{
                margin: '3rem 4rem',
                // border: "1px solid #ccd4e0",
            }}>

                <Row>
                    <Col span={4}>
                        <Row>
                            <Col span={4}>
                                <Typo size={"2.3rem"} weight={'bold'}>{username}</Typo>
                            </Col>
                        </Row>
                        <Row gutter={[3, 0]}>
                            <Col span={12}>
                                <Typo size={"1.1rem"} opacity={'0.5'}>
                                    {
                                        (userProfile.checkedEmail) ? `${userProfile.checkedEmail} >` : `email을 인증해 주세요`
                                    }
                                </Typo>
                            </Col>
                        </Row >
                        <Row gutter={[15, 0]} style={{ marginTop: '2rem' }}>
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"bold"}>로그인 된 카카오계정</Typo>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <UserInfo></UserInfo>
                            </Col>
                        </Row>
                        <Row gutter={[15, 0]}>
                            <Col span={12}>
                                <MypageNav role={role} />
                            </Col>
                        </Row>
                        {/* 탈퇴하기 바로  */}
                        {/* <Row align={'center'} style={{ marginTop: '1rem' }}>
                            <Col span={3} align={'center'} style={{ borderRight: '1px solid black', height: "3rem", }}>
                                <Typo size={"1.2rem"} weight={"bold"} > 회원탈퇴</Typo>
                            </Col>

                            <Col span={6} justify={'center'} align={'center'} style={{ height: "3rem", }} >
                                <Button types={"primary"} value={'회원탈퇴'} onClick={DeleteCompleted} />
                            </Col>
                        </Row> */}

                        <Row gutter={[15, 0]} style={{ margin: '2.5rem 0 0 0 ' }}>
                            <Col span={4}>
                                <Typo size={"1rem"} color={'#ff4d4f'} weight={"500"} cursor={'pointer'} onClick={deleteConfirmModal.show} >탈퇴하기</Typo>
                            </Col>
                            <Col span={8}>
                                <Typo size={"1rem"} color={'#707070'} weight={"500"} cursor={'pointer'} >업데이트 정보</Typo>
                            </Col>
                        </Row>
                    </Col>

                    <Modal headerClose visible={isDeleteConfirmVisible}
                        maskClosable={true} onClose={deleteConfirmModal.close} size={4}>
                        <DeleteMyInfoModal username={username} DeleteCompleted={DeleteCompleted} deleteConfirmModal={deleteConfirmModal}></DeleteMyInfoModal>
                    </Modal>


                    <Col span={7.5} offset={0.5}>
                        <Row >
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"bold"} > 프로필 수정</Typo>
                            </Col>
                        </Row>

                        <Row justify={"space-between"} style={{ marginTop: '15px', borderTop: '3px solid #000000', }}>
                            <Col span={2} justify={"center"} align={"center"} style={{
                                backgroundColor: "#f5f5f5",
                                height: "7rem"
                            }}>
                                <Typo weight={'bold'}>프로필 사진</Typo>
                            </Col>
                            <Col span={10} justify={"space-between"} style={{
                                backgroundColor: "#ffffff",
                                height: "7rem",
                            }} >
                                <Col span={7} justify={"start"} align={"center"} style={{
                                    paddingLeft: '1rem'
                                }}>
                                    {
                                        (imgUrl) ?
                                            <Img src={imgUrl} width={'6rem'} circle></Img>
                                            :
                                            <Img src={DefaultImg} width={'6rem'} circle></Img>
                                    }
                                    <Img src={imgUrl} width={'6rem'} circle></Img>
                                </Col>
                                <Col span={3}>
                                    <Row justify={'center'} align={'center'}>
                                        {/* <Col span={12}>
                                            <Button block value={'기본 이미지로'} onClick={editProfileFunction.defaultImg}></Button>
                                        </Col>
                                        <Col span={12} >
                                            <Button block value={'프로필 사진으로'} onClick={editProfileFunction.imgUrl}></Button>
                                        </Col> */}
                                    </Row>
                                </Col>
                            </Col>
                        </Row>

                        <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', }}  >
                            <Col span={2} justify={"center"} align={"center"} style={{
                                backgroundColor: "#f5f5f5",
                                height: "3rem",
                            }}>
                                <Typo weight={"bold"}>닉네임</Typo>
                            </Col>
                            <Col span={10} justify={'space-between'} >
                                {
                                    (isEditNickNameForm) ?
                                        <>
                                            <Col span={9} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: "1rem"
                                            }}>

                                                <Col span={2} align={'center'} justify={'center'} >
                                                    <TextBox color={"black"} border
                                                        radius={'22px'} align={'center'}
                                                        onChange={editProfileFunction.username} value={username}></TextBox>
                                                </Col>
                                                <Col span={5} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                                                    {/* <TextBox size='0.7rem' block value={"초기설정은 카톡닉네임입니다."}></TextBox> */}
                                                    <Typo color={'#707070'} size={'0.8rem'}>초기설정은 카톡닉네임입니다.</Typo>
                                                </Col>

                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                <Button types={"primary"} block value={'닉네임저장'} onClick={editNickNameForm.close}></Button>
                                            </Col>
                                        </>

                                        :
                                        <>
                                            <Col span={9} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: '1rem'
                                            }}>
                                                <Typo weight={"bold"}>
                                                    {
                                                        (username) ?
                                                            <Typo weight={"bold"}>
                                                                {
                                                                    username
                                                                }
                                                            </Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>
                                                                {
                                                                    '닉네임을 기입해 주새요'
                                                                }
                                                            </Typo>
                                                    }
                                                </Typo>
                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                <Button block value={'닉네임 변경'} onClick={editNickNameForm.show}></Button>
                                            </Col>

                                        </>

                                }
                            </Col>
                        </Row >


                        <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', }} >
                            <Col span={2} justify={"center"} align={"center"} style={{
                                backgroundColor: "#f5f5f5",
                                height: "3rem",
                            }}>
                                <Typo weight={"bold"}>* 이름</Typo>
                            </Col>
                            <Col span={10} justify={'space-between'} >
                                {
                                    (isEditRealNameForm) ?
                                        <>
                                            <Col span={9} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: "1rem"
                                            }}>

                                                <Col span={4} align={'center'} justify={'start'} >
                                                    <TextBox color={"black"} border
                                                        radius={'22px'} align={'center'}
                                                        onChange={editProfileFunction.realname} value={realname} />
                                                </Col>
                                                <Col span={5} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                                                    {/* <TextBox size='0.7rem' block value={"초기설정은 카톡닉네임입니다."}></TextBox> */}
                                                    <Typo size={'0.8rem'}>반드시 실명을 기입해 주세요.</Typo>
                                                </Col>

                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                <Button types={"primary"} block value={'이름저장'} onClick={editRealNameForm.close}></Button>
                                            </Col>
                                        </>

                                        :
                                        <>
                                            <Col span={9} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: '1rem'
                                            }}>

                                                {
                                                    (realname) ?
                                                        <Typo weight={"bold"}>
                                                            {
                                                                realname
                                                            }
                                                        </Typo>
                                                        :
                                                        <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>
                                                            {
                                                                '실명을 기입해 주새요'
                                                            }
                                                        </Typo>
                                                }

                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                <Button block value={'이름변경'} onClick={editRealNameForm.show}></Button>
                                            </Col>

                                        </>

                                }
                            </Col>
                        </Row >



                        <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', }} >
                            <Col span={2} justify={"center"} align={"center"} style={{
                                backgroundColor: "#f5f5f5",
                                height: "3rem",
                            }}>
                                <Typo weight={"bold"}>* 전화번호</Typo>
                            </Col>
                            <Col span={10} justify={'space-between'} >
                                {
                                    (isEditPhoneForm) ?
                                        <>
                                            <Col span={9} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: "1rem"
                                            }}>

                                                <Col span={2} align={'center'} justify={'center'} >
                                                    <TextBox placeholder={'010XXXXYYYY'} color={"black"} border
                                                        radius={'22px'} align={'center'}
                                                        onChange={editProfileFunction.phone} value={phone}></TextBox>
                                                </Col>
                                                <Col span={5} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                                                    <Typo color={'#707070'} size={'0.8rem'}>'-'없이 숫자만 입력해 주세요.</Typo>
                                                </Col>

                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                <Button types={"primary"} block value={'번호저장'} onClick={editPhoneForm.close}></Button>
                                            </Col>
                                        </>

                                        :
                                        <>
                                            <Col span={9} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: '1rem'
                                            }}>
                                                <Typo weight={"bold"}>
                                                    {
                                                        (phone) ?
                                                            <Typo weight={"bold"}>
                                                                {
                                                                    phone
                                                                }
                                                            </Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>
                                                                {
                                                                    '전화번호를 기입해 주새요'
                                                                }
                                                            </Typo>
                                                    }
                                                </Typo>
                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                <Button block value={'번호수정'} onClick={editPhoneForm.show}></Button>
                                            </Col>

                                        </>

                                }
                            </Col>
                        </Row >

                        <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', }} >
                            <Col span={2} justify={"center"} align={"center"} style={{
                                backgroundColor: "#f5f5f5",
                                height: "3rem",
                            }}>
                                <Typo weight={"bold"}>* 성별</Typo>
                            </Col>
                            {

                                (isEditSexForm) ?
                                    <Col span={10} justify={'space-between'} >
                                        {
                                            <>
                                                <Col span={9} justify={"start"} align={"center"} style={{
                                                    backgroundColor: "#ffffff",
                                                    height: "3rem",
                                                    paddingLeft: "1rem"
                                                }}>


                                                    <Col span={4} align={"center"} justify={'start'}>
                                                        <RadioBox justify={'space-between'} name={"sex"} options={["남성", "여성"]} onClick={editProfileFunction.sex} checkedValue={settingSex(sex)}></RadioBox>
                                                    </Col>
                                                </Col>
                                                <Col span={3} justify={"center"} align={"center"} style={{
                                                    backgroundColor: "#ffffff",
                                                    height: "3rem"
                                                }}>
                                                    <Button block types={'primary'} value={'성별저장'} onClick={confirmModal.show}></Button>
                                                </Col>
                                            </>

                                        }
                                    </Col>
                                    :
                                    <Col span={10} justify={'space-between'} >
                                        {
                                            <>
                                                <Col span={9} justify={"start"} align={"center"} style={{
                                                    backgroundColor: "#ffffff",
                                                    height: "3rem",
                                                    paddingLeft: "1rem"
                                                }}>


                                                    <Col span={7} align={"center"} justify={'start'}>
                                                        {
                                                            (sex !== 'UNKNOWN') ?
                                                                <Typo weight={"bold"}>
                                                                    {settingSex(sex)}
                                                                </Typo>
                                                                :
                                                                <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>
                                                                    {
                                                                        '성별을 기입해 주새요'
                                                                    }
                                                                </Typo>
                                                        }
                                                    </Col>
                                                </Col>
                                                <Col span={3} justify={"center"} align={"center"} style={{
                                                    backgroundColor: "#ffffff",
                                                    height: "3rem"
                                                }}>
                                                    {
                                                        (sex !== 'UNKNOWN') ?
                                                            //null
                                                            <Button block value={'성별기입'} onClick={editSexForm.show}></Button>
                                                            :
                                                            <Button block value={'성별기입'} onClick={editSexForm.show}></Button>
                                                    }
                                                </Col>
                                            </>
                                        }
                                    </Col>
                            }
                        </Row >
                        <Row>
                            <Col span={12} xs={12}>
                                <Modal headerClose visible={isSexConfirmVisible}
                                    maskClosable={true} onClose={confirmModal.close} size={4}>
                                    <SexConfirmModal confirmModal={confirmModal} username={username} sex={sex} editSexForm={editSexForm}></SexConfirmModal>
                                </Modal>
                            </Col>
                        </Row>





                        {
                            (verified === "yes") ?
                                <>
                                    {/* //인증된경우 */}
                                    <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', }} >
                                        <Col span={2} justify={"center"} align={"center"} style={{
                                            backgroundColor: "#f5f5f5",
                                            height: "3rem",
                                        }}>
                                            <Typo weight={"bold"}>* 이메일</Typo>
                                        </Col>
                                        <Col span={10} justify={'space-between'} >
                                            <Col span={9} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: "1rem"
                                            }}>
                                                <TextBox color={"black"} border
                                                    radius={'22px'} align={'center'}
                                                    onChange={editProfileFunction.email} value={email} />
                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                {
                                                    <Button block value={'수정하기'} onClick={editSexForm.show}></Button>

                                                }
                                            </Col>
                                        </Col>
                                    </Row >
                                </>
                                :
                                <>
                                    {/* 인증안된경우 */}
                                    <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', }} >
                                        <Col span={2} justify={"center"} align={"center"} style={{
                                            backgroundColor: "#f5f5f5",
                                            height: "3rem",
                                        }}>
                                            <Typo weight={"bold"}>* 이메일</Typo>
                                        </Col>
                                        <Col span={10} justify={'space-between'} >
                                            <Col span={9} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: "1rem"
                                            }}>

                                                <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>
                                                    이메일인증이 반드시 필요합니다.
                                                                </Typo>
                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                {
                                                    (isEditEmailForm) ?
                                                        <Button block value={'인증취소'} onClick={editEmailForm.close}></Button>
                                                        :
                                                        <Button block value={'인증하기'} onClick={editEmailForm.show}></Button>

                                                }
                                            </Col>
                                        </Col>
                                    </Row >
                                    {/* 새로운 ROW */}
                                    {
                                        (isEditEmailForm) ?
                                            <>
                                                <VerifiedForm minutes={minutes} seconds={seconds} email={email} editProfileFunction={editProfileFunction} isInputAuthNum={isInputAuthNum}
                                                    editAuthNum={editAuthNum} inputAuthNumForm={inputAuthNumForm} isAuthNum={isAuthNum} editEmailForm={editEmailForm} />
                                            </>
                                            :
                                            <>
                                            </>
                                    }
                                </>
                        }






                        <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', borderBottom: '3px solid #000000', }} >
                            <Col span={2} justify={"center"} align={"center"} style={{
                                backgroundColor: "#f5f5f5",
                                height: "11rem"
                            }}>
                                <Typo weight={'bold'}>관심지역</Typo>
                            </Col>
                            <Col span={10} justify={"space-between"} >

                                <Col span={7} justify={"center"} style={{
                                    backgroundColor: "#ffffff",
                                    height: "10rem",
                                    paddingLeft: '1rem',
                                    alignContent: 'center'
                                }}>
                                    <Row style={{ height: '3rem' }}>
                                        <Col span={2} align={'center'} style={{ height: '3rem' }}>
                                            <Typo weight={'bold'}>1 순위</Typo>
                                        </Col>
                                        <Col span={6} align={'center'} style={{ height: '3rem' }}>
                                            <SelectBox background block border defaultValue={firstRegion} options={firstRegionOptions} onChange={editProfileFunction.firstRegion}></SelectBox>
                                        </Col>
                                        <Col span={1} align={'center'} style={{ height: '3rem' }} >
                                            <Button types={'primary'} size={'small'} block value={'저장'} onClick={() => editCompleted('1순위')} ></Button>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '0.8rem' }}>
                                        <Col span={2} align={'center'} style={{ height: '3rem' }}>
                                            <Typo weight={'bold'}>2 순위</Typo>
                                        </Col>
                                        <Col span={6} align={'center'} style={{ height: '3rem' }} >
                                            <SelectBox background block border defaultValue={secondRegion} options={secondRegionOptions} onChange={editProfileFunction.secondRegion}></SelectBox>
                                        </Col>
                                        <Col span={1} align={'center'} style={{ height: '3rem' }} >
                                            <Button types={'primary'} size={'small'} block value={'저장'} onClick={() => editCompleted('2순위')} ></Button>
                                        </Col>
                                    </Row>

                                    <Col span={12} style={{ marginTop: '1.8rem' }}>
                                        <Typo color={'#707070'} size={'0.8rem'}>-관심지역을 선택하시면 맞춤형 봉사활동을 알려드립니다.</Typo>
                                    </Col>
                                </Col>


                            </Col>
                        </Row>



                    </Col>
                </Row>
            </ContentLayout>
        </>
    )
}

export default ProfileContent;