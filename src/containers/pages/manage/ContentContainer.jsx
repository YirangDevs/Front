/** 
 * @author : chaeeun 
 * @date : 2020-11-27 20:56:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-04-08 19:43:09
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

    const [deleteId, setDeleteId] = useState(null); // 삭제할 id 
    const [lists, setLists] = useState([]);//fetch 로 받아올 리스트 (6개씩뜨는 notice)



    //modal handling
    const [isReadVisible, setIsReadVisible] = useState(false) //rea d 모달
    const [isEditVisible, setIsEditVisible] = useState(false) // edit 모달
    const [isUrgentVisible, setIsUrgentVisible] = useState(false) // urgent 모달

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

    const urgentModal = {
        show() {
            setIsUrgentVisible(true)
        },
        close() {
            setIsUrgentVisible(false)
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
        selectNotice.id === e && console.log(selectNotice)
        readModal.show();

    }

    const toEditHandle = (e) => {

        console.log(e);

        setNotice(e);
        setUpNotice(e);
        updateNotice.id === e && console.log(updateNotice)
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
        "title": updateNotice.title,
        "activityRegisterRequestDto": {
            "content": updateNotice.content, "region": updateNotice.region, "nor": parseInt(updateNotice.nor),
            "dov": updateNotice.dov, "tov": updateNotice.tov + ":00", "dod": updateNotice.dod
        }
    })

    /**
     * @description 수정전 게시물과 수정하고픈 data가 다른지 확인하는 function
     */
    const isEqualObject = (a, b,) => {
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
        diff.length || editModal.close() // 수정전 notice와 같으면 modalClose
        console.log(diff)

        edit_notice(noticeId, data, selectNotice.title, diff)
            .then(
                editModal.close()
            )
            .catch(error => console.log(error))


    }

    /**
     * @description notice를 삭제하기 버튼 눌었을떄
     * @param e - 선택한 notice target하기위한 param
     * @detail 삭제할 notice가 마지막일 경우 force delete
     */

    const deleteClick = (deleteId) => {
        deleteNotice(deleteId).then(() => {
            setDeleteId(null);
            alert("💥게시글 삭제 성공!💥")
            setListTotalNum(listTotalNum - 1)
        }).catch(error => {
            console.log(error)
            if (window.confirm("이 게시물을 삭제하면 게시물과 관련된 모든 활동이 삭제됩니다. 삭제하시겠습니까?")) {
                deleteActivity(deleteId).then((res) => {
                    alert("💥게시글 및 활동 삭제 성공!💥");
                    setDeleteId(null);
                    setListTotalNum(listTotalNum - 1)
                }).catch(error => console.log(error))
            }
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




    /**
     * @description 긴급게시물  클릭 시
     * @param e 선택한 게시물을 target 하기 위한 param
     * @detail 긴급게시물 클릭시 modal여는 거 
     */
    const toUrgentHandle = (e) => {
        console.log(e);
        urgentModal.show();

    }


    const [isUrgentIcon, setUrgentIcon] = useState([])

    const [isOriginal, setIsOriginal] = useState([])
    const [urgentTitle, setUrgentTitle] = useState("")





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

    // ANCHOR 수정 
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
                title: "게시물과 같은 제목은 사용할 수 없습니다",
                content: "응급아이콘을 추가학거나 , 제목을 수정해 주세요.",
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
                setListTotalNum((...state) => (state + 1))
                readModal.close();
                urgentModal.close();
            })
            .catch((err) => { console.log(err) })
    }




    //  !SECTION urgent





    /**
     * @description logout 클릭 시
     * @param e  event.persist 를 위한  param
     * @detail logout기능 수행
     */
    const logoutEvent = (e) => {
        console.log("Logout,,,,");

        // e.persist();
        // //props.LOGOUT() // redux에서 로그아웃 상태로 바꿔줌
        // localStorage.removeItem("YAT")
        // window.location.href = "https://kauth.kakao.com/oauth/logout?client_id=" + _.REST_KEY + "&logout_redirect_uri=" + _.LOGOUT_REDIRECT_URL

    }










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
                deleteId={deleteId} // set 삭제할 id
                lists={lists}
                setLists={setLists} // set fetch 로 받아올 리스트 (6개씩뜨는 notice)

                /* props.function */
                setNotice={setNotice} // notice를 클릭 했을떄 notice를 read 하는 모달
                completeEdit={completeEdit} // notice를 수정하기 버튼 눌었을떄 
                deleteClick={deleteClick} // notice를 삭제하기 버튼 눌었을떄 
                pagingClick={pagingClick} // paging 클릭 시  
                updateFunction={updateFunction} // notice를 수정 하기 위한 함수들 
                logoutEvent={logoutEvent} // logout 하는 기능 

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
            > </ManageContent>
        </>

    )
}

export default ContentContainer