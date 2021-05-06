import React, {memo, useEffect, useMemo} from "react"
import Row from "../../../../layout/Grid/Row";
import Col from "../../../../layout/Grid/Column";
import TableBox from "../../../atoms/TableBox";
import Content from "../../../../layout/Content";
import SelectBox from "../../../atoms/SelectBox";
import UserCard from "../../../../containers/redux/components/UserCard";
import Pagination from "../../../atoms/Pagination";
import PageMenuNav from "../../../../containers/redux/components/PageNav";
import Button from "../../../atoms/Button";
import Modal from "../../../atoms/Modal";
import VolunteerModalContent from "../VolunteerModalContent";

const MatchContent = ({
    activityTableBody,
    activityOnClick,
    activityNum,
    activityPageData,
    currentRegion,
    matchedData,
    unmatchedSenior,
    unmatchedVolunteer,
    volunteerModal,
    currentActivityId,

    activityPaginationOnClick,
    regionOnChange,
    toggleModal
  }) => {

    //const [activityList, setActivityList] = useState([])
    //const [currentPage, setCurrentPage] = useState(1)

    const activityTableHead = useMemo(()=>["지역", "날짜", "인원", "일시"],[]);
    // const noticeTableBody = [
    //     {title : "동구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "서구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "달서구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "수성구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "동구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "남구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "달성군", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "중구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "북구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "수성구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "중구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "서구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "남구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //     {title : "달서구", date : "2021-04-21", nor : 20, tod : "10:40"},
    //
    //
    //
    // ]
    const matchingResultTableHead = useMemo(()=>["피봉사자", "봉사자"],[])
    const notMatchedVolunteerHead = useMemo(()=>["제외된 봉사자"],[]);
    const notMatchedSeniorHead = useMemo(()=>["제외된 피봉사자"],[])


    const matchingResultTableBody = useMemo(()=>
        (Object.keys(matchedData).map((i)=>{
            return {
                senior : matchedData[i][0].seniorName,
                volunteers : matchedData[i].map((i)=>{
                    return i.volunteerName
                }).join()
            }
        })
        )
    ,[matchedData]);

    const matchedInfoToolTip = useMemo(()=>({
        data : {
            senior : Object.keys(matchedData).map((value)=>{
                return "성명 : "+matchedData[value][0].seniorName+"\n성별 : "+matchedData[value][0].seniorSex+"\n봉사유형 : "+matchedData[value][0].serviceType
            }),
            volunteers : Object.keys(matchedData).map((value)=>{
                return "성명 : "+matchedData[value].map((i)=>i.volunteerName).join()+"\n성별 : "+matchedData[value].map((i)=>i.volunteerSex)
            })
        },
        position : "bottom"
    }),[matchedData])

    const unMatchedVolunteerInfoToolTip = useMemo(()=>({
        data : {
            unMatchedVolunteer : unmatchedVolunteer.map((value)=>{
                return "성명 : "+value.name+"\n성별 : "+value.sex+"\n전화번호 : "+value.phone
            }),
        },
        position : "bottom"
    }),[unmatchedVolunteer])

    const unMatchedSeniorInfoToolTip = useMemo(()=>({
        data : {
            unMatchedSenior : unmatchedSenior.map((value)=>{
                return "성명 : "+value.name+"\n성별 : "+value.sex+"\n전화번호 : "+value.phone
            }),
        },
        position : "bottom"
    }),[unmatchedSenior])


    const notMatchedVolunteerBody = useMemo(()=>
        unmatchedVolunteer.map(i=>({unMatchedVolunteer : i.name}))
    ,[unmatchedVolunteer])

    const notMatchedSeniorBody = useMemo(()=>
        unmatchedSenior.map(i=>({unMatchedSenior : i.name}))
    ,[unmatchedSenior])

    const regionOption = useMemo(()=>["전체","수성구", "중구", "서구", "남구", "북구", "동구", "달서구", "달성군"],[])

    useEffect(()=>{
    }, [notMatchedSeniorBody])
    
    return (
        <>
            <Content style={{
                marginTop : "2rem"
            }}>
                <Row gutter={[10,0]} >
                    <Col span={5} justify={"space-between"}>
                        <SelectBox options={regionOption} value={currentRegion} onChange={regionOnChange} border></SelectBox>
                        <Button types={"primary"} value={"신청자 확인하기"} onClick={toggleModal}></Button>
                    </Col>
                    <Row justify={"space-between"}>

                        <Col span={5}>
                            <Row justify={"center"}>
                                <Col span={12}>
                                    <TableBox checked headList={activityTableHead} bodyList={activityTableBody} data={activityPageData} dataOnClick={activityOnClick} border={"top"} colgroup={[25,25,25,25]}></TableBox>
                                </Col>
                                <Col span={12} justify={"center"} style={{
                                    marginTop : "1rem"
                                }}>
                                    <Pagination num={Math.floor(activityNum/14)<=1 ? 0 : Math.floor(activityNum/14) } onClick={activityPaginationOnClick}></Pagination>
                                </Col>
                            </Row>
                        </Col>



                        <Col span={3}>
                            <Row justify={"space-between"}>
                                <Col span={12}>
                                    <TableBox headList={matchingResultTableHead} bodyList={matchingResultTableBody} border={"top"} tooltip={matchedInfoToolTip} row={8} colgroup={[50,50]}></TableBox>
                                </Col>
                                <Col span={5.5} style={{
                                    marginTop : "2.4rem"
                                }}>
                                    <TableBox headList={notMatchedSeniorHead} bodyList={notMatchedSeniorBody} border={"top"} tooltip={unMatchedSeniorInfoToolTip} row={4}></TableBox>
                                </Col>
                                <Col span={5.5} style={{
                                    marginTop : "2.4rem"
                                }}>
                                    <TableBox headList={notMatchedVolunteerHead} bodyList={notMatchedVolunteerBody} border={"top"} tooltip={unMatchedVolunteerInfoToolTip} row={4}></TableBox>
                                </Col>
                            </Row>

                        </Col>
                        <Col span={3}>
                            <Row>
                                <Col span={12}>
                                    <PageMenuNav></PageMenuNav>
                                </Col>
                                <Col span={12} style={{
                                    marginTop : "1.5rem"
                                }}>
                                    <UserCard></UserCard>
                                </Col>
                            </Row>

                        </Col>

                    </Row>


                </Row>

            </Content>
            <Modal visible={volunteerModal} closable={true} onClose={toggleModal} size={6} title={"봉사 신청 조회"}>
                <VolunteerModalContent visible={volunteerModal} id={currentActivityId}/>
            </Modal>

        </>
    )
}

export default memo(MatchContent)