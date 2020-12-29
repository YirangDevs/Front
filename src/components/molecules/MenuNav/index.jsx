/**
 * @author: chaeeun 
 * @date : 2020-12-14 01:05:08 
 * @Last Modified by: euncherry
 * @Last Modified time: 2020-12-21 14:52:41
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

const MenuNav = ({ title, firstMenu, secondMenu, thirdMenu,
    firstLink, secondLink, thirdLink }) => {

    return (

        <Row gutter={[10, 0]} align="center">
            <Col span={12}>
                <Title>{title}</Title>
            </Col>
            <Row gutter={[4, 0]}>
                <Col span={12}>
                    <Link to={firstLink}>
                        <Button block value={firstMenu} ></Button>
                    </Link>
                    <Link to={secondLink}>
                        <Button block value={secondMenu}></Button>
                    </Link>
                    <Link to={thirdLink}>
                        <Button block value={thirdMenu}></Button>
                    </Link>
                </Col>
            </Row>
        </Row>

    )


}


export default MenuNav