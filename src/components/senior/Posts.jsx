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
                            <th>봉사종류</th>
                            <th>봉사날짜</th>
                            <th>우선순위</th>
                        </tr>
                    </thead>
                
                {posts?
                    <tbody>
                    {posts.map(renderSenior)}
                </tbody>:null
                }
                    

                </table>
            </div>
    )
}
export default Posts