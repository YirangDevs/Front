import ACTION from "../actions/auth_action"

export default (state, action)=>{
    if(state===undefined) { return { logined : false, loading: true}}
    switch(action.type){
        
        case ACTION.LOGIN:
            return {
                ...state, logined: true
            }
        case ACTION.LOGOUT:
            return {
                ...state, logined: false
            }
        case ACTION.LOADING:
            return {
                ...state, loading: true
            }
        case ACTION.LOADING_OUT:
            return {
                ...state, loading: false
            }
        default:
            return { ...state }
    }
}