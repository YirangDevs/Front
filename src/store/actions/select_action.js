export default {
    SELECT_CONFIG : "SELECT_CONFIG",
    DELETE_SELECT :"DELETE_SELECT",
    
    SELECT_CONFIG__ACTION_FUNC : (payload) =>({type : "SELECT_CONFIG", ...payload}),
    DELETE_SELECT__ACTION_FUNC : (payload) =>({type : "DELETE_SELECT", ...payload}),
    
}
