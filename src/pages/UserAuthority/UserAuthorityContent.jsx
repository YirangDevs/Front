import React from "react"
import Content from "../../layout/Content"
import Row from "../../layout/Grid/Row/index"
import Col from "../../layout/Grid/Column/index"
import SelectBox from "../../components/atoms/SelectBox"
import TextBox from "../../components/atoms/TextBox"
import Button from "../../components/atoms/Button"
import TableBox from "../../components/atoms/TableBox"
import AdminButtonGroup from "../../components/molecules/AdminButtonGroup"


const selectAuthority = ["전체", "관리자", "일반회원"]
const userTable = ["회원등급", "이름", "성별", "연락처", "이메일"]
const authorityTable = ["관리모드"]
const regionTable = ["지역"]

const userSample = [{authority: "관리자", name: "홍길동", sex: "여", phone: "010-1234-5678", email: "0000@naver.com"},
                    {authority: "일반회원", name: "홍길동", sex: "남", phone: "010-1234-5678", email: "1234@naver.com"}
                    ]
const authoritySample = [{authority: "관리모드"},{authority: "관리모드"}]
const regionSample = [{region: "수성구,서구"}, {region: "동구"}]

const UserAuthorityContent = ({
    regionOnClick
}) => {

    return(
        <>
            <Content>
                <Row gutter={[10,10]}>
                    <Col span={2}>
                            <SelectBox options={selectAuthority} block></SelectBox>
                    </Col>
                    <Col span={3}>
                            <TextBox placeholder="이름을 검색하십시오"></TextBox>
                            <Button value="검색" theme="white" round/>
                    </Col>
                </Row>
                <Row>
                    <Col span={5.8}>
                        <TableBox headList={userTable} bodyList={userSample}/>
                    </Col>
                    <Col span={0.2} /> {/* 빈칸 */}
                    <Col span={1}>
                        <TableBox headList={authorityTable} bodyList={authoritySample} black back/>
                    </Col>
                    <Col span={1}>
                        <TableBox headList={regionTable} bodyList={regionSample} dataOnClick={regionOnClick} black back/>  
                    </Col>
                    <Col span={0.5} /> {/* 빈칸 */}
                    <Col span={3.5}>
                        <AdminButtonGroup />
                    </Col>
                </Row>
            </Content>
        </>
    )
}

export default UserAuthorityContent