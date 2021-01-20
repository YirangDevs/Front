/**
 * @author: chaeeun
 * @date 2020-12-11 21:01:17
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-01-19 01:40:21
 */

import React, { useState } from 'react'
import TableBox from '../../atoms/TableBox/index'
import Button from "../../atoms/Button/index"
import Row from "../../../layout/Grid/Row"
import Col from "../../../layout/Grid/Column"
import Modal from "../../atoms/Modal/index"
import ReadPage from "../../organisms/manage/ReadNotice"
import GetNotice from "../../../service/api/get/get_notice"
import getNotice from '../../../service/api/get/get_notice'
import EditForm from '../../organisms/manage/EditForm'

const TableButton = ({ headList, bodyList, primaryKey, noticeClick, noticeId, updateCLick, deleteClick }) => {

    const [isReadVisible, setIsReadVisible] = useState(false)
    const [isEditVisible, setIsEditVisible] = useState(false)

    const read = {
        show() {
            setIsReadVisible(true)
        },
        close() {
            setIsReadVisible(false)
        }
    }
    const edit = {
        show() {
            setIsEditVisible(true)
        },
        close() {
            setIsEditVisible(false)
        }
    }

    const idShow = () => {
        updateCLick(noticeId)
        console.log(noticeId)
    }

    const whyNot = () => { //수정할 notice 받아오기
        console.log(noticeId)
        getNotice(noticeId)
            .then((res) => {
                console.log(res)
                // setUpdateNotice(res.notice)
            })
            .catch(error => console.log(error))
    }

    return (
        <>

            <Row gutter={[4, 0]} align="center">
                <Col span={10}>
                    <TableBox headList={headList} bodyList={bodyList} primaryKey={primaryKey} onClick={read.show} />
                </Col>
                <Col span={2}>
                    <Row gutter={[0.5, 5]}>
                        <Col span={12}>
                            <Button block size="large" value="수정" onClick={edit.show} ></Button>
                        </Col>
                        <Col span={12}>
                            <Button block size="large" value="삭제" onClick={idShow}></Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={12} xs={12}>
                    <Modal visible={isReadVisible}
                        closable={true} maskClosable={true} onClose={read.close} size={10}>
                        <div > 모오오 닫ㄹ아아알</div>
                        <div > 모오오 닫ㄹ아아알</div>
                        <div > 모오오 닫ㄹ아아알</div>
                    </Modal>
                </Col>
            </Row>
            <Row>
                <Col span={12} xs={12}>
                    <Modal visible={isEditVisible}
                        closable={true} maskClosable={false} onClose={edit.close} size={10}>
                        <EditForm></EditForm>
                    </Modal>

                </Col>
            </Row>


        </>
    )

}

export default TableButton