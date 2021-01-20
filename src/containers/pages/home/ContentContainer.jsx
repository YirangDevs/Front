import React, {useEffect, useState} from "react"
import HomeContent from "../../../components/organisms/home/Content";
import getNoticeByPage from "../../../service/api/get/get_notice_by_page";
import getNoticeNum from "../../../service/api/get/get_notice_num";

const ContentContainer = () => {

    const [currentNoticePage, setCurrentNoticePage] = useState(0)
    const [noticeList, setNoticeList] = useState([])
    const [bodyList, setBodyList] = useState([])
    const [noticeNum, setNoticeNum] = useState(0)

    useEffect(()=>{
        getNoticeNum().then(data=>{setNoticeNum(data.totalNoticeNums)}).catch(err=>console.log(err))
    },[])

    useEffect(()=>{
        getNoticeByPage(currentNoticePage).then(data=>{
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
        }).catch(err=>console.log(err))
    }, [currentNoticePage])

    const setNoticeNumState = (num) =>{
        setNoticeNum(num)
    }

    const onPaginationClick = (e) => {
        setCurrentNoticePage(e.target.value)
    }



    return (
        <>
            <HomeContent
                noticeList={noticeList}
                bodyList={bodyList}
                noticeNum={noticeNum}
                currentNoticePage={currentNoticePage}
                setNoticeNum={setNoticeNumState}
                onPaginationClick={onPaginationClick}

            >

            </HomeContent>
        </>
    )
}

export default ContentContainer