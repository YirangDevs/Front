//notice
import React, { useState, useEffect } from 'react';
import fetchData from '../../business/service/fetch_notice';
import _ from "../../config/env"
import { Link } from 'react-router-dom';


const NoticeList = (props) => {
    const [notices, setNotices] = useState([]);
    const [pagingNum, setpagingNum] = useState("0")


    useEffect(() => {
        fetchData.getList(pagingNum)
            .then((response) => {

                setNotices(response.notices);
            })
    }, [pagingNum])

    useEffect(() => {
        fetchData.getList(0)
            .then((response) => {
                console.log(response.notices)
                setNotices(response.notices);
            })
    }, [props.totalNum])


    const noticeClick = (e) => {
        console.log(e.target)
        const ID = e.target.id;
        console.log(ID)
        localStorage.setItem("SELECT_ID", ID)
        window.open(_.HOST_URL + '/read', 'window_name',
            'width=530,height=633,location=no,status=no,scrollbars=yes')
    }

    const updateClick = (e) => {
        console.log(e.target)
        const updateID = e.target.id;
        console.log(updateID)
        props.SET_SELECT({
            select: {
                selectId: updateID,
            }
        })
    }

    const deleteClick = (e) => {
        const deleteID = e.target.id;
        if (deleteID) {
            console.log("DELETE working,,,,");
            fetchData.deleteNotice(deleteID)
                .then((response) => {
                    if (response.ok) {
                        props.DELETE_SELECT();
                        alert("💥게시글 삭제 성공!💥")
                        fetchData.getNum()
                            .then((response) => {
                                props.SET_TOTALNUM({
                                    totalNum: {
                                        totalNum: response.totalNoticeNums
                                    }
                                })
                            })
                    }
                    else {
                        if (window.confirm("이게시물을 삭제하면 게시물과 관련된 모든 활동이 삭제됩니다. 삭제하시겠습니까?")) {
                            console.log("i have  a power");
                            fetchData.deletePowerNotice(deleteID)
                                .then((response) => {
                                    console.log(response)
                                    console.log("force 삭제 성공");
                                    alert("💥게시글 및 활동 삭제 성공!💥")
                                    props.DELETE_SELECT();
                                    fetchData.getNum()
                                        .then((response) => {
                                            console.log(response.totalNoticeNums);
                                            props.SET_TOTALNUM({
                                                totalNum: {
                                                    totalNum: response.totalNoticeNums
                                                }
                                            })
                                        })
                                })

                        }
                    }

                })
        }
    }

    const pagingClick = (e) => {
        const id = e.target.id
        console.log(id - 1)
        setpagingNum(id - 1)
        console.log(pagingNum)
    }

    const pageNumber = [];

    // Math.ceil: 올림
    for (let i = 1; i <= Math.ceil(props.totalNum / 6); i++) {
        pageNumber.push(i);
    }


    if (!notices) return null;
    return (
        <>
            <div className="notice__list--manage" id="reloadPage">
                <div className="notice__select">
                    {
                        notices.map((notice) => (
                            <div className="select__table__btn" key={notice.id}>
                                <table className="select__table" >
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>제목</th>
                                            <th>봉사날짜</th>
                                            <th>봉사지역</th>
                                        </tr>
                                    </thead>
                                    <tbody onClick={noticeClick} >
                                        <tr>
                                            <td id={notice.id}></td>
                                            <td id={notice.id}> {notice.title}</td>
                                            <td id={notice.id}>{notice.dov}</td>
                                            <td id={notice.id}>{notice.region}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="select__btn">
                                    <Link to="/update" >
                                        <div className="update__btn" id={notice.id} onClick={updateClick} >수정</div>
                                    </Link>
                                    <div className="delete__btn" id={notice.id} onClick={deleteClick}>삭제</div>

                                </div>
                            </div>
                        ))

                    }

                </div>
                <div className="notice__table--paging">
                    <ul className="pagination--notice">
                        {pageNumber.map((pageNum) => (
                            <li
                                key={pageNum}
                                id={pageNum}
                                className="pagination_item"
                                onClick={pagingClick}
                            > {pageNum}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </>
    )
}

export default NoticeList;