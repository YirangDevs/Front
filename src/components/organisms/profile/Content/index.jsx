/** 
 * @author : chaeeun 
 * @date : 2021-02-24 16:20:36 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-28 01:59:28
 */


import React from "react"
import MypageNav from "../../../molecules/MypageNav"
import UserInfo from "../../../../containers/redux/components/UserInfo"
import Typo from "../../../atoms/Typography"


import ContentLayout from "../../../../layout/Content"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"


const ProfileContent = ({
    //contentContainer
    userProfile,
    editFunction
}) => {
    console.log(userProfile)

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
                        <Row>
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"500"} > 봉사 관리</Typo>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentLayout>
        </>
    )
}

export default ProfileContent;