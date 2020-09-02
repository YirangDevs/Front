export default {
    NAME : "SET_NAME",
    EMAIL : "SET_EMAIL",
    SET_NAME__ACTION_FUNC: (payload) => ({type : "SET_NAME", ...payload}),
    SET_EMAIL_ACTION_FUNC: (payload) => ({type : "SET_EMAIL", ...payload})
}