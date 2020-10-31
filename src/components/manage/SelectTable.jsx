//Select
import React from 'react'

const SelectTable = () => {
    return (
        <>
            <table className="select__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>제목</th>
                        <th>봉사날짜</th>
                        <th>봉사시간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>수성구 재가봉사 09/20 모집합니다.</td>
                        <td>20/09/20</td>
                        <td>14:00</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default SelectTable;