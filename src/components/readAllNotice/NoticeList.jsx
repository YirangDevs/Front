//notice
import React, { useState, useEffect } from 'react';
import _ from "../../config/env"
import Buttons from '../../containers/readAllNotice/Buttons'

const NoticeList = ({ SET_SELECT }) => {
    const [notices, setNotices] = useState([]);
    const [pagingNum, setpagingNum] = useState("0")
    const [totalPage, settotalPage] = useState("0")



    useEffect(() => {

        new Promise(async (resolve, reject) => {
            let getNum = await fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/nums", {
                method: 'GET',

            }).then((res) => res.json());
            if (getNum) { resolve(getNum); settotalPage(Math.ceil(getNum.totalNoticeNums / 6)) }
            else (console.log("전체 페이지 값 안들어옴"))
        }).then((data) => {
            console.log(data.totalNoticeNums)

        })
    }, [])

    useEffect(() => {
        //Number(pagingNum)
        new Promise(async (resolve, reject) => {
            let notice = await fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices?page=" + Number(pagingNum), {
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("YAT"),
                }
            }).then((res) => res.json());
            if (notice) { resolve(notice) }
        }).then((data) => {
            setNotices(data.notices)
            console.log(data)
        })

    }, [pagingNum])


    const SelectId = (e) => {
        console.log(e.target)
        const ID = e.target.id;
        console.log(ID)

        SET_SELECT({
            select: {
                selectId: ID
            }
        });
        localStorage.setItem("SELECT_ID", ID)

        window.open(_.HOST_URL + '/read', 'window_name',
            'width=530,height=633,location=no,status=no,scrollbars=yes')
    }



    const pagingClick = (e) => {
        const id = e.target.id
        console.log(id - 1)
        setpagingNum(id - 1)
        console.log(pagingNum)
    }

    const pageNumber = [];

    // Math.ceil: 올림
    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(i);
    }


    if (!notices) return null;
    return (
        <>
            <div className="notice__list_Ran" id="reloadPage">
                <table id="myTable" className="notice__table_Ran">
                    <thead>
                        <tr>
                            <th></th>
                            <th>제목</th>
                            <th>봉사날짜</th>
                            <th>봉사지역</th>
                            <th>필요 인원수</th>
                        </tr>
                    </thead>
                    {notices.map((notice) => (
                        <tbody onClick={SelectId} key={notice.id} name={notice.id}>
                            <tr >
                                <td id={notice.id}></td>
                                <td id={notice.id}> {notice.title}</td>
                                <td id={notice.id}>{notice.dov}</td>
                                <td id={notice.id}>{notice.region}</td>
                                <td id={notice.id}>{notice.nor}</td>
                            </tr>
                        </tbody>

                    ))}

                </table>
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
                <Buttons></Buttons>
            </div>

        </>
    )
}

export default NoticeList;