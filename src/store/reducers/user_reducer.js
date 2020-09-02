import ACTION from "../actions/user_action"

export default (state, action)=>{
    if(state===undefined) { return { user : {}}}
    console.log(action)
    switch(action.type){
        
        case ACTION.SET_NAME:
            return {
                ...state, username : action.username
            }
        case ACTION.SET_EMAIL:
            return {
                ...state, logined: action.user_email
            }
        default:
            return { ...state }
    }
}