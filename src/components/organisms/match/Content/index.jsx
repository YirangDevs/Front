import React, {useEffect} from "react"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import TableBox from "../../../atoms/TableBox";
import Content from "../../../../layout/Content";
import SelectBox from "../../../atoms/SelectBox";
import MenuNav from "../../../../containers/redux/components/MenuNav";
import UserCard from "../../../../containers/redux/components/UserCard";
import Pagination from "../../../atoms/Pagination";

const MatchContent = () => {

    //const [activityList, setActivityList] = useState([])
    //const [currentPage, setCurrentPage] = useState(1)

    const noticeTableHead = ["지역", "날짜", "인원", "일시"]
    const noticeTableBody = [
        {title : "동구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "서구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "달서구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "수성구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "동구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "남구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "달성군", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "중구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "북구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "수성구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "중구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "서구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "남구", date : "2021-04-21", nor : 20, tod : "10:40"},
        {title : "달서구", date : "2021-04-21", nor : 20, tod : "10:40"},



    ]
    const matchingResultTableHead = ["피봉사자", "봉사자"]
    const matchingResultTableBody = [
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원, 이채은"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},
        {a : "유정민", b : "최용원"},

    ]

    const notMatchedVolunteerHead = ["제외된 봉사자"]
    const notMatchedSeniorHead = ["제외된 피봉사자"]
    const notMatchedVolunteerBody = [
        {name : "최용원"},
        {name : "최용원"},
        {name : "최용원"},
        {name : "최용원"},
    ]
    const notMatchedSeniorBody = [
        {name : "유정민"},
        {name : "유정민"},
        {name : "유정민"},
        {name : "유정민"},
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
                        <Row justify={"center"}>
                            <Col span={12} style={{
                                height : "65vh"
                            }}>
                                <TableBox headList={noticeTableHead} bodyList={noticeTableBody} border={"top"}></TableBox>
                            </Col>
                            <Col span={12} justify={"center"}>
                                <Pagination num={Math.floor(noticeTableBody.length/6)} onClick={()=>{}}></Pagination>
                            </Col>
                        </Row>
                    </Col>



                    <Col xxl={3}>
                        <Row justify={"space-between"}>
                            <Col span={12}>
                                <TableBox headList={matchingResultTableHead} bodyList={matchingResultTableBody} border={"top"}></TableBox>
                            </Col>
                            <Col span={5.5} style={{
                                marginTop : "2.4rem"
                            }}>
                                <TableBox headList={notMatchedSeniorHead} bodyList={notMatchedSeniorBody} border={"top"}></TableBox>
                            </Col>
                            <Col span={5.5} style={{
                                marginTop : "2.4rem"
                            }}>
                                <TableBox headList={notMatchedVolunteerHead} bodyList={notMatchedVolunteerBody} border={"top"}></TableBox>
                            </Col>
                        </Row>

                    </Col>
                    <Col xxl={3}>
                        <Row gutter={[20,0]}>
                            <Col xxl={12}>
                                <MenuNav></MenuNav>
                            </Col>
                            <Col xxl={12}>
                                <UserCard></UserCard>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Content>


        </>
    )
}

export default MatchContent