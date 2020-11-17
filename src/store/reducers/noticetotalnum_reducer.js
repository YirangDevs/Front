import ACTION from "../actions/noticetotalnum_action"

export default (state, action)=>{
    if(state===undefined) { return {}}
    switch(action.type){
        
        case ACTION.SET_TOTALNUM:
            return {
                ...state, ...action.totalNum
            }
        default:
            return { ...state }
    }
}