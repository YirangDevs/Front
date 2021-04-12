import React, {useCallback, useEffect, useState} from "react"
import MatchContent from "../../../components/organisms/match/Content"
import getActivityByPage from "../../../service/api/get/get_activity_by_page";
import getActivityNum from "../../../service/api/get/get_activity_num";

const ContentContainer = () => {

    const [currentActivityPage, setCurrentActivityPage] = useState([])
    const [currentActivityPageTableBody, setCurrentActivityPageTableBody] = useState([])
    const [pageNum, setPageNum] = useState(0)
    const [currentRegion, setCurrentRegion] = useState("전체")

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
                activityPageData={currentActivityPage}
                currentRegion={currentRegion}

                activityPaginationOnClick={activityPaginationOnClick}
                regionOnChange={regionOnChange}
            ></MatchContent>
        </>
    )
}

export default ContentContainer