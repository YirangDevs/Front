/** 
 * @author: chaeeun 
 * @date : 2021-03-27 09:21:58 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-03-27 09:34:01
 */

import { React } from "react";
import Col from "../../../layout/Grid/Column"
import Row from "../../../layout/Grid/Row"
import Button from '../../atoms/Button'
import TextBox from "../../atoms/TextBox"
import Typo from "../../atoms/Typography"


const ProfileEditForm = ({ title }) => {



    return (
        <>
            {/* 프로필사진 -A*/}
            <Row justify={"space-between"} style={{ height: "110px", marginTop: '15px', borderTop: '3px solid #000000', }}>

                {/* TITLE  - A*/}
                <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                    <Typo weight={'bold'}>프로필 사진</Typo>
                </Col>
                {/* TITLE -Z*/}

                {/* Content + btn - A*/}
                <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                    <Row align={'initial'} justify={"space-between"} >

                        {/* Content -A*/}
                        <Col offset={0.25} span={8} justify={"start"} align={"center"} style={{
                            alignContent: "center"
                        }}>
                            {
                                (imgUrl) ?
                                    <Img src={imgUrl} width={'100px'} circle></Img>
                                    :
                                    <Img src={DefaultImg} width={'100px'} circle></Img>
                            }
                        </Col>
                        {/* Content - B */}

                        {/* Button - A */}
                        <Col span={3}>
                            <Row gutter={[0, 0]} justify={'center'} align={'center'} style={{ alignContent: "space-evenly" }}  >
                                <Col span={12}>
                                    <FileBox block id={"customImg"} accept="image/*" onChange={uploadImgOnclick} >이미지업로드</FileBox>
                                </Col>
                                <Col span={12} >
                                    <Button block value={'사진 저장'} onClick={postImgOnclick}></Button>
                                </Col>
                                <Col span={12} >
                                    <Button block value={'카카오 사진으로'} onClick={kakaoImgOnclick}></Button>
                                </Col>
                            </Row>
                        </Col>
                        {/* Button - Z*/}

                    </Row>
                </Col>
                {/* Content + btn - Z*/}
            </Row>
            {/* 프로필사진 -Z*/}

        </>
    )



}

export default ProfileEditForm;