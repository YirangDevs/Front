import ACTION from "../actions/user_action"

export default (state, action)=>{
    if(state===undefined) { return {}}
    switch(action.type){
        
        case ACTION.SET_USER:
            return {
                ...state, ...action.user
            }
        case ACTION.DELETE_USER:
            return {
                
            }
        default:
            return { ...state }
    }
}