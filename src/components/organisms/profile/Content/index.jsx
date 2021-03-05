/** 
 * @author : chaeeun 
 * @date : 2021-02-24 16:20:36 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-04 04:02:15
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
import CheckBox from "../../../atoms/CheckBox"
import SelectBox from "../../../atoms/SelectBox"

const ProfileContent = ({
    //contentContainer
    userProfile,
    editProfileFunction,
    isEditNameForm,
    editNameForm,
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
}) => {
    console.log(userProfile)

    const { username, imgUrl, realname, phone, email, checkedEmail, sex,
        firstRegion, secondRegion, role, } = userProfile;


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
                                <Typo size={"2.3rem"} weight={'bold'}>{userProfile.username}</Typo>
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
                                <MypageNav role={userProfile.role} />
                            </Col>
                        </Row>
                    </Col>


                    <Col span={7.5} offset={0.5}>
                        <Row >
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"bold"} > 프로필 수정</Typo>
                            </Col>
                        </Row>


                        <Row justify={"space-between"} style={{ marginTop: '15px', borderTop: '3px solid #000000', }} >
                            <Col span={2} justify={"center"} align={"center"} style={{
                                backgroundColor: "#f5f5f5",
                                height: "3rem",
                            }}>
                                <Typo weight={"bold"}>닉네임</Typo>
                            </Col>
                            <Col span={10} justify={'space-between'} >
                                {
                                    (isEditNameForm) ?
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
                                                <Button types={"primary"} block value={'이름저장'} onClick={editNameForm.close}></Button>
                                            </Col>
                                        </>

                                        :
                                        <>
                                            <Col span={5} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: '1rem'
                                            }}>
                                                <Typo weight={"bold"}>
                                                    {
                                                        userProfile.realname || userProfile.username
                                                    }
                                                </Typo>
                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                <Button block value={'이름변경'} onClick={editNameForm.show}></Button>
                                            </Col>

                                        </>

                                }
                            </Col>
                        </Row >


                        <Row justify={"space-between"} style={{ marginTop: '15px', borderTop: '3px solid #000000', }} >
                            <Col span={2} justify={"center"} align={"center"} style={{
                                backgroundColor: "#f5f5f5",
                                height: "3rem",
                            }}>
                                <Typo weight={"bold"}>이름</Typo>
                            </Col>
                            <Col span={10} justify={'space-between'} >
                                {
                                    (isEditNameForm) ?
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
                                                    <Typo color={'#707070'} size={'0.8rem'}>반드시 실명을 기입해 주세요.</Typo>
                                                </Col>

                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                <Button types={"primary"} block value={'이름저장'} onClick={editNameForm.close}></Button>
                                            </Col>
                                        </>

                                        :
                                        <>
                                            <Col span={5} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: '1rem'
                                            }}>
                                                <Typo weight={"bold"}>
                                                    {
                                                        userProfile.realname || userProfile.username
                                                    }
                                                </Typo>
                                            </Col>
                                            <Col span={3} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem"
                                            }}>
                                                <Button block value={'이름변경'} onClick={editNameForm.show}></Button>
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
                                <Typo weight={"bold"}>전화번호</Typo>
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
                                            <Col span={5} justify={"start"} align={"center"} style={{
                                                backgroundColor: "#ffffff",
                                                height: "3rem",
                                                paddingLeft: '1rem'
                                            }}>
                                                <Typo weight={"bold"}>
                                                    {
                                                        phone || `전화번호를 기입해주세요`
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

                        {
                            (isEditEmailForm) ?
                                (isInputAuthNum) ?
                                    <>

                                        <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', }} >
                                            <Col span={2} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#f5f5f5",
                                                height: "3rem"
                                            }}>
                                                <Typo weight={'bold'}>이메일 인증</Typo>
                                            </Col>
                                            <Col span={10} justify={"space-between"}>
                                                <Col span={7} justify={"start"} align={"center"} style={{
                                                    backgroundColor: "#ffffff",
                                                    height: "3rem",
                                                    paddingLeft: '1rem'
                                                }}>
                                                    <Typo weight={'bold'}>
                                                        {
                                                            email
                                                        }
                                                    </Typo>
                                                </Col>
                                                <Col span={3} justify={"center"} align={"center"} style={{
                                                    backgroundColor: "#ffffff",
                                                    height: "3rem"
                                                }}>
                                                    <Button block value={'변경취소'} onClick={editEmailForm.close}></Button>
                                                </Col>
                                            </Col>
                                        </Row>


                                        <Row justify={"space-between"}>
                                            <Col span={2} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#f5f5f5",
                                                height: "4rem"
                                            }}>
                                                <Typo weight={'bold'}></Typo>
                                            </Col>
                                            <Col span={10} justify={"space-between"}>
                                                <Row justify={"space-between"}>
                                                    <Col span={12} style={{ paddingLeft: '1rem' }}>
                                                        <Typo color={'#707070'} size={'0.8rem'}>입력하신({email})로 인증메일이 발송되었습니다.</Typo>
                                                    </Col>
                                                    <Col span={3} justify={"start"} align={"center"} style={{
                                                        backgroundColor: "#ffffff",
                                                        height: "3rem",
                                                        paddingLeft: '1rem'
                                                    }}>

                                                        <TextBox color={"black"} placeholder={"인증번호를 입력해 주세요"}
                                                            border radius={'22px'} align={'center'}
                                                            onChange={editProfileFunction.email} value={isAuthNum}></TextBox>

                                                    </Col>
                                                    <Col span={5} justify={'start'} align={"center"} style={{
                                                        backgroundColor: "#ffffff",
                                                        height: "3rem",
                                                    }}>
                                                        <Row justify={'center'} align={"center"}>

                                                            <Col span={12}>
                                                                <Typo color={'#707070'} size={'0.7rem'}>남은 시간 : 03:00</Typo>
                                                            </Col>
                                                        </Row>


                                                    </Col>

                                                    <Col span={3} justify={"center"} align={"center"} style={{
                                                        backgroundColor: "#ffffff",
                                                        height: "3rem"
                                                    }}>
                                                        <Row justify={'space-between'}>

                                                            <Col span={5}>
                                                                <Button types={'primary'} block value={'재발송'} onClick={editEmailForm.show}></Button>
                                                            </Col>
                                                            <Col span={5}>
                                                                <Button types={'primary'} block value={'인증하기'} onClick={editEmailForm.show}></Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                </Row>


                                            </Col>
                                        </Row>
                                    </>
                                    :

                                    <>

                                        <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', }} >
                                            <Col span={2} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#f5f5f5",
                                                height: "3rem"
                                            }}>
                                                <Typo weight={'bold'}>이메일 인증</Typo>
                                            </Col>
                                            <Col span={10} justify={"space-between"}>
                                                <Col span={7} justify={"start"} align={"center"} style={{
                                                    backgroundColor: "#ffffff",
                                                    height: "3rem",
                                                    paddingLeft: '1rem'
                                                }}>
                                                    <Typo weight={'bold'}>
                                                        {
                                                            email
                                                        }
                                                    </Typo>
                                                </Col>
                                                <Col span={3} justify={"center"} align={"center"} style={{
                                                    backgroundColor: "#ffffff",
                                                    height: "3rem"
                                                }}>
                                                    <Button block value={'변경취소'} onClick={editEmailForm.close}></Button>
                                                </Col>
                                            </Col>
                                        </Row>

                                        <Row justify={"space-between"}>
                                            <Col span={2} justify={"center"} align={"center"} style={{
                                                backgroundColor: "#f5f5f5",
                                                height: "3rem"
                                            }}>
                                                <Typo weight={'bold'}></Typo>
                                            </Col>
                                            <Col span={10} justify={"space-between"}>
                                                <Col span={7} justify={"start"} align={"center"} style={{
                                                    backgroundColor: "#ffffff",
                                                    height: "3rem",
                                                    paddingLeft: '1rem'
                                                }}>
                                                    <TextBox color={"black"} placeholder={"이메일을 입력해 주세요"}
                                                        border radius={'22px'} align={'center'}
                                                        onChange={editProfileFunction.email} value={email}></TextBox>

                                                </Col>
                                                <Col span={3} justify={"center"} align={"center"} style={{
                                                    backgroundColor: "#ffffff",
                                                    height: "3rem"
                                                }}>
                                                    <Button types={'primary'} block value={'인증메일 발송'} onClick={inputAuthNumForm.show}></Button>
                                                </Col>
                                            </Col>
                                        </Row>
                                    </>
                                :
                                <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', }} >
                                    <Col span={2} justify={"center"} align={"center"} style={{
                                        backgroundColor: "#f5f5f5",
                                        height: "3rem"
                                    }}>
                                        <Typo weight={'bold'}>이메일</Typo>
                                    </Col>
                                    <Col span={10} justify={"space-between"} >
                                        <Col span={7} justify={"start"} align={"center"} style={{
                                            backgroundColor: "#ffffff",
                                            height: "3rem",
                                            paddingLeft: '1rem'
                                        }}>
                                            <Typo weight={'bold'}>
                                                {
                                                    email
                                                }
                                            </Typo>
                                        </Col>
                                        <Col span={3} justify={"center"} align={"center"} >
                                            <Button block value={'이메일 변경'} onClick={editEmailForm.show}></Button>
                                        </Col>
                                    </Col>
                                </Row>
                        }


                        <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', }} >
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
                                    <Img src={imgUrl} width={'6rem'} circle></Img>
                                </Col>
                                <Col span={3}>
                                    <Row justify={'center'} align={'center'}>
                                        <Col span={12}>
                                            <Button block value={'기본 이미지로'} onClick={editProfileFunction.defaultImg}></Button>
                                        </Col>
                                        <Col span={12} >
                                            <Button block value={'프로필 사진으로'} onClick={editProfileFunction.imgUrl}></Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Row>


                        <Row justify={"space-between"} style={{ borderTop: '1.8px solid #000000', borderBottom: '3px solid #000000', }} >
                            <Col span={2} justify={"center"} align={"center"} style={{
                                backgroundColor: "#f5f5f5",
                                height: "10rem"
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

                                    </Row>
                                    <Row style={{ marginTop: '0.8rem' }}>
                                        <Col span={2}>
                                            <Typo weight={'bold'}>2 순위</Typo>
                                        </Col>
                                        <Col span={6}>
                                            <SelectBox background block border defaultValue={secondRegion} options={secondRegionOptions} onChange={editProfileFunction.secondRegion}></SelectBox>
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