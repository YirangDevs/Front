/**
 * @author :  chaeeun
 * @date : 2021-03-14 02:40:15
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-03 13:32:51
 */

import React from 'react'

import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Button from "../../../atoms/Button"
import TableBox from '../../../atoms/TableBox'
import DateSelector from '../../../atoms/DateSelector'
import RadioBox from '../../../atoms/RadioButton'
import CheckBox from '../../../atoms/CheckBox'


const FilterPastApplicants = ({ filterApplicants, filterType,
    FilterTypeOnchange, filterDate, filterFirstDateOnchange, filterSecondDateOnchange, viewPassFilterOnclick }) => {


    return (
        <>
            <Row gutter={[7, 0]} justify={'center'} style={{
                maxHeight: '600px',
                overflow: 'auto',
            }}>

                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={11.5} span={11.5} justify={'center'}>
                    <Row gutter={[2, 2]} justify={'space-between'} align={'stretch'}>
                        <Col xs={12} sm={10} md={10} lg={10} xl={10.3} xxl={10.3} span={10.3}>
                            <Row align={'center'} style={{
                                minHeight: "43px",
                                backgroundColor: "#f5f5f5",
                                borderTop: " 2px solid #000000",
                                borderBottom: "1.8px solid #ccd4e0",
                            }}>
                                <Col xs={12} sm={12} md={8} lg={8} xl={6} xxl={6} span={6} align={'center'} style={{ height: "inherit" }}>
                                    <Row gutter={[10, 0]} justify={"space-around"} >
                                        <Col span={4}>
                                            <DateSelector max={`${filterDate.secondDate}` || null} defaultValue={filterDate.firstDate}
                                                onChange={filterFirstDateOnchange} radius={'true'} block size={"small"} border />
                                        </Col>
                                        <Col span={4}>
                                            <DateSelector min={`${filterDate.firstDate}` || null} defaultValue={filterDate.secondDate}
                                                onChange={filterSecondDateOnchange} radius={'true'} block size={"small"} border />

                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={4} lg={4} xl={6} xxl={6} span={6}>
                                    <CheckBox justify={'space-around'} defaultChecked={filterType} onChange={FilterTypeOnchange} options={['노력봉사', '말벗봉사']} />
                                    <CheckBox justify={'space-around'} defaultChecked={filterType} onChange={FilterTypeOnchange} options={['노력봉사', '말벗봉사']} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={2} md={2} lg={2} xl={1.7} xxl={1.7} span={1.7} >
                            <Button block value="조회하기" size={"default"} types={"primary"} onClick={viewPassFilterOnclick}></Button>

                        </Col>
                    </Row>
                </Col>

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

export default FilterPastApplicants