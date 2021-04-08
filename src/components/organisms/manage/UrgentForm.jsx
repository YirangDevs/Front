/**
 * @author : chaeeun
 * @date : 2021-02-01 18:30:38
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-08 19:03:01
 */

import React from 'react'
import TextBox from "../../atoms/TextBox"
import Row from "../../../layout/Grid/Row"
import Col from "../../../layout/Grid/Column"
import Button from '../../atoms/Button'
import CheckBox from '../../atoms/CheckBox'
import Divider from '../../atoms/Diviver'
import Typo from '../../atoms/Typography'



const Urgentform = ({ okUrgentOnclick, isOriginal, urgentTitle, getOriginalTitleOnchange, updateUrgentTitle, isUrgentIcon, urgentIconOnchange }) => {

    console.log(isUrgentIcon)

    return (
        <>
            <Row gutter={[0, 0]} justify={'center'} align={"center"} style={{
                height: "12rem"
            }}>
                <Col span={9}>
                    <Row justify={'center'} align={"baseline"}>
                        <Col span={1} justify={"center"}>
                            <CheckBox defaultChecked={isUrgentIcon} onChange={urgentIconOnchange}
                                options={["🚨"]} />
                        </Col>
                        <Col span={7} justify={"start"}>
                            <Row justify={"center"}>
                                <Col span={12} justify={"center"}>
                                    <TextBox size={"default"} block placeholder={"새로운 제목을 입력해 주세요."} value={urgentTitle} onChange={updateUrgentTitle}></TextBox>
                                </Col>
                                <Col span={12} justify={"center"}>
                                    <Divider color={"black"} width={"calc(100% - 32px)"} marginBottom={"5px"} marginTop={"0"}></Divider>
                                </Col>
                                <Col span={12} style={{ paddingLeft: "12px" }}>
                                    <CheckBox size={'small'} defaultChecked={isOriginal} onChange={getOriginalTitleOnchange}
                                        options={["원래제목가져오기"]} />
                                </Col>
                            </Row>


                        </Col>
                        <Col span={3}>
                            <Button types={"primary"} block value={"확인"} onClick={okUrgentOnclick}></Button>
                        </Col>
                    </Row>

                    <Row gutter={[10, 0]} style={{ marginTop: "1rem" }}>
                        <Col span={12} justify={'center'} align={"center"}>
                            <Typo color={"#868789"}>
                                현재 게시물에 대한 새로운 게시물을 올릴 수 있습니다.
                    </Typo>
                        </Col>
                        <Col span={12} justify={'center'} align={"center"}>
                            <Typo color={"#868789"}>
                                새롭게 제목을 수정하거나 , 긴급아이콘을 붙일 수 있습니다.
                    </Typo>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </>
    )

}

export default Urgentform;