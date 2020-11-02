import ACTION from "../actions/select_action"

export default (state, action)=>{
    if(state===undefined) { return {  }}
    switch(action.type){
        
        case ACTION.SELECT_CONFIG:
            return {
                ...state, ...action.select
            }
            case ACTION.DELETE_SELECT:
                return {
                    
                }
        default:
            return { ...state }
    }
}