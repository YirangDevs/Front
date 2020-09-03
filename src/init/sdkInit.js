import _ from "../config/config"

export default ()=>{
    window.Kakao.init(_.DEV_JAVASCRIPT_KEY);
}