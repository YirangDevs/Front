export default {
    ADD_NOTIFICATION : "ADD_NOTIFICATION",
    DELETE_NOTIFICATION : "DELETE_NOTIFICATION",

    ADD_NOTIFICATION__ACTION_FUNC : (payload) =>({type : "ADD_NOTIFICATION", ...payload}),
    DELETE_NOTIFICATION__ACTION_FUNC : (payload) =>({type : "DELETE_NOTIFICATION", ...payload}),
}
