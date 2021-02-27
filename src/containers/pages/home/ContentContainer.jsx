import React, {memo, useCallback, useEffect, useState} from "react"
import HomeContent from "../../../components/organisms/home/Content";
import getNoticeByPage from "../../../service/api/get/get_notice_by_page";
import getNoticeNum from "../../../service/api/get/get_notice_num";
import getNotice from "../../../service/api/get/get_notice";
import Modal from "../../../components/atoms/Modal";
import ApplyForm from "../../../components/molecules/ApplyForm";
import getMyInfo from "../../../service/api/get/get_my_info";
import NotificationPool from "../../redux/components/NotificationPool";

const ContentContainer = () => {

    const [currentNoticePage, setCurrentNoticePage] = useState(0)
    const [noticeList, setNoticeList] = useState([])
    const [bodyList, setBodyList] = useState([])
    const [noticeNum, setNoticeNum] = useState(0)
    const [currentNotice, setCurrentNotice] = useState(false)

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

    const openNotice = useCallback((data) => {
        console.log(data)
        setCurrentNotice({
            visible : true,
            applyVisible : false,
            ...data
        });
    }, [])

    const openApplyModal = useCallback(()=>{
        getMyInfo().then(data=>{
            
            setCurrentNotice((state)=>({
                ...state,
                applyVisible : true
            }))
        }).catch(err=>{
            NotificationPool.api.add({
                title : "신청 불가",
                content : "본인인증을 해주세요",
                status : "error"
            })
        })


    }, [setCurrentNotice])

    const closeApplyModal = useCallback(()=>{
        setCurrentNotice((state)=>({
            ...state,
            applyVisible : false
        }))
    }, [setCurrentNotice])

    const closeNotice = useCallback(() => {
        setCurrentNotice(false)
    },[])

    const setNoticeNumState = useCallback((num) =>{
        setNoticeNum(num)
    },[])

    const onPaginationClick = useCallback((e) => {
        setCurrentNoticePage(e.target.innerText - 1)
    },[])

    const onTableClick = useCallback((e, data)=>{
        console.log(data)
        getNotice(data.id).then((notice)=>{
            console.log(notice)
            openNotice({
                ...notice
            })
        }).catch(err=>console.log(err))

        }
    ,[openNotice])



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
                currentNotice={currentNotice}
                currentNoticePage={currentNoticePage}

                setNoticeNum={setNoticeNumState}
                closeNotice={closeNotice}
                onPaginationClick={onPaginationClick}
                onTableClick={onTableClick}
                onApplyBtnClick={openApplyModal}


            >

            </HomeContent>
            <Modal title={currentNotice.title} size={10} visible={currentNotice.applyVisible} onClose={closeApplyModal} closable>
                <ApplyForm dov={currentNotice.dov} nor={currentNotice.nor} region={currentNotice.region}>

                </ApplyForm>
            </Modal>
        </>
    )
}

export default memo(ContentContainer)