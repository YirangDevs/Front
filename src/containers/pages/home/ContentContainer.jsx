import React, {memo, useCallback, useEffect, useState} from "react"
import HomeContent from "../../../components/organisms/home/Content";
import getNoticeByPage from "../../../service/api/get/get_notice_by_page";
import getNoticeNum from "../../../service/api/get/get_notice_num";

const ContentContainer = () => {

    const [currentNoticePage, setCurrentNoticePage] = useState(0)
    const [noticeList, setNoticeList] = useState([])
    const [bodyList, setBodyList] = useState([])
    const [noticeNum, setNoticeNum] = useState(0)

    const getNoticeNumCallBack = useCallback(()=>getNoticeNum().then(data=>{setNoticeNum(data.totalNoticeNums)}).catch(err=>console.log(err)),[])

    const getNoticeByPageCallBack = useCallback(()=>getNoticeByPage(currentNoticePage).then(data=>{
        setNoticeList(data.notices)
        let bodyList = data.notices.map((notice)=>{
            return {
                title : notice.title,
                dov : notice.dov,
                region : notice.region,
                nor : notice.nor
            }
        })
        setBodyList(bodyList)
    }).catch(err=>console.log(err)), [currentNoticePage])

    const setNoticeNumState = useCallback((num) =>{
        setNoticeNum(num)
    },[])

    const onPaginationClick = useCallback((e) => {
        setCurrentNoticePage(e.target.innerText - 1)
    },[])

    const onTableClick = useCallback((e, data)=> console.log(data)
    ,[])

    useEffect(()=>{
        getNoticeNumCallBack()
    },[getNoticeNumCallBack])

    useEffect(()=>{
        getNoticeByPageCallBack()
    }, [getNoticeByPageCallBack])







    return (
        <>
            <HomeContent
                noticeList={noticeList}
                bodyList={bodyList}
                noticeNum={noticeNum}
                currentNoticePage={currentNoticePage}
                setNoticeNum={setNoticeNumState}
                onPaginationClick={onPaginationClick}
                onTableClick={onTableClick}
            >

            </HomeContent>
        </>
    )
}
export default memo(ContentContainer)