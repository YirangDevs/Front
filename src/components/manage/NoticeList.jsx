//notice
import React, { useState, useEffect } from 'react';
import getNotice from "../../init/fetchGetData"
import Switch from "@material-ui/core/Switch"
import { FormControlLabel } from '@material-ui/core';

const NoticeList = ({ SET_SELECT }) => {
    const [notices, setNotices] = useState([]);
    const [test, setTest] = useState(0)

    var checked

    useEffect(() => {

        getNotice()
            .then((data) => {
                setNotices(data.notices)
                setTest(1)
                console.log(notices)
                //return data.notices
            })

    }, [test])

    const SelectId = (e) => {
        console.log(e.target)
        const ID = e.target.id;
        console.log(ID)
        //console.log(notices);
        //console.log(users[2]);
        const selectValue = notices.filter(notices => Number(notices.id) === Number(ID))
        console.log(selectValue[0]);

        SET_SELECT({
            select: {
                selectId: ID,
                selectTitle: selectValue[0].title,
                selectNor: selectValue[0].nor,
                selectDov: selectValue[0].dov,
                selectTov: selectValue[0].tov

            }
        });

        if (checked) {
            localStorage.setItem("SELECT_ID", ID)
            window.open('http://localhost:3000/read', 'window_name',
                'width=530,height=633,location=no,status=no,scrollbars=yes')
        }
    }


    const readOntable = (e) => {
        checked = e.target.checked
    }

    if (!notices) return null;
    return (
        <>
            <div className="notice__list" id="reloadPage">
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
                <table id="myTable" className="notice__table">
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
                                <td id={notice.id}>{notice.tov}</td>
                                <td id={notice.id}>{notice.nor}</td>
                            </tr>
                        </tbody>

                    ))}

                </table>
            </div>

        </>
    )
}

export default NoticeList;