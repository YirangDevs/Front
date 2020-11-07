export default {
    SET_CONFIG : "SET_CONFIG",
    DELETE_CONFIG : "DELETE_CONFIG",

    SET_CONFIG__ACTION_FUNC : (payload) =>({type : "SET_CONFIG", ...payload}),
    DELETE_CONFIG__ACTION_FUNC : (payload) =>({type : "DELETE_CONFIG", ...payload}) 
}
