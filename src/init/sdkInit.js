import _ from "../config/env"

export default ()=>{
    window.Kakao.init(_.JAVASCRIPT_KEY);
}