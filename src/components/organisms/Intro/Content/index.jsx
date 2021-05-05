/** 
 * @author: chaeeun 
 * @Date : 2021-05-04 17:25:02 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-05-04 20:26:32
 */

import React from 'react'
import Video from '../../../atoms/Video';
import MainVideo from "../../../../mp4/main.mp4"
import Row from '../../../../layout/Grid/Row';
import Col from '../../../../layout/Grid/Column';
import Image from "../../../atoms/Image/"
import GreenSignalIcon from "../../../../img/IconGreenSignal.png"
import Typo from '../../../atoms/Typography';

const IntroContent = ({ role }) => {

    return (
        <>
            <Video src={MainVideo} width={"100%"} height={"auto"}></Video>

            <Row justify={"center"}>
                <Col span={12} justify={"center"} align={'center'} style={{ height: "16.63rem", backgroundColor: "#fc8787" }}>
                    <Image src={GreenSignalIcon} width={"23.63rem"} height={"auto"}></Image>
                </Col>
                <Col span={12} justify={"center"} align={'center'} style={{ height: "16.63rem", background: "linear-gradient( 55deg, #96fd00, #00b700 )" }}>
                    <Row justify={'center'} align={'start'} style={{ border: "3px black solid" }}>
                        <Col span={2} justify={'center'} align={'center'}><Typo size={'2rem'} color={"#ffffff"} weight={'bold'}>재가 봉사 가치</Typo></Col>
                        <Col span={7} >
                            <Typo size={"1.1rem"} color={"#ffffff"}>자원봉사는 자발,자주,자유의자라는 뜻의 라틴어(voluntas)에서 유래되었고,</Typo>
                            <Typo size={"1.1rem"} color={"#ffffff"}>자원봉사활동(Voluntarism)이란 개인 및 단체의 자발적 참여와 대가없이 도움이 필요한 이웃과 사회에 </Typo>
                            <Typo size={"1.1rem"} color={"#ffffff"}>시간과 재능을 제공하여 사회문제 해결 및 사회공익에 기여하는 것을 말하며, 이러한 자원봉사활동을 실전에</Typo>
                            <Typo size={"1.1rem"} color={"#ffffff"}>옮기는 사람을 자원봉사자(Volunteer)라고 합니다.</Typo>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default IntroContent;