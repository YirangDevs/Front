/** 
 * @author: chaeeun 
 * @date : 2020-11-27 20:56:22 
 * @Last Modified by: euncherry
 * @Last Modified time: 2020-12-08 21:30:23
 */


import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import fetchNotice from "../../business/service/fetch_notice"
import Content from "../../components/organisms/manage/Content"
const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`

const ContentContainer = () => {

    const [listTotalNum, setListTotalNum] = useState(0); //  전체 리스트 갯수
    const [pagingNum, setPagingNum] = useState(0);//선택한 리스트 페이지 번호 ( 1페이지 , 2페이지)
    const [selectNotice, setSelectNotice] = useState({});//  read로 열 notice 정보
    const [updateNotice, setUpdateNotice] = useState({  // update할 notice 정보
        id: "",
        title: "",
        content: "",
        nor: "",
        dov: "",
        tov: "",
        dod: "",
        region: ""
    });
    const [deleteId, setDeleteId] = useState(null); // 삭제할 id 
    const [lists, setLists] = useState([]);//fetch 로 받아올 리스트 (6개씩뜨는 notice)

    useEffect(() => {//전체 페이지 갯수 받아오기 
        fetchNotice.getNum()
            .then((res) => {
                console.log("전체 페이지 갯수 받아오기")
                console.log(res.totalNoticeNums);
                setListTotalNum(res.totalNoticeNums);// 전체 리스트 갯수 저장 
            })
    }, [])

    // page별로 6개씩 받아오기 (pagination눌러서 페이지가 바뀔떄 )
    useEffect(() => {
        fetchNotice.getList(pagingNum)
            .then((res) => {
                console.log("pagination눌러서 페이지가 바뀔떄")
                console.log(res.notices)
                setLists(res.notices)
            })
    }, [pagingNum])

    // 전체 페이지 갯수가 바뀔 때 마다 선택된 페이지 새로 받아오기 (삭제되었을때 바로 반영이 되로=도록)
    useEffect(() => {
        fetchNotice.getList(pagingNum)
            .then((res) => {
                console.log(listTotalNum)
                console.log("전체 페이지 갯수가 바뀔 때 마다 선택된 페이지 새로 받아오기")
                console.log(res.notices)
                setLists(res.notices);
            })
    }, [listTotalNum])


    /**
     * @description notice를 클릭 했을때 notice 를 read 하는 모달
     * @param e - 선택한 notice target하기위한 param
     */
    const noticeClick = (e) => {
        console.log(e.target)
        const readId = e.target.id
        console.log(readId)
        fetchNotice.getNotice(readId) // fetch해서 선택한notice 업데이트 
            .then((res) => {
                setSelectNotice(res.notice)
            })
    }

    /**
         * @description notice를 수정하기 버튼 눌었을떄 
         * @param e - 선택한 notice target하기위한 param
         * @detail 수정할 notice의 id를 통해 UpdateNotice 내용을 set(update Page 에 표시될거)
         */
    const updateClick = (e) => {
        console.log(e.target)
        const updateId = e.target.id;
        console.log(updateId)
        fetchNotice.getNotice(updateId)
            .then((res) => {
                setUpdateNotice(res.notice)
            })
    }

    /**
         * @description notice를 삭제하기 버튼 눌었을떄 
         * @param e - 선택한 notice target하기위한 param
         * @detail 삭제할 notice가 마지막일 경우 force delete
         */

    const deleteClick = (e) => {
        console.log(e.target)
        setDeleteId(e.target.id);
        if (deleteId) {
            console.log("DELETE working ,,");
            fetchNotice.deleteNotice(deleteId)
                .then((res) => {
                    if (res.ok) {
                        setDeleteId(null);
                        alert("💥게시글 삭제 성공!💥")
                        fetchNotice.getNum()
                            .then((res) => {
                                setListTotalNum(res.totalNoticeNums)
                            })
                    }
                    else {
                        (window.confirm("이 게시물을 삭제하면 게시물과 관련된 모든 활동이 삭제됩니다. 삭제하시겠습니까?")) ?
                            (
                                console.log("i have a power"),
                                fetchNotice.deletePowerNotice(deleteId)
                                    .then((res) => {
                                        console.log("force 삭제 성공");
                                        alert("💥게시글 및 활동 삭제 성공!💥");
                                        setDeleteId(null);
                                        fetchNotice.getNum()
                                            .then((res) => {
                                                setListTotalNum(res.totalNoticeNums)
                                            })
                                    })
                            ) :
                            null
                    }
                })
        }
    }

    /**
         * @description paging 클릭 시  
         * @param e - 선택한 page target하기위한 param
         * @detail id -1 해야댐 (page는 0 부터 시작 )
         */

    const pagingClick = (e) => {
        const pagingId = e.target.id;
        console.log(pagingId - 1)
        setPagingNum(id - 1)
    }

    const pageNumber = []; // pagNation 배열 

    for (let i = 1; i <= Math.ceil(totalNum / 6); i++) {
        pageNumber.push(i);
    }



    /**
      * @description notice를 수정 하기 위한 함수들 
      */
    let updateFunction = {
        title: (e) => {
            const title = e.target.title;
            return setUpdateNotice((state) => ({ ...state, title: title }))
        },
        content: (e) => {
            const content = e.target.content;
            return setUpdateNotice((state) => ({ ...state, content: content }))
        },
        nor: (e) => {
            const nor = e.target.nor;
            return setUpdateNotice((state) => ({ ...state, nor: nor }))
        },
        dov: (e) => {
            const dov = e.target.dov;
            return setUpdateNotice((state) => ({ ...state, dov: dov }))
        },
        tov: (e) => {
            const tov = e.target.tov;
            return setUpdateNotice((state) => ({ ...state, tov: tov }))
        },
        dod: (e) => {
            const dod = e.target.dod;
            return setUpdateNotice((state) => ({ ...state, dod: dod }))
        },
        region: (e) => {
            const region = e.target.region;
            return setUpdateNotice((state) => ({ ...state, region: region }))
        },
    }





    return (
        <>
            <Container>
                <Content
                    setListTotalNum={setListTotalNum} // set 전제 리스트 갯수 
                    setPagingNum={setPagingNum} // set 선택한 리스트 페이지 번호
                    selectNotice={selectNotice} // read 로 열 notice 정보 
                    setSelectNotice={setSelectNotice} // set read로 열 notice 정보
                    updateNotice={updateNotice} // update 할 notice 정보 (update page에 표시될)
                    setUpdateNotice={setUpdateNotice} // set update 할 notice 정보 (update page에 표시될)
                    setDeleteId={setDeleteId} // set 삭제할 id
                    lists={lists}
                    setLists={setLists} // set fetch 로 받아올 리스트 (6개씩뜨는 notice)

                    /* props.function */
                    noticeClick={noticeClick} // notice를 클릭 했을떄 notice를 read 하는 모달
                    updateClick={updateClick} // notice를 수정하기 버튼 눌었을떄 
                    deleteClick={deleteClick} // notice를 삭제하기 버튼 눌었을떄 
                    pagingClick={pagingClick} // paging 클릭 시  
                    updateFunction={updateFunction} // notice를 수정 하기 위한 함수들 
                >
                </Content>
            </Container>
        </>
    )
}

export default ContentContainer