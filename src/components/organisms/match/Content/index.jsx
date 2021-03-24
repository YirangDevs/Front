import React, {useEffect} from "react"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import TableBox from "../../../atoms/TableBox";
import Content from "../../../../layout/Content";
import SelectBox from "../../../atoms/SelectBox";
import MenuNav from "../../../../containers/redux/components/MenuNav";
import UserInfo from "../../../../containers/redux/components/UserInfo";

const MatchContent = () => {

    const noticeTableHead = ["제목", "날짜", "인원", "일시"]
    const noticeTableBody = [
        {title : "시발", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "시발", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "시발", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "시발", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "시발", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "시발", date : "2021-04-21", nor : 20, tod : "10:40"},

    ]
    const matchingResultTableHead = ["피봉사자", "봉사자"]
    const matchingResultTableBody = [
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},

    ]
    const regionOption = ["수성구", "중구", "서구", "남구", "북구", "동구", "달서구", "달성군"]

    useEffect(()=>{

    }, [])
    
    return (
        <>
            <Content style={{
                marginTop : "2rem"
            }}>
                <Row justify={"center"} gutter={[10,20]}>
                    <Col span={11}>
                        <SelectBox options={regionOption} border></SelectBox>
                    </Col>
                    <Col xxl={5}>
                        <TableBox headList={noticeTableHead} bodyList={noticeTableBody} border={"top"}></TableBox>
                    </Col>
                    <Col xxl={3}>
                        <TableBox headList={matchingResultTableHead} bodyList={matchingResultTableBody} border={"top"}></TableBox>
                    </Col>
                    <Col xxl={3}>
                        <Row gutter={[20,0]}>
                            <Col xxl={12}>
                                <MenuNav></MenuNav>
                            </Col>
                            <Col xxl={12}>
                                <UserInfo></UserInfo>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Content>


        </>
    )
}

export default MatchContent