import React, {memo, useCallback, useEffect, useRef, useState} from "react"
import HomeContent from "../../../components/organisms/home/Content";
import getNoticeByPage from "../../../service/api/get/get_notice_by_page";
import getNoticeNum from "../../../service/api/get/get_notice_num";
import getNotice from "../../../service/api/get/get_notice";
import Modal from "../../../components/atoms/Modal";
import ApplyForm from "../../../containers/redux/components/ApplyForm";
import getMyInfo from "../../../service/api/get/get_my_info";
import NotificationPool from "../../redux/components/NotificationPool";
import fakeLogin from "../../../service/api/post/fake_login"
import store from "../../../store/store";
import ACTION from "../../../store/actions/action";
import checkDidApply from "../../../service/api/get/check_did_apply";

const ContentContainer = ({logined}) => {

    const [currentNoticePage, setCurrentNoticePage] = useState(0)
    const [noticeList, setNoticeList] = useState([])
    const [bodyList, setBodyList] = useState([])
    const [noticeNum, setNoticeNum] = useState(0)
    const [currentNotice, setCurrentNotice] = useState(false)
    const [didApply, setDidApply] = useState(false)
    const isInitialMount = useRef(true);

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

        setCurrentNotice({
            visible : true,
            applyVisible : false,
            ...data
        });
    }, [])

    const openApplyModal = useCallback(()=>{
        if(logined===false){
            NotificationPool.api.add({
                title : "로그인이 필요합니다.",
                content : "우측상단에 버튼을 통해 로그인을 해주세요",
                status : "error"
            })
            return
        }
        getMyInfo().then(data=>{
            
            setCurrentNotice((state)=>({
                ...state,
                applyVisible : true
            }))
        }).catch(err=>{
            console.log(err)
        })


    }, [setCurrentNotice, logined])

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
        checkDidApply(data.id).then(data=>setDidApply(data.Applicable)).catch(e=>console.log(e))
        getNotice(data.id).then((notice)=>{
            openNotice({
                ...notice
            })

        }).catch(err=>console.log(err))

        }
    ,[openNotice])

    const fakeLoginOnChange = (e) => {
        const role = e.target.value
        if(role==="권한 설정") return
        fakeLogin({
            fakeAuthority : role
        }).then((payload)=>{
                store.dispatch(ACTION.SET_USER__ACTION_FUNC({user : {...payload}}))
                store.dispatch(ACTION.LOGIN_ACTION_FUNC())
            }
        )

    }

    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }else{
            document.documentElement.scrollTo(0,document.documentElement.scrollHeight)
        }


    }, [currentNotice])

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
                fakeLoginOnChange={fakeLoginOnChange}
                didApply={didApply}

                setNoticeNum={setNoticeNumState}
                closeNotice={closeNotice}
                onPaginationClick={onPaginationClick}
                onTableClick={onTableClick}
                onApplyBtnClick={openApplyModal}


            >

            </HomeContent>
                    <Modal title={currentNotice.title} size={12} xxl={8} xl={8} lg={10} md={10} sm={11} xs={11} visible={currentNotice.applyVisible} onClose={closeApplyModal} closable>
                        <ApplyForm id={currentNotice.id} dov={currentNotice.dov} nor={currentNotice.nor} region={currentNotice.region}>

                        </ApplyForm>
                    </Modal>
        </>
    )
}

export default memo(ContentContainer)