/**
 * @author : chaeeun
 * @Date : 2020-12-21 16:50:25
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-02-03 03:51:10
 */

import React from "react"
import NoticeForm from "../../../molecules/NoticeForm"
import TextAreaBox from "../../../atoms/TextAreaBox"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Button from "../../../atoms/Button"
import Modal from "../../../atoms/Modal"
import UrgentForm from "../UrgentForm"
const ReadForm = ({ UrgentIcon, updateFunction, selectNotice, isUrgentVisible, UrgentModal, isUrgentIcon, urgentOnChange }) => {
    const readNotice = selectNotice || [{ id: null, title: "게시글이없습니다.", dov: null, region: null }];
    const { title, region, nor, dov, tov, dod, content } = readNotice; //id 임시로 지웠어

    return (
        <>
            <Row gutter={[0, 0]}>
                <Col span={12}>
                    <NoticeForm title={title} region={region} nor={nor} dov={dov} tov={tov} dod={dod} titleOnChange={updateFunction.title} timeOnChange={updateFunction.tov} deadlineOnChange={updateFunction.dod}></NoticeForm>
                </Col>
                <Col span={12} style={{
                    height: "45vh"
                }}>
                    <TextAreaBox placeholder="내용을 입력해주세요" value={content} contentOnChange={updateFunction.content} />
                </Col>
                <Row justify={"flex-end"} gutter={[20, 0]}>
                    <Col span={2}>
                        <Button value="긴급 게시물 만들기" block types={"primary"} onClick={UrgentModal.show} />
                    </Col>
                </Row>
            </Row>
            <Row>
                <Col span={12} xs={12}>
                    <Modal visible={isUrgentVisible}
                        closable={true} maskClosable={false} onClose={UrgentModal.close} size={15}>
                        <UrgentForm UrgentIcon={UrgentIcon} isUrgentIcon={isUrgentIcon} urgentOnChange={urgentOnChange}></UrgentForm>
                    </Modal>

                </Col>
            </Row>
        </>
    )
}

export default ReadForm