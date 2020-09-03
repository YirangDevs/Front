import React from "react"
import _ from "../config/config"

const KakaoLoginBtn = () => (
    <>
        <div className="content__login__wrapper">
            <a href={_.AUTHORIZATION_URL+"authorize?client_id="+_.DEV_REST_KEY+"&redirect_uri="+_.DEV_REDIRECT_URL+"&response_type=code"}>
                <img src={require("../img/kakaobtn.png")} alt=""  className="content__login__btn"/>
            </a>
            
        </div>
    </>
)

export default KakaoLoginBtn