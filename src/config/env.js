import _ from "./config"

//const env = "production"
const env = "develop"

export default (env==="develop") ? {
    ..._,
    REDIRECT_URL : _.DEV_REDIRECT_URL,
    LOGOUT_REDIRECT_URL : _.DEV_LOGOUT_REDIRECT_URL,
    REST_KEY: _.DEV_REST_KEY,
    JAVASCRIPT_KEY: _.DEV_JAVASCRIPT_KEY
} : {
    ..._
}