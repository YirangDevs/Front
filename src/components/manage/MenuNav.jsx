import { Fab } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const MenuNav = () => {
    return (
        <>
            <div className="nav menu__nav">
                <div className="nav__title">메뉴</div>
                <div className="nav__btn">봉사자 데이터 업로드</div>
                <div className="nav__btn">봉사 공고글 관리</div>
                <Link to='/ReadAllNotice' className="nav__btn">
                    <div >전체 게시물 조회하기</div>
                </Link>
            </div>
        </>
    )
}

export default MenuNav; 