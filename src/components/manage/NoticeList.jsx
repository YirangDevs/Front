//notice
import React, { useState, useEffect } from 'react';
import fetchGETdata from "../../init/fetchGETdata"
import store from "../../store/store"

const NoticeList = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {

        fetchGETdata(setError, setUsers);
    }, [])


    if (!users) return null;

    return (
        <>
            <div className="notice__list">
                <table className="notice__table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>제목</th>
                            <th>봉사날짜</th>
                            <th>봉사시간</th>
                            <th>인원수</th>
                        </tr>
                    </thead>
                    {users.map((user) => (

                        <tbody key={user.id}>
                            <tr>
                                <td> {user.id} </td>
                                <td>{user.title}</td>
                                <td>{user.dov}</td>
                                <td>{user.tov}</td>
                                <td>{user.nor}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    )
}

export default NoticeList;