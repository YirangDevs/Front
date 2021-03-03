/** 
 * @author : chaeeun 
 * @date : 2021-02-24 16:20:36 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-03 00:31:45
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


const ProfileContent = ({
    //contentContainer
    userProfile,
    editProfileFunction,
    isEditNameForm,
    editNameForm,
    isEditEmailForm,
    editEmailForm,
}) => {
    console.log(userProfile)

    const { username, realname, phone, email, checkedEmail, sex, imgUrl, firstRegion, secondRegion, role } = userProfile;
    console.log(username)
    console.log("realname")
    return (
        <>
            <ContentLayout style={{
                margin: '3rem 4rem',
                border: "1px solid #ccd4e0",
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
                                <Typo size={"1.2rem"} weight={"500"}>로그인 된 카카오계정</Typo>
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
                                <Typo size={"1.2rem"} weight={"500"} > 프로필 수정</Typo>
                            </Col>
                        </Row>


                        <Row style={{ marginTop: '15px', borderTop: '3px solid #000000', }} >
                            <Col span={2} justify={"center"} align={"center"} style={{
                                backgroundColor: "#f5f5f5",
                                height: "3rem"
                            }}>
                                <Typo weight={500}>닉네임</Typo>
                            </Col>

                            {
                                (isEditNameForm) ?
                                    <>
                                        <Col span={8} justify={"start"} align={"center"} style={{
                                            backgroundColor: "#ffffff",
                                            height: "3rem",
                                            paddingLeft: "1.5rem"
                                        }}>
                                            <Row>
                                                <Col span={4}>
                                                    <TextBox color={"black"} border radius={'22px'} align={'center'} onChange={editProfileFunction.username} value={username}></TextBox>
                                                </Col>
                                                <Col span={6} align={"center"} style={{ color: 'gray' }}>
                                                    <TextBox block value={"초기설정은 카톡닉네임입니다."}></TextBox>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={2} justify={"center"} align={"center"} style={{
                                            backgroundColor: "#ffffff",
                                            height: "3rem"
                                        }}>
                                            <Button types={"primary"} block value={'이름저장'} onClick={editNameForm.close}></Button>
                                        </Col>
                                    </>
                                    :
                                    <>
                                        <Col span={8} justify={"start"} align={"center"} style={{
                                            backgroundColor: "#ffffff",
                                            height: "3rem",
                                            paddingLeft: "1.5rem"
                                        }}>
                                            <Typo weight={500}>
                                                {
                                                    userProfile.realname || userProfile.username
                                                }
                                            </Typo>
                                        </Col>
                                        <Col span={2} justify={"center"} align={"center"} style={{
                                            backgroundColor: "#ffffff",
                                            height: "3rem"
                                        }}>
                                            <Button block value={'이름변경'} onClick={editNameForm.show}></Button>
                                        </Col>
                                    </>
                            }
                        </Row>



                        {
                            (isEditEmailForm) ?
                                <>
                                    <Row style={{ borderTop: '1.8px solid #000000', }} >
                                        <Col span={2} justify={"center"} align={"center"} style={{
                                            backgroundColor: "#f5f5f5",
                                            height: "5rem"
                                        }}>
                                            <Typo weight={500}>이메일</Typo>
                                        </Col>
                                        <Col span={8} justify={"start"} align={"center"} style={{
                                            backgroundColor: "#ffffff",
                                            height: "5rem",
                                            paddingLeft: "1.5rem"
                                        }}>
                                            <Row>
                                                <Col span={12} >
                                                    <TextBox color={"black"} border radius={'22px'} align={'center'} onChange={editProfileFunction.email} value={email}></TextBox>
                                                </Col>
                                                <Col span={12} align={"center"} style={{ color: 'gray' }}>
                                                    <TextBox block value={"초기설정은 카톡이메일입니다."}></TextBox>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={2} justify={"center"} align={"center"} style={{
                                            backgroundColor: "#ffffff",
                                            height: "3rem"
                                        }}>
                                            <Button types={"primary"} block value={'인증완료'} onClick={editEmailForm.close}></Button>
                                        </Col>
                                    </Row>
                                </>
                                :
                                <>
                                    <Row style={{ borderTop: '1.8px solid #000000', }} >
                                        <Col span={2} justify={"center"} align={"center"} style={{
                                            backgroundColor: "#f5f5f5",
                                            height: "3rem"
                                        }}>
                                            <Typo weight={500}>이메일</Typo>
                                        </Col>
                                        <Col span={8} justify={"start"} align={"center"} style={{
                                            backgroundColor: "#ffffff",
                                            height: "3rem",
                                            paddingLeft: "1.5rem"
                                        }}>
                                            <Typo weight={500}>
                                                {
                                                    email
                                                }
                                            </Typo>
                                        </Col>
                                        <Col span={2} justify={"center"} align={"center"} style={{
                                            backgroundColor: "#ffffff",
                                            height: "3rem"
                                        }}>
                                            <Button block value={'이메일 인증'} onClick={editEmailForm.show}></Button>
                                        </Col>
                                    </Row>
                                </>
                        }



                    </Col>
                </Row>
            </ContentLayout>
        </>
    )
}

export default ProfileContent;