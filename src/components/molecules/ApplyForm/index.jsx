import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import Row from "../../../layout/Grid/Row";
import Col from "../../../layout/Grid/Column";
import Button from "../../atoms/Button";
import RadioBox from "../../atoms/RadioButton";
import postApply from "../../../service/api/post/post_apply";
import NotificationPool from "../../../containers/redux/components/NotificationPool/";


const columnStyle = {
    backgroundColor : "rgb(245,245,245)",
    padding : "0.8rem 1.5rem",
}


const ApplyForm = ({id, dov, region, nor, phone, name, email, sex, emailValidation, logined}) => {
    const history = useHistory()
    const [status, setStatus] = useState({
        id : id,
        dov : dov,
        region : region,
        nor : nor,
        phone : phone,
        name : name,
        email : email,
        sex : sex === "MALE" ? "남성" : "여성",
        type : "노력",
        emailValidation : emailValidation,
    })

    useEffect(()=>{
        setStatus(state=>({
            id : id,
            dov : dov,
            region : region,
            nor : nor,
            phone : phone,
            name : name,
            email : email,
            sex : sex === "MALE" ? "남성" : "여성",
            type : "노력",
            emailValidation : emailValidation
        }))
    }, [id, dov, region, nor, phone, name, email, sex, emailValidation])

    useEffect(()=>{
        console.log(status)
    }, [status])
    const onApplyClick = () => {
        if(status.emailValidation==="NO"){
            NotificationPool.api.add({
                title : "이메일 인증이 필요합니다.",
                content : "마이페이지 > 이메일 인증 에서 인증해주십쇼",
                status : "error",
                button : "이동",
                buttonOnClick : ()=>{
                    history.push("profile")
                }
            })
            return
        }

        const data = {
            noticeId : status.id,
            serviceType : status.type==="노력" ? "WORK" : "TALK"
        }
        postApply(data).then(()=>{
            NotificationPool.api.add({
                title : "신청완료",
                content : region+"으로의 봉사신청이 완료되었습니다. 자세한 내용은 메일로 발송됩니다.",
                status : "success",
            })
        }).catch(err=>console.log(err))
    }

    const onTypeChange = (e) => {
        const value = e.target.value
        setStatus(state=>{
            return {
                ...state,
                type : value
            }

        })
    }

    return (
        <>
            <Row align={"stretch"}>
                <Col span={12} justify={"center"} style={{
                    fontWeight : "bold",
                    borderTop : "solid 3px black",
                    borderBottom : "solid 2px black",
                    ...columnStyle
                }}>
                    봉사 신청서
                </Col>
                {/*-----1-----*/}
                <Col span={4} style={{

                    ...columnStyle,
                    borderBottom : "solid 1px black"
                }}>
                    <Row>
                        <Col span={4} style={{

                        }}>
                            봉사일시
                        </Col>
                        <Col span={8} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            {status.dov}
                        </Col>
                    </Row>
                </Col>

                {/*-----2-----*/}
                <Col span={4} style={{
                    ...columnStyle,
                    borderLeft : "solid 1px black",
                    borderRight : "solid 1px black",
                    borderBottom : "solid 1px black"

                }}>
                    <Row>
                        <Col span={4} style={{

                        }}>
                            장소
                        </Col>
                        <Col span={8} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            {status.region} 일대( 상세주소 개별통지 )
                        </Col>
                    </Row>
                </Col>

                {/*-----3-----*/}
                <Col span={4} style={{
                    ...columnStyle,
                    borderBottom : "solid 1px black"
                }}>
                    <Row>
                        <Col span={4} style={{

                        }}>
                            전화번호
                        </Col>
                        <Col span={8} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            {status.phone===null ? "없음" : status.phone}
                        </Col>
                    </Row>
                </Col>

                {/*-----4-----*/}
                <Col span={4} style={{
                    ...columnStyle,
                    borderBottom : "solid 1px black"
                }}>
                    <Row>
                        <Col span={4} style={{

                        }}>
                            필요인원
                        </Col>
                        <Col span={8} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            총 {status.nor}명
                        </Col>
                    </Row>
                </Col>

                {/*-----5-----*/}
                <Col span={4} style={{
                    ...columnStyle,
                    borderLeft : "solid 1px black",
                    borderRight : "solid 1px black",
                    borderBottom : "solid 1px black"
                }}>
                    <Row>
                        <Col span={4} style={{

                        }}>
                            성명
                        </Col>
                        <Col span={8} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            {status.name}
                        </Col>
                    </Row>
                </Col>

                {/*-----6-----*/}
                <Col span={4} style={{
                    ...columnStyle,
                    borderBottom : "solid 1px black"
                }}>
                    <Row>
                        <Col span={4} style={{

                        }}>
                            E-mail
                        </Col>
                        <Col span={8} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            {email}
                        </Col>
                    </Row>
                </Col>

                {/*-----7-----*/}
                <Col span={6} style={{
                    ...columnStyle,
                    borderBottom : "solid 1px black"

                }}>
                    <Row>
                        <Col span={2} style={{

                        }}>
                            성별
                        </Col>
                        <Col span={10} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            <RadioBox name={"sex"} options={["남성", "여성"]} disabled={["남성", "여성"]} checkedValue={status.sex}></RadioBox>
                        </Col>
                    </Row>
                </Col>

                {/*-----8-----*/}
                <Col span={6} style={{
                    ...columnStyle,
                    borderLeft : "solid 1px black",
                    borderBottom : "solid 1px black"
                }}>
                    <Row>
                        <Col span={2} style={{

                        }}>
                            봉사분야
                        </Col>
                        <Col span={10} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            <RadioBox name={"work"} options={["노력", "말벗"]} checkedValue={"노력"} onClick={onTypeChange}></RadioBox>
                        </Col>
                    </Row>
                </Col>

                <Col span={12} style={{
                    ...columnStyle,
                    fontSize : "0.9rem",
                    color : "rgb(147,147,147)"

                }}>
                    <Row gutter={[8,8]}>
                        <Col span={12}>
                            봉사활동 신청시 주의사항
                        </Col>
                        <Col span={12}>
                            봉사활동을 신청할 때 봉사분야를 반드시 체크해주셔야 합니다.
                        </Col>
                        <Col span={12}>
                            봉사활동의 구체적인 장소는 봉사활동 자동매칭 후 E-mail로 일괄전송됩니다.
                        </Col>
                        <Col span={12}>
                            봉사활동을 취소할 경우, 최소 봉사 시작 2일 전에 취소해주셔야 하며 그러지 않을 경우 다음 봉사활동 신청에 불이익이 발생합니다.
                        </Col>
                        <Col span={12}>
                            봉사취소는 "마이페이지-봉사활동 취소"를 활용해 취소해주십시오.
                        </Col>
                        <Col span={12}>
                            봉사활동 및 신청에 대해 문의가 있으시다면 해당 구역장에게 연락하시면 친절히 안내해 드리겠습니다.
                        </Col>
                    </Row>
                </Col>
                <Col span={12} justify={"flex-end"} style={{
                    marginTop : "0.5rem"
                }}>
                    <Button types={"primary"} value={"신청완료"} size={"large"} onClick={onApplyClick}></Button>
                </Col>

            </Row>

        </>
    )
}

export default ApplyForm