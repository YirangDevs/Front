import ACTION from "../actions/login_action"

export default (state, action)=>{
    if(state==undefined) { return { logined : false }}
    switch(action){
        case ACTION.LOGIN:
            return {
                ...state, login: true
            }
        case ACTION.LOGOUT:
            return {
                ...state, login: false
            }
        default:
            return { ...state }
    }
}