/** 
 * @author: chaeeun
 * @Date : 2020-12-20 23:40:41 
 * @Last Modified by: euncherry
 * @Last Modified time: 2020-12-21 01:04:09
 */


import React from 'react'
import Col from '../../../layout/Grid/Column/index'
import Row from '../../../layout/Grid/Row/index'
import Button from "../../../components/atoms/Button/index"
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Title = styled.div`
width: 100%;
font-family: NotoSansCJKKR;
font-size: 1.125rem;
font-weight: bold;
color: #707070;
text-align: left;
`
const CardKey = styled.div`
  background-color: #ccd4e0;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  box-sizing: content-box;
`
const CardValue = styled.div`

background-color: #f1f3f6;
color: #707070;
font-size: 1rem;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 1rem 0.5rem;
box-sizing: content-box;
cursor: pointer;
`

const MenuInfo = ({ userName, ModeKey, ModeValue, LoginKey, LoginValue, logoutEvent }) => {
    const why = () => {
        console.log("tlqkf");
    }
    return (

        <Row gutter={[10, 0]} align="center">
            <Col span={12}>
                <Title>어서오세요 {userName}님</Title>
            </Col>
            <Row >
                <Col span={4}>
                    <CardKey>{ModeKey}</CardKey>
                </Col>
                <Col span={8}>
                    <CardValue>{ModeValue}</CardValue>
                </Col>
            </Row>
            <Row >
                <Col span={4}>
                    <CardKey>{LoginKey}</CardKey>
                </Col>
                <Col span={8}>
                    <CardValue onClick={logoutEvent}>{LoginValue}</CardValue>
                </Col>
            </Row>
        </Row>
    )
}


export default MenuInfo