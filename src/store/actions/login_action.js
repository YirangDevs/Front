export default {
    LOGIN : "LOGIN",
    LOGOUT : "LOGOUT",
    LOGIN_ACTION_FUNC: (payload) => ({type : "LOGIN", ...payload}),
    LOGOUT_ACTION_FUNC: (payload) => ({type : "LOGOUT", ...payload})
}