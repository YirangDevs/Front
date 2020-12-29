//notice
import React from 'react'
import styled from 'styled-components'


const NoticeInformation = () => {
    return (
        <>
            <div className="notice__information--manage">
                <div className="information__text--manage">게시글 클릭 시 상세 게시글 조회 및 재업로드 할 수 있습니다.</div>
                <div className="information__icon--manage">
                    <i className="fas fa-arrow-down"></i>
                </div>
            </div>
        </>
    )
}

export default NoticeInformation;