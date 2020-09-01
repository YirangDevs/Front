import React from "react"
import _ from "../config/config"

const KakaoLoginBtn = () => (
    <>
        <div className="content__login__wrapper">
            <a href={_.AUTHORIZATION_URL}>
                <img src={require("../img/kakaobtn.png")} alt=""  className="content__login__btn"/>
            </a>
            
        </div>
    </>
)

export default KakaoLoginBtn