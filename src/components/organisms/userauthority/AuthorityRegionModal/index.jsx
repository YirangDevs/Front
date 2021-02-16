import React from "react"
import Button from "../../../atoms/Button"
import Col from "../../../../layout/Grid/Column"
import Row from "../../../../layout/Grid/Row"
import CheckBox from "../../../atoms/CheckBox"


const AuthorityRegionModal = ({
    regionArray,
    regionOptions,
    authorityRegionChange,
    regionOnCheck,
    modalClose
}) => {

    console.log(regionArray)
    return (
        <>
        <Row>
            <Col span={12}>
            <CheckBox defaultChecked={regionArray} onChange={regionOnCheck} options={regionOptions}/>
            </Col>
        </Row>
        <Row gutter={[20,5]}>
            <Col span={6}><Button value="확인" types="primary" onClick={authorityRegionChange} block></Button></Col>
            <Col span={6}><Button value="취소" types="primary" onClick={modalClose} block></Button></Col>
        </Row>
            
            
            
        </>
    )
}

export default AuthorityRegionModal