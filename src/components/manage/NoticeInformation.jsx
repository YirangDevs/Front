//notice
import React from 'react'

const NoticeInformation = () => {
    return (
        <>
            <div className="notice__information">
                <div className="information__text">선택된 게시글 제목을 클릭 시 상제 게시글을 조회할 수 있습니다.</div>
                <div className="information__icon">
                    <i className="fas fa-arrow-down"></i>
                </div>
            </div>
        </>
    )
}

export default NoticeInformation;