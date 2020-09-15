import React from "react"
import _ from "../config/env"


const SideNav = (props) => {

    const wrapper_click = (e) => {
        document.querySelector(".side__nav__wrapper").style.display = "none"
        document.querySelector(".side__nav").style.width = "0"
    }

    const logout_click = (event) => {
        event.persist();
        props.LOGOUT()
        localStorage.removeItem("YAT")
        window.location.href="https://kauth.kakao.com/oauth/logout?client_id="+_.REST_KEY+"&logout_redirect_uri="+_.LOGOUT_REDIRECT_URL
    }
    
    return (
    <>  
        
        <div className="side__nav__wrapper" onClick={wrapper_click}></div>
        <div className="side__nav">
        {
            (props.logined) ? (
                <>
                <div className="side__nav__profile__wrapper">
                    <div className="side__nav__profile__img"></div>
                    <div className="side__nav__profile__info">{props.username} | 관리자</div>
                    <div className="side__nav__logout" onClick={logout_click}>Logout</div>
                </div>
                <div className="side__nav__menu__wrapper">
                    <div className="side__nav__menu">봉사자 데이터 업로드</div>
                    <div className="side__nav__menu">봉사 공고글 관리</div>
                    <div className="side__nav__menu">매칭결과 확인</div>
                </div>
                </>
            ) :
            (
                <div className="side__nav__login__wrapper">
                <a  href={_.AUTHORIZATION_URL+"authorize?client_id="+_.REST_KEY+"&redirect_uri="+_.REDIRECT_URL+"&response_type=code"}>
                    <img src={require("../img/kakaobtn.png") } alt="" className="side__nav__login__btn"/>
                </a>
                
            </div>
                
                
           
            )
            }
        </div>
    
    </>
    )
}

export default SideNav