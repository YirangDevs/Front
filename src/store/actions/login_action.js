export default {
    LOGIN : "LOGIN",
    LOGOUT : "LOGOUT",
    LOGIN_ACTION_FUNC: (payload) => ({type : this.LOGIN, ...payload}),
    LOGOUT_ACTION_FUNC: (payload) => ({type : this.LOGOUT, ...payload})
}