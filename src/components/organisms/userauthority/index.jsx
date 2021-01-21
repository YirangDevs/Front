import React from "react"
import Content from "../../../layout/Content"
import Row from "../../../layout/Grid/Row/index"
import Col from "../../../layout/Grid/Column/index"
import SelectBox from "../../atoms/SelectBox"
import TextBox from "../../atoms/TextBox"
import Button from "../../atoms/Button"
import TableBox from "../../atoms/TableBox"
import MenuNav from "../../../containers/redux/components/MenuNav"


const selectAuthority = ["전체", "관리자", "일반회원"]
const userTable = ["회원등급", "이름", "성별", "연락처", "이메일"]
const authorityTable = ["관리모드"]
const regionTable = ["지역"]

const userSample = [{authority: "관리자", name: "홍길동", sex: "여", phone: "010-1234-5678", email: "0000@naver.com"},
                    {authority: "관리자", name: "홍길동", sex: "여", phone: "010-1234-5678", email: "0000@naver.com"},
                    {authority: "관리자", name: "홍길동", sex: "여", phone: "010-1234-5678", email: "0000@naver.com"},
                    {authority: "관리자", name: "홍길동", sex: "여", phone: "010-1234-5678", email: "0000@naver.com"},
                    {authority: "봉사자", name: "홍길동", sex: "남", phone: "010-1234-5678", email: "1234@naver.com"},
                    {authority: "봉사자", name: "홍길동", sex: "남", phone: "010-1234-5678", email: "1234@naver.com"},
                    {authority: "봉사자", name: "홍길동", sex: "남", phone: "010-1234-5678", email: "1234@naver.com"},
                    {authority: "봉사자", name: "홍길동", sex: "남", phone: "010-1234-5678", email: "1234@naver.com"},
                    {authority: "봉사자", name: "홍길동", sex: "남", phone: "010-1234-5678", email: "1234@naver.com"},
                    {authority: "봉사자", name: "홍길동", sex: "남", phone: "010-1234-5678", email: "1234@naver.com"}
                    ]
const authoritySample = [{authority: "봉사자 변환"},{authority: "봉사자 변환"},{authority: "봉사자 변환"},{authority: "봉사자 변환"},{authority: "관리자 변환"},{authority: "관리자 변환"},{authority: "관리자 변환"},{authority: "관리자 변환"},{authority: "관리자 변환"},{authority: "관리자 변환"}]
const regionSample = [{region: "수성구,서구"}, {region: "수성구,동구"}, {region: "수성구,북구"}, {region: "달서구,서구"}, {region: "-"},{region: "-"},{region: "-"},{region: "-"},{region: "-"},{region: "-"}]

const UserAuthorityContent = ({
    regionOnClick
}) => {

    return(
        <>
            <Content>
                <Row gutter={[10,10]}>
                    <Col span={2}>
                            <SelectBox options={selectAuthority} border block></SelectBox>
                    </Col>
                    <Col span={1.8}>
                            <TextBox placeholder="이름을 검색하십시오" border></TextBox>
                    </Col>
                    <Col span={1}>
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
                        <MenuNav />
                    </Col>
                </Row>
            </Content>
        </>
    )
}

export default UserAuthorityContent