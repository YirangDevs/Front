/**
 * @author : chaeeun
 * @Date : 2020-12-21 16:50:25
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-14 21:55:04
 */

import React from "react"

import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Button from "../../../atoms/Button"
import Modal from "../../../atoms/Modal"
import UrgentForm from "../UrgentForm/UrgentForm"
import ReadNoticeForm from "../../../molecules/ReadNoticeForm"
const ReadForm = ({ okUrgentOnclick, getOriginalTitleOnchange, urgentTitle, updateUrgentTitle, urgentIconOnchange, selectNotice, isUrgentVisible, UrgentModal, isUrgentIcon, isOriginal }) => {
    const readNotice = selectNotice || [{ id: null, title: "게시글이없습니다.", dov: null, region: null }];
    const { title, region, nor, dov, tov, dod, content } = readNotice; //id 임시로 지웠어
    return (
        <>
            <Row gutter={[0, 0]}>
                <Col span={12}>
                    <ReadNoticeForm title={title} region={region} nor={nor}
                        dov={dov} tov={tov} dod={dod}>
                    </ReadNoticeForm>
                </Col>
                <Col span={12} style={{
                    padding: "1rem",
                    minHeight: "15rem",
                    backgroundColor: "#EFEFEF4D"
                }}>
                    {content}
                </Col>



                <Row justify={"flex-end"} gutter={[20, 0]}>
                    <Col span={2}>
                        <Button value="긴급 게시물 만들기" block types={"primary"} onClick={UrgentModal.show} />
                    </Col>
                </Row>
            </Row>
            <Row>
                <Col span={12} xs={12}>
                    <Modal title={"긴급 게시물 제목 설정하기"} visible={isUrgentVisible}
                        closable={true} maskClosable={true} onClose={UrgentModal.close} size={7}>
                        <UrgentForm okUrgentOnclick={okUrgentOnclick} urgentTitle={urgentTitle} isOriginal={isOriginal}
                            getOriginalTitleOnchange={getOriginalTitleOnchange} updateUrgentTitle={updateUrgentTitle} urgentIconOnchange={urgentIconOnchange} isUrgentIcon={isUrgentIcon}></UrgentForm>
                    </Modal>

                </Col>
            </Row>
        </>
    )
}

export default ReadForm