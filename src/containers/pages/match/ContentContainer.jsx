import React, {memo, useCallback, useEffect, useState} from "react"
import MatchContent from "../../../components/organisms/match/Content"
import getActivityByPage from "../../../service/api/get/get_activity_by_page";
import getActivityNum from "../../../service/api/get/get_activity_num";
import getMatchedRecord from "../../../service/api/get/get_matched_record";
import getUnmatchedRecord from "../../../service/api/get/get_unmatched_record";
import getAppliers from "../../../service/api/get/get_appliers";


const ContentContainer = () => {

    const [currentActivityPage, setCurrentActivityPage] = useState([])
    const [currentActivityPageTableBody, setCurrentActivityPageTableBody] = useState([])
    const [currentActivityPageData, setCurrentActivityPageData] = useState([])
    const [pageNum, setPageNum] = useState(0)
    const [currentRegion, setCurrentRegion] = useState("전체")
    const [matchedData, setMatchedData] = useState({})
    const [unmatchedSenior, setUnmatchedSenior] = useState([])
    const [unmatchedVolunteer, setUnmatchedVolunteer] = useState([])
    const [currentActivityId, setCurrentActivityId] = useState(0)
    const [volunteerModal, setVolunteerModal] = useState(false)
    const [appliersCount, setAppliersCount] = useState(0)

    const toggleModal = useCallback(()=> {
        setVolunteerModal(state=>!state)
    }, [])




    const activityOnClick = useCallback((e, data)=>{
        const activityId = data.id
        if(currentActivityId===activityId) return //같은거 누를시 반환
            setMatchedData([])
            setUnmatchedSenior([])
            setUnmatchedVolunteer([])
            setCurrentActivityId(activityId)
            getMatchedRecord(activityId).then(data=>{
            const matchingData = data.matchingContentDtos

            matchingData.forEach((arr)=>{
                setMatchedData((state)=>{
                    /*
                    데이터 가공
                    {
                        seniorId : [seniorId, seniorName, volunteerId, volunteerName]
                    }
                     */
                    const currentData = {...state}

                    if(!currentData[arr.seniorId]){
                        currentData[arr.seniorId] = [{...arr}]
                    }else{
                        currentData[arr.seniorId] = [...currentData[arr.seniorId], {...arr}]
                    }
                    return currentData
                })
            })
        }).catch(e=>console.log(e))



        getUnmatchedRecord(activityId).then(data=>{
            const unMatchedSeniors = data.unMatchedSeniors
            const unMatchedVolunteers = data.unMatchedVolunteers
            if(unMatchedSeniors!==null){
                setUnmatchedSenior((state)=>{
                    return [
                        ...state,
                        ...unMatchedSeniors
                    ]
                })
            }
            if(unMatchedVolunteers!==null){
                setUnmatchedVolunteer((state)=>{
                    return [
                        ...state,
                        ...unMatchedVolunteers
                    ]
                })
            }

        }).catch(e=>console.log(e))

        getAppliers(activityId).then((data)=>{
            setAppliersCount(data.appliers.length)
        }).catch((e)=>{console.log(e); setAppliersCount(0)})

    }, [currentActivityId])

    const activityPaginationOnClick = useCallback((e) => {
        setPageNum(e.target.innerText - 1)
    }, [])

    const regionOnChange = useCallback((e) => {
        const region = e.target.value;
        setCurrentRegion(region)
    }, [])

    useEffect(()=>{
        setCurrentActivityPageTableBody(state=>{
            return currentActivityPage.filter((i)=>{
                return i.region === currentRegion || currentRegion === "전체"
            })
            .map((activity)=>(
                {
                    region : activity.region,
                    dov : activity.dov,
                    nor : activity.nor,
                    tov : activity.tov
                }
            ))
        })
        setCurrentActivityPageData(state=>{
            return currentActivityPage.filter((i)=>{
                return i.region === currentRegion || currentRegion === "전체"
            }).map(data=>{
                return {...data, id : data.activityId}
            })
        })
    }, [currentRegion, currentActivityPage])

    useEffect(()=>{
    }, [currentActivityPageTableBody])

    useEffect(()=>{
        getActivityByPage(0).then((data)=>{
            let {activities} = {...data}
            activities = activities.map((activity)=>(
                {
                    region : activity.region,
                    dov : activity.dov,
                    nor : activity.nor,
                    tov : activity.tov
                }
            ))
            setCurrentActivityPage(data.activities)
            setCurrentActivityPageData(data.activities)
            setCurrentActivityPageTableBody(activities)
        }).catch(err=>console.log(err))
    }, [pageNum])

    useEffect(()=>{
        getActivityNum().then((data)=>{
            const {totalActivityNums} = {...data}
            setPageNum(totalActivityNums)
        }).catch(err=>console.log(err))

    }, [])



    return (
        <>
            <MatchContent
                activityNum={pageNum}
                activityTableBody={currentActivityPageTableBody}
                activityPageData={currentActivityPageData}
                currentRegion={currentRegion}
                matchedData={matchedData}
                unmatchedSenior={unmatchedSenior}
                unmatchedVolunteer={unmatchedVolunteer}
                volunteerModal={volunteerModal}
                currentActivityId={currentActivityId}
                appliersCount={appliersCount}

                activityOnClick={activityOnClick}
                activityPaginationOnClick={activityPaginationOnClick}
                regionOnChange={regionOnChange}
                toggleModal={toggleModal}
            ></MatchContent>
        </>
    )
}

export default memo(ContentContainer)