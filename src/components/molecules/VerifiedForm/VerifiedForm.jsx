/** 
 * @author : chaeeun 
 * @Date : 2021-03-08 15:18:31 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-15 05:28:36
 */

import React from "react"
import Col from "../../../layout/Grid/Column"
import Row from "../../../layout/Grid/Row"
import Button from '../../atoms/Button'
import TextBox from "../../atoms/TextBox"
import Typo from "../../atoms/Typography"
import { MdAlarmOn } from "react-icons/md"

const VerifiedForm = ({ minutes, seconds, email, editProfileFunction, isInputAuthNum, inputAuthNumForm, isAuthNum, editAuthNum, editEmailForm }) => (
    <>
        {/* 이메일 입력 FORM */}
        <Row justify={"space-between"} >
            <Col span={2} justify={"center"} align={"center"} style={{
                backgroundColor: "#f5f5f5",
                height: "3rem",
            }}>
            </Col>
            <Col span={10} justify={'space-between'} >
                <Col span={9} justify={"start"} align={"center"} style={{
                    backgroundColor: "#ffffff",
                    height: "3rem",
                    paddingLeft: "1rem"
                }}>
                    <Row justify={"start"} align={"center"} >
                        <Col span={4}>
                            <TextBox color={"black"} border
                                radius={'22px'} align={'center'} placeholder={'이메일을 입력해 주세요'}
                                onChange={editProfileFunction.email} value={email} />
                        </Col>
                        <Col span={4} justify={"start"} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                            <Typo color={'#707070'} size={'0.8rem'}>이메일을 입력해 주세요</Typo>
                        </Col>
                    </Row>
                </Col>
                <Col span={3} justify={"center"} align={"center"} style={{
                    backgroundColor: "#ffffff",
                    height: "3rem"
                }}>
                    {
                        (isInputAuthNum) ?
                            <Button types={'primary'} block value={'재발송'} onClick={inputAuthNumForm.show}></Button>
                            :
                            <Button types={'primary'} block value={'인증번호발송'} onClick={inputAuthNumForm.show}></Button>

                    }
                </Col>
            </Col>
        </Row >

        {/* 인증번호 입력 FORM */}
        {
            (isInputAuthNum) ?
                <Row justify={"space-between"} >
                    <Col span={2} justify={"center"} align={"center"} style={{
                        backgroundColor: "#f5f5f5",
                        height: "3rem",
                    }}>
                    </Col>
                    <Col span={10} justify={'space-between'} >
                        <Col span={9} justify={"start"} align={"center"} style={{
                            backgroundColor: "#ffffff",
                            height: "3rem",
                            paddingLeft: "1rem"
                        }}>
                            <Row justify={"start"} align={"center"} >
                                <Col span={4}>
                                    <TextBox color={"black"} border
                                        radius={'22px'} align={'center'} placeholder={'인증번호를 입력해 주세요'}
                                        onChange={editAuthNum} value={isAuthNum} />
                                </Col>
                                <Col span={4} justify={"start"} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                                    <MdAlarmOn color={'#707070'} size={'0.8rem'} />
                                    <Typo color={'#707070'} size={'0.8rem'}>
                                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                                    </Typo>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={3} justify={"center"} align={"center"} style={{
                            backgroundColor: "#ffffff",
                            height: "3rem"
                        }}>
                            {
                                <Button types={'primary'} block value={'인증번호확인'} onClick={inputAuthNumForm.close}></Button>

                            }
                        </Col>
                    </Col>
                </Row >
                :
                null
        }
    </>
)

export default VerifiedForm