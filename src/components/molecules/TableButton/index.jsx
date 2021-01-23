/**
 * @author: chaeeun
 * @date 2020-12-11 21:01:17
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-01-23 19:47:49
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


/**
 * @params headList - notice headList
 * @params bodyList - notice bodyList
 * @params primaryKey - onClick할 notice 요소
 * @params noticeCLick - notice 클리시 열리는 받아오는 데이터 
 * @params noticeId - 클릭한 특정 notice의 ID
 * @params updateClick - 수정완료 Click handle
 * @params deleteClick - 삭제 Click handle
 * @params updateNotice - 수정되면서 업데이트되는 내용
 * @params updateFunction - 수정할떄 사용할 함수들 
 */


const TableButton = ({ headList, bodyList, primaryKey, noticeClick,
    noticeId, updateCLick, deleteClick, updateNotice, updateFunction }) => {

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
                            <Button block size="large" value="수정"
                                onClick={edit.show} types={"primary"}></Button>
                        </Col>
                        <Col span={12}>
                            <Button block size="large" value="삭제"
                                onClick={idShow} types={"primary"}></Button>
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
                        <EditForm ></EditForm>
                    </Modal>

                </Col>
            </Row>


        </>
    )

}

export default TableButton