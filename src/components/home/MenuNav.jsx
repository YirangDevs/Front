import React from "react";
import { Link } from "react-router-dom";


const NavContent = () => (
  <>
    <div className="nav menu__nav">
      <div className="nav__title">메뉴</div>
<<<<<<< HEAD
      <div className="nav__btn"><a className="senior-link" href="http://localhost:3000/Seniors">봉사자 데이터 업로드</a></div>
      <div className="nav__btn">봉사 공고글 관리</div>
=======
      <div className="nav__btn">봉사자 데이터 업로드</div>
      <Link to='/manage' className="nav__btn">
        <div className="make__btn">봉사 공고글 관리</div>
      </Link>
>>>>>>> c6bc065039d56cf6ae8724009a36aece1e4f04b8
      <div className="nav__btn">매칭 결과 확인</div>
    </div>
  </>
);

export default NavContent;
