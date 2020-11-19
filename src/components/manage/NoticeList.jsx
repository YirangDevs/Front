//notice
import React, { useState, useEffect } from 'react';
//import getNotice from "../../init/fetchGetData"
import Switch from "@material-ui/core/Switch"
import { FormControlLabel } from '@material-ui/core';
import fetchdata from '../../business/service/get_notice_list';
import _ from "../../config/env"


const NoticeList = (props) => {
    const [notices, setNotices] = useState([]);

    var checked
    const [pagingNum, setpagingNum] = useState("0")


    useEffect(() => {
        fetchdata.getList(pagingNum)
            .then((resolve) => {
                console.log(resolve.notices)
                setNotices(resolve.notices);
            })
    }, [pagingNum])

    useEffect(() => {
        fetchdata.getList(0)
            .then((resolve) => {
                console.log(resolve.notices)
                setNotices(resolve.notices);
            })
    }, [props.totalNum])


    const SelectId = (e) => {
        console.log(e.target)
        const ID = e.target.id;
        console.log(ID)
        const selectValue = notices.filter(notices => Number(notices.id) === Number(ID))
        console.log(selectValue[0]);

        props.SET_SELECT({
            select: {
                selectId: ID,
                selectTitle: selectValue[0].title,
                selectNor: selectValue[0].nor,
                selectDov: selectValue[0].dov,
                selectTov: selectValue[0].tov,
                selectRegion: selectValue[0].region

            }
        });

        if (checked) {
            localStorage.setItem("SELECT_ID", ID)
            //  window.open(_.HOST_URL + '/read', 'window_name',
            //  'width=530,height=633,location=no,status=no,scrollbars=yes')
            window.open(_.HOST_URL + '/read', 'window_name',
                'width=530,height=633,location=no,status=no,scrollbars=yes')
        }
    }

    const readOntable = (e) => {
        checked = e.target.checked
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
                <div className="notice__list--button">
                    <FormControlLabel
                        control={
                            <Switch
                                checked={checked}
                                onChange={readOntable}
                                name="checked"
                            // color="primary"
                            />
                        } label="테이블에서 바로 조회하기✏️"
                    />

                </div>
                <table className="notice__table--manage">
                    <thead>
                        <tr>
                            <th></th>
                            <th>제목</th>
                            <th>봉사날짜</th>
                            <th>봉사지역</th>
                            <th>인원수</th>
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
            </div>

        </>
    )
}

export default NoticeList;