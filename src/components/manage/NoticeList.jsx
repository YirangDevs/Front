//notice
import React, { useState, useEffect } from 'react';
import getNotice from "../../init/fetchGetData"


const NoticeList = ({ SET_SELECT }) => {
    const [notices, setNotices] = useState([]);
    const [test, setTest] = useState(0)

    useEffect(() => {

        getNotice()
            .then((data) => {
                setNotices(data.notices)
                setTest(1)
                console.log(notices)
                //return data.notices
            })

        //.then((notices) => {
        // InitSelect(notices)
        //})

    }, [test])



    // let InitSelect = (notices) => {
    //     console.log(notices[0]);
    //     console.log(notices);
    //     SET_SELECT({
    //         select: {
    //             selectId: notices[0].id,
    //             selectTitle: notices[0].title,
    //             selectDov: notices[0].dov,
    //             selectNor: notices[0].nor
    //         }
    //     })


    // }


    // SET_SELECT({
    //     select: {
    //         selectId: "1",
    //         selectTitle: users[1].title,
    //         selectDov: users[0].dov,
    //         selectRegion: users[0].region
    //     }
    // })
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
        })

    }

    if (!notices) return null;
    return (
        <>
            <div className="notice__list" id="reloadPage">
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