import ACTION from "../actions/select_action"

export default (state, action)=>{
    if(state===undefined) { return {  }}
    switch(action.type){
        
        case ACTION.SELECT_CONFIG:
            return {
                ...state, ...action.select
            }
        
        default:
            return { ...state }
    }
}