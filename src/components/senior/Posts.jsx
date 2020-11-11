import React from 'react'
import renderSenior from "./RenderSenior"

const Posts = ({posts}) => {
    return (
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

                    <tbody>
                        {posts.map(renderSenior)}
                    </tbody>

                </table>
            </div>
    )
}
export default Posts