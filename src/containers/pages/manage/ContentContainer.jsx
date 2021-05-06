/** 
 * @author : chaeeun 
 * @date : 2020-11-27 20:56:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-15 05:54:27
 */

import React, { useState, useEffect } from "react"
import ManageContent from "../../../components/organisms/manage/Content/"
import deleteActivity from "../../../service/api/delete/delete_activity";
import get_Notice from "../../../service/api/get/get_notice";
import getNoticeByPage from "../../../service/api/get/get_notice_by_page";
import getNoticeNum from "../../../service/api/get/get_notice_num";
import deleteNotice from "../../../service/api/delete/delete_notice";
import edit_notice from "../../../service/api/put/edit_notice"
import postUrgentNotice from "../../../service/api/post/post_urgent_notice"
import NotificationPool from "../../redux/components/NotificationPool";
const ContentContainer = () => {
    const [listTotalNum, setListTotalNum] = useState("0"); // 전체 리스트 갯수
    const [pagingNum, setPagingNum] = useState(0);// 선택한 리스트 페이지 번호 ( 1페이지 , 2페이지)

    const [selectNotice, setSelectNotice] = useState({});//  read로 열 notice 정보
    const [updateNotice, setUpdateNotice] = useState({})  // update할 notice 정보

    const [lists, setLists] = useState([]);//fetch 로 받아올 리스트 (6개씩뜨는 notice)



    //modal handling
    const [isReadVisible, setIsReadVisible] = useState(false) //rea d 모달
    const [isEditVisible, setIsEditVisible] = useState(false) // edit 모달


    const readModal = {
        show() {
            setIsReadVisible(true)
        },
        close() {
            setIsReadVisible(false)
        }
    }
    const editModal = {
        show() {
            setIsEditVisible(true)
        },
        close() {
            setIsEditVisible(false)
        }
    }




    useEffect(() => {//전체 페이지 갯수 받아오기 
        getNoticeNum()
            .then((res) => {
                setListTotalNum(res.totalNoticeNums);// 전체 리스트 갯수 저장 
            }).catch(error => console.log(error))
    }, [])

    // 전체 페이지 갯수가 바뀔 때 마다 선택된 페이지 새로 받아오기 (삭제되었을때 바로 반영이 되로=도록)
    useEffect(() => {
        getNoticeByPage(pagingNum)
            .then((res) => {
                console.log(res.notices)
                setLists(res.notices);
            }).catch(error => console.log(error))
    }, [pagingNum, listTotalNum])


    /**
     * @description - readButton 눌렀을때 일어나는 event 함수
     * @param e - 선택한 notice Id target하기위한 param
     */
    const toReadHandle = (e) => {
        console.log(e);
        // getNoticeId(e);

        setNotice(e);
        readModal.show();

    }

    const toEditHandle = (e) => {


        setNotice(e);
        setUpNotice(e);
        editModal.show();
    }


    /**
     * @description notice정보를 불러오는 함수 for read
     * @param e - 선택한 notice target하기위한 param
     */
    const setNotice = (id) => {
        setUpdateNotice((state) => ({ ...state, id: id }))

        get_Notice(id)
            .then((res) => {
                setSelectNotice(res)
            })
            .catch(error => console.log(error))
    }

    /**
     * @description notice정보를 불러오는 함수 for edit
     * @param e - 선택한 notice target하기위한 param
     */
    const setUpNotice = (id) => {
        get_Notice(id)
            .then((res) => {
                setUpdateNotice(res)
            })
            .catch(error => console.log(error))
    }

    /**
         * @description 수정완료시 보내는 data
         * @detail title 과 activityRegisterRequestDto를 나눠서 보내야한다. 
         * @detail nor parsㄷInt 통해서 보내야한다.
         */
    const data = JSON.stringify({
        // "title": updateNotice.title,
        // "activityRegisterRequestDto": {
        //     "content": updateNotice.content, "region": updateNotice.region, "nor": parseInt(updateNotice.nor),
        //     "dov": updateNotice.dov, "tov": updateNotice.tov + ":00", "dod": updateNotice.dod
        // }
        "activityRegisterRequestDto": {
            "content": updateNotice.content,
            "dod": updateNotice.dod,
            "dov": updateNotice.dov,
            "nor": parseInt(updateNotice.nor),
            "region": updateNotice.region,
            "tov": (String(updateNotice.tov).length === 8) ? updateNotice.tov : updateNotice.tov + ":00"
        },
        "title": updateNotice.title
    })

    /**
     * @description 수정전 게시물과 수정하고픈 data가 다른지 확인하는 function
     */
    const isEqualObject = (a, b) => {
        const aValues = Object.values(a);
        const aKeys = Object.keys(a);
        const bValues = Object.values(b);
        const diff = []
        if (aValues.length !== bValues.length) { return false }
        for (let i = 0; i < aValues.length; i++) {
            if (aValues[i] !== bValues[i]) {
                aKeys[i] === "title" && diff.push("제목");
                aKeys[i] === "content" && diff.push("내용")
                aKeys[i] === "tov" && diff.push("시작시간")
                aKeys[i] === "dod" && diff.push("신청마감")
            }
        }
        if (diff) return diff
        return false;


    }

    /**
     * @description notice 수정완료 
     * @param noticeId - 선택한 notice id
     * @detail 수정할 notice의 id를 통해 UpdateNotice 내용을 set(update Page 에 표시될거)
     */
    const completeEdit = (noticeId) => {
        console.log(isEqualObject(updateNotice, selectNotice))
        console.log(data)
        let diff = [];
        diff = isEqualObject(updateNotice, selectNotice);
        if (diff.length === 0) return editModal.close() // 수정전 notice와 같으면 modalClose
        edit_notice(noticeId, data, selectNotice.title, diff)
            .then((res) => {
                console.log(res)
                if (diff.includes("제목")) {
                    getNoticeByPage(pagingNum)
                        .then((res) => {
                            console.log("제목이 바껴서 새로 받아오기")
                            console.log(res.notices)
                            setLists(res.notices);
                        }).catch(error => console.log(error))
                }

                // console.log(listTotalNum)
                editModal.close()
            })
            .catch(error => {
                console.log(data)
                console.log(error)
            })
    }



    /**
     * @description paging 클릭 시
     * @param e - 선택한 page target하기위한 param
     * @detail id -1 해야댐 (page는 0 부터 시작 )
     */

    const pagingClick = (e) => {
        const pagingId = e.target.innerText;
        console.log(pagingId)
        setPagingNum(pagingId - 1)
    }

    const pageNumber = []; // pagNation 배열 

    for (let i = 1; i <= Math.ceil(listTotalNum / 6); i++) {
        pageNumber.push(i);
    }



    /**
      * @description notice를 수정 하기 위한 함수들 
      */
    let updateFunction = {
        title: (e) => {
            console.log(e.target.value)
            const title = e.target.value;
            return setUpdateNotice((state) => ({ ...state, title: title }))
        },
        content: (e) => {
            const content = e.target.value;
            return setUpdateNotice((state) => ({ ...state, content: content }))
        },
        tov: (e) => {
            const tov = e.target.value;
            return setUpdateNotice((state) => ({ ...state, tov: tov }))
        },
        dod: (e) => {
            const dod = e.target.value;
            return setUpdateNotice((state) => ({ ...state, dod: dod }))
        },
    }




    // SECTION urgent

    const [isUrgentIcon, setUrgentIcon] = useState([])
    const [isOriginal, setIsOriginal] = useState([])
    const [urgentTitle, setUrgentTitle] = useState("")

    const [isUrgentVisible, setIsUrgentVisible] = useState(false) // urgent 모달

    const urgentModal = {
        show: () => { setIsUrgentVisible(true) },
        close() {
            setUrgentIcon([])
            setIsOriginal([])
            setUrgentTitle("")
            setIsUrgentVisible(false)
        }
    }
    /**
     * @description 긴급게시물  클릭 시
     * @param e 선택한 게시물을 target 하기 위한 param
     * @detail 긴급게시물 클릭시 modal여는 거 
     */
    const toUrgentHandle = (e) => {
        console.log(e);
        urgentModal.show();
    }


    const urgentIconOnchange = (e) => {
        console.log(e.target.checked)
        console.log(e.target.value)
        if (e.target.checked) {
            return setUrgentIcon(["🚨"])
        }
        if (!e.target.checked) {
            console.log("나가리")
            return setUrgentIcon([])
        }
    }

    const getOriginalTitleOnchange = (e) => {
        console.log(e.target.checked)
        console.log(e.target.value)
        if (e.target.checked) {
            setUrgentTitle(selectNotice.title)
            return setIsOriginal([e.target.value])
        }
        if (!e.target.checked) {
            console.log("나가리")
            setUrgentTitle("")
            return setIsOriginal([])
        }
    }


    /**
     *  @description 긴급 게시물 제목 변경 
     */
    const updateUrgentTitle = (e) => {
        return setUrgentTitle(e.target.value);
    }


    /**
       *  @description 긴급 게시물 post
       */
    const okUrgentOnclick = () => {
        console.log(selectNotice.title === urgentTitle)
        console.log(isUrgentIcon.length === 0)
        if (selectNotice.title === urgentTitle && isUrgentIcon.length === 0) {
            console.log('둘다같ㅇ다')
            return NotificationPool.api.add({
                title: "같은 제목의 게시물은 게시할 수 없습니다.",
                content: "응급아이콘을 추가하거나 , 제목을 수정해 주세요.",
                status: "error"
            })
        }
        if (!urgentTitle) {
            console.log('제목입력 안함')
            return NotificationPool.api.add({
                title: "응급아이콘만 게시할 수 없습니다.",
                content: "게시물의 제목을 입력해주세요.",
                status: "error"
            })
        }
        const data = (isUrgentIcon.length !== 0) ?
            JSON.stringify({
                "title": "🚨" + urgentTitle
            })
            :
            JSON.stringify({
                "title": urgentTitle
            });

        postUrgentNotice(selectNotice.id, data)
            .then((res) => {
                console.log(res)
                setListTotalNum((state) => (state + 1))
                readModal.close();
                urgentModal.close();
            })
            .catch((err) => {
                (err.errorCode === "099") ?
                    NotificationPool.api.add({
                        title: "같은 제목의 게시물은 게시할 수 없습니다.",
                        content: "응급아이콘을 추가하거나 , 제목을 수정해 주세요.",
                        status: "error"
                    })
                    :
                    NotificationPool.api.add({
                        title: "Error from post_notice",
                        content: err.errorName + "(" + err.errorCode + ")",
                        status: "error"
                    })
            })
    }
    //  !SECTION urgent

    // SECTION delete

    const [isActivityDeleteVisible, setActivityDeleteVisible] = useState(false)
    const [deleteInfo, setDeleteInfo] = useState({
        deleteId: "",
        deleteTitle: ""
    })
    const activityDeleteModal = {
        show: () => setActivityDeleteVisible(true),
        close: () => setActivityDeleteVisible(false)
    }

    /**
     * @description notice를 삭제하기 버튼 눌었을떄
     * @param e - 선택한 notice target하기위한 param
     * @detail 삭제할 notice가 마지막일 경우 force delete
     */
    const deleteOnclick = (id, title) => {
        setDeleteInfo({ deleteId: id, deleteTitle: title })
        deleteNotice(id)
            .then((res) => {
                console.log(res);
                NotificationPool.api.add({
                    title: "게시물 삭제 성공",
                    content: `${title}을 삭제하였습니다.`,
                    status: "success"
                })
                setListTotalNum((state) => (state - 1))
            })
            .catch((err) => {
                console.log(err)
                console.log("activityNotice")

                activityDeleteModal.show();
            })
    }

    const activityDeleteOKOnclick = () => {
        deleteActivity(deleteInfo.deleteId)
            .then((res) => {
                console.log(res)
                NotificationPool.api.add({
                    title: "게시물 삭제 성공",
                    content: "게시물 및 관련된 활동을 삭제하였습니다.",
                    status: "success"
                })
                activityDeleteModal.close();
                setListTotalNum((state) => (state - 1))
            })
            .catch((err) => {
                console.log(err)
            })
    }



    // !SECTION delete







    return (

        <>
            <ManageContent
                listTotalNum={listTotalNum}
                setListTotalNum={setListTotalNum} // set 전제 리스트 갯수 
                setPagingNum={setPagingNum} // set 선택한 리스트 페이지 번호
                selectNotice={selectNotice} // read 로 열 notice 정보 
                setSelectNotice={setSelectNotice} // set read로 열 notice 정보
                updateNotice={updateNotice} // update 할 notice 정보 (update page에 표시될)
                setUpdateNotice={setUpdateNotice} // set update 할 notice 정보 (update page에 표시될)
                lists={lists}
                setLists={setLists} // set fetch 로 받아올 리스트 (6개씩뜨는 notice)

                /* props.function */
                setNotice={setNotice} // notice를 클릭 했을떄 notice를 read 하는 모달
                completeEdit={completeEdit} // notice를 수정하기 버튼 눌었을떄 

                pagingClick={pagingClick} // paging 클릭 시  
                updateFunction={updateFunction} // notice를 수정 하기 위한 함수들 


                toReadHandle={toReadHandle} // readButton 눌렀을때 일어나는 event 함수
                toEditHandle={toEditHandle} // 수정하기 버튼 (id 받아서 notice 갱신 후 수정 form 채우기)
                /*modal handling*/
                isReadVisible={isReadVisible}
                isEditVisible={isEditVisible}
                readModal={readModal}
                editModal={editModal}

                /* 긴급 게시물 올리기  */
                isUrgentIcon={isUrgentIcon}
                isUrgentVisible={isUrgentVisible}
                UrgentModal={urgentModal}

                toUrgentHandle={toUrgentHandle} //오류때문에 만들어놓은 거 사용함(지울꺼면 지워)

                urgentIconOnchange={urgentIconOnchange}
                updateUrgentTitle={updateUrgentTitle}

                urgentTitle={urgentTitle}
                getOriginalTitleOnchange={getOriginalTitleOnchange}
                isOriginal={isOriginal}
                okUrgentOnclick={okUrgentOnclick}


                //게시물 삭제
                isActivityDeleteVisible={isActivityDeleteVisible}
                activityDeleteModal={activityDeleteModal}
                deleteOnclick={deleteOnclick}
                activityDeleteOKOnclick={activityDeleteOKOnclick}
                deleteInfo={deleteInfo}
            > </ManageContent>
        </>

    )
}

export default ContentContainer