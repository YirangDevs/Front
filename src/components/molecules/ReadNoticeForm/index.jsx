import React from "react"
import Row from "../../../layout/Grid/Row";
import Col from "../../../layout/Grid/Column";

const columnStyle = {
    backgroundColor : "rgb(245,245,245)",
    padding : "0.8rem 1.5rem",
}

const ReadNoticeForm = ({title, nor, region, dov, tov, dod}) => {
    return (
        <>
            <Row align={"stretch"}>
                <Col span={12} justify={"center"} style={{
                    fontWeight : "bold",
                    borderTop : "solid 3px black",
                    borderBottom : "solid 2px black",
                    ...columnStyle
                }}>
                    {title}
                </Col>
                {/*-----1-----*/}
                <Col span={4} style={{

                    ...columnStyle,
                    borderBottom : "solid 1px black"
                }}>
                    <Row align={"stretch"}>
                        <Col span={4} style={{

                        }}>
                            필요인원
                        </Col>
                        <Col span={8} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            {nor}명
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
                            {region} 일대
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
                            봉사날짜
                        </Col>
                        <Col span={8} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            {dov}
                        </Col>
                    </Row>
                </Col>

                {/*-----4-----*/}
                <Col span={6} style={{
                    ...columnStyle,
                    borderBottom : "solid 1px black"
                }}>
                    <Row>
                        <Col span={4} style={{

                        }}>
                            신청마감
                        </Col>
                        <Col span={8} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            {dod}
                        </Col>
                    </Row>
                </Col>

                {/*-----5-----*/}
                <Col span={6} style={{
                    ...columnStyle,
                    borderLeft : "solid 1px black",
                    borderBottom : "solid 1px black"
                }}>
                    <Row>
                        <Col span={4} style={{

                        }}>
                            시작시간
                        </Col>
                        <Col span={8} style={{
                            color : "rgb(147,147,147)"
                        }}>
                            {tov}
                        </Col>
                    </Row>
                </Col>

            </Row>

        </>
    )
}

export default ReadNoticeForm