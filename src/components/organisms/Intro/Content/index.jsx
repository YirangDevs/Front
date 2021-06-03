/** 
 * @author: chaeeun 
 * @Date : 2021-05-04 17:25:02 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-06-03 14:56:04
 */

import React from 'react'
import Video from '../../../atoms/Video';
import MainVideo from "../../../../mp4/main.mp4"
import Row from '../../../../layout/Grid/Row';
import Col from '../../../../layout/Grid/Column';
import Image from "../../../atoms/Image/"
import GreenSignalIcon from "../../../../img/IconGreenSignal.png"
import HandImage from "../../../../img/HandImage.png"
import GreenSignalLiterally from "../../../../img/GreenSignalLiterally.svg"
import OneselfIcon from "../../../../img/OneselfIcon.svg"
import ContinuousIcon from "../../../../img/ContinuousIcon.svg"
import PublicIcon from "../../../../img/PublicIcon.svg"
import Typo from '../../../atoms/Typography';
import MenuIconNav from "../../../../containers/redux/components/MenuIconNav"




import YirangForm from "../YirangForm/index"
import Modal from '../../../atoms/Modal';

const IntroContent = ({
    role,
    isTeamYirangVisible,
    teamYirangModal,
    isPlanningTeamVisible,
    isFrontTeamVisible,
    isBackTeamVisible,
    isDesignTeamVisible,
    planningOnclick,
    frontOnclick,
    backOnclick,
    designOnclick
}) => {

    return (
        <>
            <Video src={MainVideo} width={"100%"} height={"auto"}></Video>


            <Row justify={"center"}>
                {/* SECTION  ICON */}
                <Col span={12} justify={"center"} align={'center'} style={{ height: "14.8rem" }}>
                    <Image src={GreenSignalIcon} width={"23.63rem"} height={"auto"}></Image>
                </Col>
                {/* !SECTION  ICON */}

                {/* SECTION  재가봉사 가치 */}
                <Col span={12} justify={"center"} align={'center'} style={{ height: "14.2rem", background: "linear-gradient( 55deg, #96fd00, #00b700 )" }}>
                    <Row justify={"center"} align={'center'}>
                        <Col span={10} justify={"center"} >
                            <Row justify={'space-between'} align={'start'}>
                                <Col xs={12} sm={12} md={4} lg={12} xl={3} xxl={3} justify={'start'} align={'center'} style={{ marginBottom: "1rem" }}>
                                    <Typo fontFamily={"Helvetica"} size={'1.9rem'} color={"#ffffff"} weight={'bold'}>재가봉사 가치</Typo>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={9} xxl={9} >
                                    <Typo size={"1.3rem"} color={"#ffffff"}>자원봉사는 자발,자주,자유의자라는 뜻의 라틴어(voluntas)에서 유래되었고,</Typo>
                                    <Typo size={"1.3rem"} color={"#ffffff"}>자원봉사활동(Voluntarism)이란 개인 및 단체의 자발적 참여와 대가없이 도움이 필요한 이웃과 사회에 </Typo>
                                    <Typo size={"1.3rem"} color={"#ffffff"}>시간과 재능을 제공하여 사회문제 해결 및 사회공익에 기여하는 것을 말하며, 이러한 자원봉사활동을 실천에</Typo>
                                    <Typo size={"1.3rem"} color={"#ffffff"}>옮기는 사람을 자원봉사자(Volunteer)라고 합니다.</Typo>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                {/* !SECTION  재가봉사 가치 */}

                {/* SECTION  GreenSignal 의미 */}
                <Col span={12} justify={"center"} align={'center'} style={{ height: "23rem" }}>
                    <Row justify={"center"} align={'center'}>
                        <Col span={8} justify={"center"} align={'center'}>
                            <Row justify={"space-between"} align={'center'}>
                                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} justify={"center"} align={'center'} >
                                    <Image src={GreenSignalLiterally} width={"21.31rem"} height={"auto"}></Image>
                                </Col>
                                <Col xs={0} sm={6} md={6} lg={6} xl={6} xxl={5} justify={"start"} align={'start'} >
                                    <Typo size={"1.2rem"} color={"#008200"}>손길 한잎한잎이 모여서 행복을 만듭니다.</Typo>
                                    <Typo size={"1.2rem"} color={"#008200"}>희망의 싱그러움이 울리는 방법 '그린시그널'</Typo>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                {/* !SECTION  GreenSignal 의미 */}

                {/* SECTION  GreenSignal 의미  Icon */}
                <Col span={12} justify={"center"} align={'start'} style={{ height: "25rem" }}>
                    <Row justify={"center"} align={'center'}>
                        <Col span={4}>
                            <Row justify={"center"} align={'center'} style={{ height: "19rem", borderRight: "2px rgba(0,0,0,0.31) solid" }}>
                                <Col span={12} justify={"center"} align={'center'} style={{ paddingTop: "2rem" }} >
                                    <Image src={OneselfIcon} height={"auto"} width={"4.5rem"}></Image>
                                </Col>
                                <Col span={12} justify={"center"} align={'center'}>
                                    <Typo size={'1.9rem'} color={"#000000"} weight={500}>자발성</Typo>
                                </Col>
                                <Col xs={0} sm={12} md={12} lg={12} xl={12} xxl={12} span={12} justify={"center"} align={'center'} style={{ padding: "1rem 0" }}>
                                    <Typo full size={'1rem'} color={"#000000"} >자신의 의사로써 시간과 재능, 경험을 도움이</Typo>
                                    <Typo full size={'1rem'} color={"#000000"} >필요한 이웃과 지역사회 공동체 형성에 아무런 </Typo>
                                    <Typo full size={'1rem'} color={"#000000"} > 대가 없이 활동하는 것입니다.</Typo>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <Row justify={"center"} align={'center'} style={{ height: "19rem", borderRight: "2px rgba(0,0,0,0.31) solid" }}>
                                <Col span={12} justify={"center"} align={'center'} style={{ paddingTop: "2rem" }} >
                                    <Image src={ContinuousIcon} height={"auto"} width={"4.5rem"}></Image>
                                </Col>
                                <Col span={12} justify={"center"} align={'center'}>
                                    <Typo size={'1.9rem'} color={"#000000"} weight={500}>지속성</Typo>
                                </Col>
                                <Col xs={0} sm={12} md={12} lg={12} xl={12} xxl={12} span={12} justify={"center"} align={'center'} style={{ padding: "1rem 0" }}>
                                    <Typo full size={'1rem'} color={"#000000"} >자원봉사활동에 참여하게 되면 </Typo>
                                    <Typo full size={'1rem'} color={"#000000"} >일정기간동안 지속성과 정기적으로</Typo>
                                    <Typo full size={'1rem'} color={"#000000"} >봉사활동에 참여하는 것을 의미합니다.</Typo>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <Row justify={"center"} align={'center'} style={{ height: "19rem" }}>
                                <Col span={12} justify={"center"} align={'center'} style={{ paddingTop: "2rem" }}>
                                    <Image src={PublicIcon} height={"auto"} width={"4.5rem"}></Image>
                                </Col>
                                <Col span={12} justify={"center"} align={'center'}>
                                    <Typo size={'1.9rem'} color={"#000000"} weight={500}>공익성</Typo>
                                </Col>
                                <Col xs={0} sm={12} md={12} lg={12} xl={12} xxl={12} span={12} justify={"center"} align={'center'} style={{ padding: "1rem 0" }}>
                                    <Typo full size={'1rem'} color={"#000000"} >이웃과 지역사회내에 산재하고 </Typo>
                                    <Typo full size={'1rem'} color={"#000000"} >있는 문제를 해결하여 삶의 질을 향상시키기 </Typo>
                                    <Typo full size={'1rem'} color={"#000000"} >위하여 활동하는 것을 의미합니다.</Typo>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                {/* !SECTION GreenSignal 의미  Icon */}

                {/* SECTION  ABOUT TEAM YIRANG*/}
                <Col span={12} justify={"flex-end"} align={'center'} style={{ height: "26rem", backgroundImage: `url("${HandImage}" )`, backgroundSize: 'cover' }}>

                    <Col xs={12} sm={12} md={5} lg={6} xl={12} xxl={6} span={6} style={{ height: "14rem" }}>
                        <Row justify={"center"} align={'center'} >
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} span={12} justify={"center"} align={'center'}>
                                <Typo color={"#ffffff"} weight={'bold'} size={'1.5rem'} fontFamily={"Helvetica"} > ABOUT TEAM YIRANG</Typo>
                            </Col>
                            <Col xs={12} sm={12} md={0} lg={12} xl={12} xxl={12} span={12} justify={"center"} align={'center'}>
                                <Typo full fontFamily={'NanumSquareOTF_ac'} color={"#ffffff"} >TeamYirang은<Typo fontFamily={'NanumSquareOTF_ac'} color={"#ffffff"} weight={'bold'}>기획,프론트앤드,백앤드,디자인 팀</Typo>으로 </Typo>
                                <Typo full fontFamily={'NanumSquareOTF_ac'} color={"#ffffff"} >구성하여 만들어졌으며 언제든지 소통과 컨택의 문이 열려있습니다. </Typo>
                            </Col>
                            <Col span={12} justify={"center"} align={'center'} style={{ height: "4rem", marginTop: "2rem" }} >
                                {/* TODO 이거 모니터엥ㅇ서 고쳐양데 */}
                                <Typo padding={'20px 40px'} border={"3.1px solid black"} fontFamily={"Helvetica"} size={'1.4rem'} weight={'bold'} cursor={'pointer'} onClick={teamYirangModal.show}>TEAM : YIRANG</Typo>

                            </Col>
                        </Row>
                    </Col>

                </Col>
                {/* !SECTION  ABOUT TEAM YIRANG */}

                {/* SECTION  TeamYirang Modal*/}


                <Col span={12}>
                    <Modal visible={isTeamYirangVisible} headerClose
                        closable={true} maskClosable={true} onClose={teamYirangModal.close} size={10}>
                        <YirangForm isPlanningTeamVisible={isPlanningTeamVisible}
                            isFrontTeamVisible={isFrontTeamVisible}
                            isBackTeamVisible={isBackTeamVisible}
                            isDesignTeamVisible={isDesignTeamVisible}
                            planningOnclick={planningOnclick}
                            frontOnclick={frontOnclick}
                            backOnclick={backOnclick}
                            designOnclick={designOnclick}></YirangForm>
                    </Modal>
                </Col>

                {/* !SECTION  TeamYirang Modal */}

                {/* SECTION  Icon BTN*/}
                <Col span={12} justify={"center"} align={'center'} style={{ height: "24rem" }}>
                    <MenuIconNav></MenuIconNav>
                </Col>
                {/* !SECTION  Icon BTN */}
                {/* SECTION Footer*/}
                <Col span={12} justify={"flex-start"} align={'center'} style={{ height: "4.5rem", backgroundColor: "rgba(0,0,0,0.03) " }}>
                    <Row>
                        <Col xs={10} sm={8} md={5} lg={4} xl={4} xxl={4} span={4} justify={'space-around'} align={'center'} >
                            <Typo weight={'bold'} size={'1.1rem'}>Copyright 2020</Typo>
                            <Typo size={'1rem'} color={"#000000"}>TEAM : YIRANG. all right reserved</Typo>
                        </Col>
                    </Row>

                </Col>
                {/* !SECTION Footer*/}

            </Row>
        </>
    )
}

export default IntroContent;