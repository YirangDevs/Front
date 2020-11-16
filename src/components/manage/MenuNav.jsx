import React from 'react'
import { Link } from 'react-router-dom';

const MenuNav = () => {
    return (
        <>
            <div className="nav--manage menu__nav--manage">
                <div className="nav__title--manage">메뉴</div>
                <div className="nav__btn--manage">봉사자 데이터 업로드</div>
                <div className="nav__btn--manage">봉사 공고글 관리</div>
                <Link to='/ReadAllNotice' className="nav__btn--manage">
                    <div >전체 게시물 조회하기</div>
                </Link>
            </div>
        </>
    )
}

export default MenuNav; 