import React from 'react'
import _ from "../../config/env"

const MenuInfo = (props) => {

    const handleClick = (event) => {
        event.persist();
        props.LOGOUT();
        localStorage.removeItem("YAT")
        window.location.href = "https://kauth.kakao.com/oauth/logout?client_id=" + _.REST_KEY + "&logout_redirect_uri=" + _.LOGOUT_REDIRECT_URL
    }


    return (
        <>
            <div className="info--manage menu__info--manage">
                <div className="info__title--manage">안녕하세요 {props.username}님</div>
                <div className="info__card--manage">
                    <div className="info__card--key--manage">MODE</div>
                    <div className="info__card--value--manage">{(props.role === "VOLUNTEER") ? "유저" : "관리자"} 모드</div>
                </div>
                <div className="info__card--manage">
                    <div className="info__card--key--manage">LOGIN</div>
                    <div className="info__card--value--manage" onClick={handleClick}>LOGOUT</div>
                </div>
            </div>
        </>
    )
}

export default MenuInfo;