import React from "react";
import { Link } from "react-router-dom";


const NavContent = () => (
  <>
    <div className="nav menu__nav">
      <div className="nav__title">메뉴</div>
      <div className="nav__btn">
        <Link to="/Seniors" >봉사자 데이터 업로드</Link></div>
      <Link to='/manage' className="nav__btn">
        <div className="make__btn">봉사 공고글 관리</div>
      </Link>
      <div className="nav__btn">매칭 결과 확인</div>
    </div>
  </>
);

export default NavContent;
