import React from "react";
import _ from "../../config/env"


const MenuInfo = (props) => {


  const handleClick = (event) => {
    event.persist();
    props.LOGOUT()
    localStorage.removeItem("YAT")
    window.location.href = "https://kauth.kakao.com/oauth/logout?client_id=" + _.REST_KEY + "&logout_redirect_uri=" + _.LOGOUT_REDIRECT_URL
  }

  //슈퍼 관리자가 어떻게 오는지 체크
  console.log(props.role)


  return (
    <>
      <div className="info menu__info">
        <div className="info__title">안녕하세요 {props.username}님</div>
        <div className="info__card">
          <div className="info__card--key">MODE</div>
          <div className="info__card--value">{(props.role === "VOLUNTEER") ? "유저" : "관리자"} 모드</div>
        </div>
        <div className="info__card">
          <div className="info__card--key">LOGIN</div>
          <div className="info__card--value" onClick={handleClick}>LOGOUT</div>
        </div>
      </div>
    </>
  );
}
export default MenuInfo;
