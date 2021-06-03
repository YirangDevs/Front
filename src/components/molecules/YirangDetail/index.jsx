/*
 * @Author: chaeeun 
 * @Date: 2021-06-03 06:10:23 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-06-03 19:11:21
 */

import React from "react"
import styled from 'styled-components'

import Col from "../../../layout/Grid/Column"
import Row from "../../../layout/Grid/Row"
import Divider from "../../atoms/Divider"
import Image from "../../atoms/Image"
import Typo from '../../atoms/Typography'
import ContentLayout from "../../../layout/Content"
import TeamYirangImg from "../../../img/teamYirang.png"
import YirangPro from "../../../img/yirang_pro.png"

import YirangGS from "../../../img/yirang_GS.png"

import planman from "../../../img/plan.jpg"

import navermin from "../../../img/navermin.png"

import firstDragon from "../../../img/firstDragon.jpg"
import yhoo from "../../../img/yhoo.jpg"
import euncherry from "../../../img/chaeEun.png"

import ryung from "../../../img/ryung_kyung.jpg"
import jnkyng from "../../../img/jnkyug.jpg"

const HiddenScroll = styled.div`
display : flex;
justify-content :center;
align-items: center;

max-height: 34rem;
overflow: auto;
@media(min-width: 992px){
    max-height: 34rem;
}
@media(min-width: 1200px){
    max-height: 34rem;
}
@media(min-width: 1600px){
    max-height: 40rem;
}
::-webkit-scrollbar {
    display: none; 
}
`

const TeamHeader = styled.div`
display : flex;
justify-content :center;
align-items: center;
height : 100%;
width : 100%;
color : #707070;
font-size : 1.2rem;
cursor : pointer;
border-bottom : 2.7px solid #000000;
&:hover {
    background-color : #000000;
    color: #f5f5f5;
}
`
const NameTypo = styled.div`
padding-bottom : 6.7px;
border-bottom : #00fe06 2.7px solid;
font-size : 1.5rem;
font-weight : bold;
`

const VerticalDivider = styled.div`
height : 15px;
border-right : #707070 2px solid;
`


const YirangDetail = ({
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
        <ContentLayout>
            <HiddenScroll>
                <Row justify={'center'} align={"center"} style={{
                    maxHeight: 'inherit',
                    // overflow: 'auto',
                }}>
                    <Col span={12} justify={"center"} align={"center"}>
                        <Image src={TeamYirangImg} width={'43rem'} height={"10rem"}></Image>
                    </Col>
                    <Col span={12} justify={"center"} align={"center"}>
                        <Image src={YirangPro} width={"100%"} ></Image>
                    </Col>
                    <Col span={12} justify={"center"} align={"center"} style={{
                        marginTop: "4.25rem"
                    }}>
                        <Row justify={"center"} align={"center"} style={{
                            height: "3.8rem", backgroundColor: "#F5F5F5", borderBottom: "2.8px solid #000000"
                        }}>
                            <Col span={3} justify={"center"} align={"center"} style={{ height: "100%", borderRight: "1px solid #000000" }}>
                                <TeamHeader onClick={planningOnclick} >기획</TeamHeader>
                            </Col>
                            <Col span={3} justify={"center"} align={"center"} style={{ height: "100%", borderRight: "1px solid #000000" }}>
                                <TeamHeader onClick={frontOnclick}>프론트앤드</TeamHeader>
                            </Col>
                            <Col span={3} justify={"center"} align={"center"} style={{ height: "100%", borderRight: "1px solid #000000" }}>
                                <TeamHeader onClick={backOnclick} >백앤드</TeamHeader>
                            </Col>
                            <Col span={3} justify={"center"} align={"center"} style={{ height: "100%" }}>
                                <TeamHeader onClick={designOnclick} >디자인</TeamHeader>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={12} justify={"center"} align={"center"} style={{
                        height: "27rem"
                    }}>
                        {
                            (isPlanningTeamVisible) ?
                                <Row justify={"center"} align={"stretch"} style={{ height: 'inherit' }}>
                                    <Col span={12} justify={"center"} align={"center"}>
                                        <Row justify={"center"} align={"center"} style={{ height: '22rem', marginTop: '2.5rem' }}>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <Image src={planman} circle width={'12rem'} border={'#CDCDCD 3px solid'}  ></Image>
                                            </Col>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <NameTypo>백원호</NameTypo>
                                            </Col>
                                        </Row>
                                        <Row justify={"center"} align={"center"}>
                                            <Col xs={7} sm={5} md={5} lg={5} xl={5} xxl={4} justify={"space-evenly"} align={"center"}>
                                                <Typo color={'#7A7A7A'} size={'1.1rem'}>CONTACT</Typo>
                                                <VerticalDivider></VerticalDivider>
                                                <Typo color={'rgba(0,0,0,0.5)'} size={'1rem'}>github.com/ChoiYongWon</Typo>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                :
                                null
                        }
                        {
                            (isFrontTeamVisible) ?
                                <Row justify={"center"} align={"stretch"} style={{ height: 'inherit' }}>
                                    <Col span={4} justify={"center"} align={"center"}>
                                        <Row justify={"center"} align={"center"} style={{
                                            height: '22rem',
                                            marginTop: '2.5rem'
                                        }}>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <Image src={firstDragon} circle width={'12rem'} border={'#CDCDCD 3px solid'}  ></Image>
                                            </Col>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <NameTypo>최용원</NameTypo>
                                            </Col>
                                        </Row>
                                        <Row justify={"center"} align={"center"}>
                                            <Col xs={0} sm={0} md={12} span={12} justify={"space-evenly"} align={"center"}>
                                                <Typo color={'#7A7A7A'} size={'1.1rem'}>CONTACT</Typo>
                                                <VerticalDivider></VerticalDivider>
                                                <Typo color={'rgba(0,0,0,0.5)'} size={'1rem'}>github.com/ChoiYongWon</Typo>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col span={4} justify={"center"} align={"center"}>
                                        <Row justify={"center"} align={"center"} style={{ height: '22rem', marginTop: '2.5rem' }}>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <Image src={euncherry} circle width={'12rem'} border={'#CDCDCD 3px solid'}  ></Image>
                                            </Col>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <NameTypo>이채은</NameTypo>
                                            </Col>
                                        </Row>
                                        <Row justify={"center"} align={"center"}>
                                            <Col xs={0} sm={0} md={12} span={12} justify={"space-evenly"} align={"center"}>
                                                <Typo color={'#7A7A7A'} size={'1.1rem'}>CONTACT</Typo>
                                                <VerticalDivider></VerticalDivider>
                                                <Typo color={'rgba(0,0,0,0.5)'} size={'1rem'}>github.com/euncherry</Typo>
                                            </Col>
                                        </Row>
                                    </Col>


                                    <Col span={4} justify={"center"} align={"center"}>
                                        <Row justify={"center"} align={"center"} style={{ height: '22rem', marginTop: '2.5rem' }}>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <Image src={yhoo} circle width={'12rem'} border={'#CDCDCD 3px solid'}  ></Image>
                                            </Col>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <NameTypo>박연후</NameTypo>
                                            </Col>
                                        </Row>
                                        <Row justify={"center"} align={"center"}>
                                            <Col xs={0} sm={0} md={12} span={12} justify={"space-evenly"} align={"center"}>
                                                <Typo color={'#7A7A7A'} size={'1.1rem'}>CONTACT</Typo>
                                                <VerticalDivider></VerticalDivider>
                                                <Typo color={'rgba(0,0,0,0.5)'} size={'1rem'}>github.com/cindy9899</Typo>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                : null
                        }
                        {
                            (isBackTeamVisible) ?
                                <Row justify={"center"} align={"stretch"} style={{ height: 'inherit' }}>
                                    <Col span={12} justify={"center"} align={"center"}>
                                        <Row justify={"center"} align={"center"} style={{ height: '22rem', marginTop: '2.5rem' }}>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <Image src={navermin} circle width={'12rem'} border={'#CDCDCD 3px solid'}  ></Image>
                                            </Col>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <NameTypo>유정민</NameTypo>
                                            </Col>
                                        </Row>
                                        <Row justify={"center"} align={"center"}>
                                            <Col xs={7} sm={5} md={5} lg={5} xl={5} xxl={4} justify={"space-evenly"} align={"center"}>
                                                <Typo color={'#7A7A7A'} size={'1.1rem'}>CONTACT</Typo>
                                                <VerticalDivider></VerticalDivider>
                                                <Typo color={'rgba(0,0,0,0.5)'} size={'1rem'}>github.com/Biewoom</Typo>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                : null
                        }
                        {
                            (isDesignTeamVisible) ?
                                <Row justify={"center"} align={"stretch"} style={{ height: 'inherit' }}>
                                    <Col span={6} justify={"center"} align={"center"}>
                                        <Row justify={"center"} align={"center"} style={{ height: '22rem', marginTop: '2.5rem' }}>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <Image src={ryung} circle width={'12rem'} border={'#CDCDCD 3px solid'}  ></Image>
                                            </Col>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <NameTypo>김령경</NameTypo>
                                            </Col>
                                        </Row>
                                        <Row justify={"center"} align={"center"}>
                                            <Col xs={0} sm={0} md={10} lg={10} xl={10} xxl={10} justify={"space-evenly"} align={"center"}>
                                                <Typo color={'#7A7A7A'} size={'1.1rem'}>CONTACT</Typo>
                                                <VerticalDivider></VerticalDivider>
                                                <Typo color={'rgba(0,0,0,0.5)'} size={'1rem'}>artrk1378.gmail@yu.ac.kr</Typo>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col span={6} justify={"center"} align={"center"}>
                                        <Row justify={"center"} align={"center"} style={{ height: '22rem', marginTop: '2.5rem' }}>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <Image src={jnkyng} circle width={'12rem'} border={'#CDCDCD 3px solid'}  ></Image>
                                            </Col>
                                            <Col span={12} justify={"center"} align={"center"} >
                                                <NameTypo>여진경</NameTypo>
                                            </Col>
                                        </Row>
                                        <Row justify={"center"} align={"center"}>
                                            <Col xs={0} sm={0} md={10} lg={10} xl={10} xxl={10} justify={"space-evenly"} align={"center"}>
                                                <Typo color={'#7A7A7A'} size={'1.1rem'}>CONTACT</Typo>
                                                <VerticalDivider></VerticalDivider>
                                                <Typo color={'rgba(0,0,0,0.5)'} size={'1rem'}>yjk6120@gmail.com</Typo>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                : null

                        }





                    </Col>


                    <Col span={12} justify={"flex-start"} align={"center"}>
                        <Divider marginTop={'50px'} marginBottom={'0px'} radius={'5px'} borderWidth={'8px'} width={'15rem'} color={"#000000"} ></Divider>
                        <Divider marginTop={'2.8px'} marginBottom={'0px'} borderWidth={'2.26px'} color={'#C7C7C7'}></Divider>
                    </Col>

                    {/* SECTION footer */}
                    <Col span={12} justify={"center"} align={"center"} style={{ marginTop: '62px' }}>
                        <Image src={YirangGS} width={'300px'} height={'90px'}></Image>
                        <Typo full>손길 한입한입이 모여서 행복을 만듭니다.</Typo>
                        <Typo full>희망의 싱그러움이 울리는 방법 `그린시그널`</Typo>
                    </Col>
                    {/* !SECTION footer */}

                </Row>
            </HiddenScroll>
        </ContentLayout >

    )

}

export default YirangDetail