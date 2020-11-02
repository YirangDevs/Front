//Select
import React from 'react'
import { Link } from 'react-router-dom';
const SelectTable = (props) => {
    const handleClick = (e) => {

    }
    return (
        <>
            <table className="select__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>제목</th>
                        <th>봉사날짜</th>
                        <th>봉사지역</th>
                    </tr>
                </thead>
                <tbody onClick={handleClick} >
                    <tr>
                        <td>{props.id} </td>
                        <td><Link to="/read">{props.title}</Link></td>
                        <td>{props.dov}</td>
                        <td>{props.nor}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default SelectTable;