import React from "react";

const NavContent = () => (
  <>
    <div className="nav menu__nav">
      <div className="nav__title">메뉴</div>
      <div className="nav__btn">봉사자 데이터 업로드</div>
      <div className="nav__btn"><a className="make__btn" href="http://localhost:3000/manage">봉사 공고글 관리</a></div>
      <div className="nav__btn">매칭 결과 확인</div>
    </div>
  </>
);

export default NavContent;
