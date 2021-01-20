import _ from "./config"

//const env = "production"
//const env = "development"
const env = "development"

export default (env==="development") ? {
    ..._,
    HOST_URL: _.DEV_HOST_URL,
    REDIRECT_URL : _.DEV_REDIRECT_URL,
    LOGOUT_REDIRECT_URL : _.DEV_LOGOUT_REDIRECT_URL,
    REST_KEY: _.DEV_REST_KEY,
    JAVASCRIPT_KEY: _.DEV_JAVASCRIPT_KEY,
    KAKAO_AUTHORIZATION_URL : "https://kauth.kakao.com/oauth/authorize?client_id=8a0a75ba5fe2323acaf4a809b83f4ad3&redirect_uri=http://localhost:3000/login&response_type=code",
} : {
    ..._
}