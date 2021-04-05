/**
 * @author :  chaeeun
 * @date : 2021-03-14 02:40:15
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-03 13:17:22
 */

import React from 'react'

import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Button from "../../../atoms/Button"
import TableBox from '../../../atoms/TableBox'
import DateSelector from '../../../atoms/DateSelector'
import RadioBox from '../../../atoms/RadioButton'
import CheckBox from '../../../atoms/CheckBox'


const AllPastApplicableModal = ({ filterApplicants }) => {


    return (
        <>
            <Row gutter={[7, 0]} justify={'center'} style={{
                maxHeight: '600px',
                overflow: 'auto',
            }}>


                <Col xs={12} sm={12} md={11.5} lg={11.5} xl={11.5} xxl={11.5} span={11.5} justify={'center'}>
                    <Row gutter={[4, 1]} align="flex-start" >
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} span={12} style={{
                            maxHeight: '300px',
                            overflow: 'auto',
                        }}>
                            <TableBox headList={["봉사 일시", "장소", "봉사분야", "신청 날짜"]} bodyList={filterApplicants} border={"top"} primaryKey={"result"}></TableBox>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </>
    )
}

export default AllPastApplicableModal