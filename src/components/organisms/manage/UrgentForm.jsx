/**
 * @author : chaeeun
 * @date : 2021-02-01 18:30:38
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-03 16:12:32
 */

import React from 'react'
import TestBox from "../../atoms/TextBox"
import Row from "../../../layout/Grid/Row"
import Col from "../../../layout/Grid/Column"



const Urgentform = ({ urgentOnChange, isUrgentIcon, UrgentIcon }) => {



    return (
        <>
            <Row gutter={[10, 10]} justify={'center'}>
                <Col span={3} justify={"center"}>
                    {/* <CheckBox size="small" defaultChecked={UrgentIcon.setIcon}
                        options={["🚨"]} /> */}
                </Col>
                <Col span={9} justify={"center"}>
                    <TestBox size={"default"} border placeholder={"새로운 제목을 입력해 주세요."} value={urgentOnChange}></TestBox>
                </Col>
                <Col span={5}>

                </Col>
            </Row>
        </>
    )

}

export default Urgentform;