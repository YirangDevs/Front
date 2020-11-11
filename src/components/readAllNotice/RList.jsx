import React, { useState, useEffect } from 'react';



const RList = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchUsers = async () => {
            try {
                //요청이 시작 할 때는 error , user  초기화
                setError(null);
                setUsers(null);
                const promise = await new Promise(async (resolve, reject) => {
                    let file = await fetch('http://localhost:9000/notices/page?page=0', {
                        method: 'GET',

                    }).then((res) => res.json());
                    if (file) {
                        resolve(file);
                        console.log(file);
                    } else reject(new Error('User non exist'));
                }).then((resolve) => {
                    setUsers(resolve);
                    console.log(resolve);
                });
                // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                setError(e);
            }
        };
        fetchUsers();
    }, [])

    if (error) return console.log('에러가 발생하였습니다')
    if (!users) return null;

    return (
        <>
            <div className="list content__list">
                <table className="list__table">
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
            <div className="list paging_list">

            </div>
        </>
    )


}

export default RList;