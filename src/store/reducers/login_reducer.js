import ACTION from "../actions/login_action"

export default (state, action)=>{
    if(state===undefined) { return { logined : false}}
    console.log(action)
    switch(action.type){
        
        case ACTION.LOGIN:
            return {
                ...state, logined: true
            }
        case ACTION.LOGOUT:
            return {
                ...state, logined: false
            }
        default:
            return { ...state }
    }
}