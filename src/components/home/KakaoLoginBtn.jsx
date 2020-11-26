import React from "react"
import _ from "../../config/env"

const KakaoLoginBtn = () => (
    <>
        <div className="login content__login">
            <a href={_.AUTHORIZATION_URL+"authorize?client_id="+_.REST_KEY+"&redirect_uri="+_.REDIRECT_URL+"&response_type=code"}>
                <img src={require("../../img/kakaobtn.png")} alt=""  className="login__btn"/>
            </a>
            
        </div>
    </>
)

export default KakaoLoginBtn