import React, { useState, useEffect } from 'react';
import fetchAllData from './fetchAllData';
import fetchRegion from "./fetchRegion";

const RList = () => {
    const [seniors, setSeniors] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAllData(setSeniors, setError);
    }, [])

    if (error) return console.log('에러가 발생하였습니다')
    if (!seniors) return null;

    const selectRegion = (e) => {
        if (e.target.value==="all") {
            fetchAllData(setSeniors, setError);
        }else {
            fetchRegion(setSeniors, setError, e);
        }
    }
    

    return (
        <>  
        <select className="select-region__dropdown" onChange={selectRegion}>
            <option value="not-select">지역을 선택하세요</option>
            <option value="all">전체</option>
            <option value="수성구">수성구</option>
            <option value="중구">중구</option>
            <option value="동구">동구</option>
            <option value="서구">서구</option>
            <option value="남구">남구</option>
            <option value="북구">북구</option>
        </select>
            <div className="list content__list">
                <table className="table-view">
                    <thead>
                        <tr className="table-view__title">
                            <th>이름</th>
                            <th>성별</th>
                            <th>지역</th>
                            <th>전화번호</th>
                            <td>봉사종류</td>
                            <td>봉사날짜</td>
                            <td>우선순위</td>
                        </tr>
                    </thead>

                    {seniors.map((senior) => (

                        <tbody key={senior.id}>
                            <tr>
                                <td> {senior.name} </td>
                                <td>{senior.sex}</td>
                                <td>{senior.region}</td>
                                <td>{senior.phone}</td>
                                <td>{senior.type}</td>
                                <td>{senior.date}</td>
                                <td>{senior.priority}</td>
                            </tr>
                        </tbody>

                    ))}

                </table>
            </div>
        </>
    )


}

export default RList;