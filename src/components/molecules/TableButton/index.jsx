/**
 * @author: chaeeun
 * @date 2020-12-11 21:01:17
 * @Last Modified by: euncherry
 * @Last Modified time: 2020-12-21 16:03:46
 */

import React from 'react'
import TableBox from '../../atoms/TableBox/index'
import Button from "../../atoms/Button/index"
import Row from "../../../layout/Grid/Row"
import Col from "../../../layout/Grid/Column"




const TableButton = ({ headList, bodyList, primaryKey, noticeClick, noticeId }) => {
    const idShow = () => {
        console.log(noticeId)
    }
    const noticeHandle = () => {
        noticeClick(noticeId)

    }

    return (
        <>
            <Row gutter={[4, 0]} align="center">
                <Col span={10}>
                    <TableBox headList={headList} bodyList={bodyList} primaryKey={primaryKey} onClick={noticeHandle} />
                </Col>
                <Col span={2}>
                    <Row gutter={[0.5, 5]}>
                        <Col span={12}>
                            <Button block size="large" value="수정" onClick={idShow}></Button>
                        </Col>
                        <Col span={12}>
                            <Button block size="large" value="삭제" onClick={idShow}></Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default TableButton