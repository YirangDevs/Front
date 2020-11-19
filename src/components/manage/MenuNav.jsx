import React from 'react'
import { Link } from 'react-router-dom';

const MenuNav = () => {
    return (
        <>
            <div className="nav--manage menu__nav--manage">
                <div className="nav__title--manage">메뉴</div>
                <Link to='/Seniors' className="nav__btn--manage">
                    <div >봉사자 데이터 업로드</div>
                </Link>
                <Link to='/manage' className="nav__btn--manage">
                    <div >봉사 공고글 관리</div>
                </Link>
                <Link to='/ReadAllNotice' className="nav__btn--manage">
                    <div >전체 게시물 조회하기</div>
                </Link>
            </div>
        </>
    )
}

export default MenuNav; 