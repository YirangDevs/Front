export default {
    LOGIN : "LOGIN",
    LOGOUT : "LOGOUT",
    LOADING : "LOADING",
    LOADING_OUT : "LOADING_OUT",
    LOADING_ACTION_FUNC: (payload) => ({type : "LOADING", ...payload}),
    LOADING_OUT_ACTION_FUNC: (payload) => ({type : "LOADING_OUT", ...payload}),
    LOGIN_ACTION_FUNC: (payload) => ({type : "LOGIN", ...payload}),
    LOGOUT_ACTION_FUNC: (payload) => ({type : "LOGOUT", ...payload})
}