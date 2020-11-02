export default {
    SET_CONFIG : "SET_CONFIG",
    SELECT_CONFIG : "SELECT_CONFIG",
    DELETE_CONFIG : "DELETE_CONFIG",

    SET_CONFIG__ACTION_FUNC : (payload) =>({type : "SET_CONFIG", ...payload}),
    SELECT_CONFIG__ACTION_FUNC : (payload) =>({type : "SELECT_CONFIG", ...payload}),
    DELETE_CONFIG__ACTION_FUNC : (payload) =>({type : "DELETE_CONFIG", ...payload}) 
}
