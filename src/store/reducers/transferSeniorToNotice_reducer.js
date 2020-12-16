import ACTION from "../actions/setButton_action"

export default (state, action) => {
    if(state===undefined) { return {}}
    switch(action.type){
        case ACTION.TRANSFER_SENIOR_TO_NOTICE:
            return {
                ...state
            }
        default:
            return {...state}
    }
}