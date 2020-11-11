import ACTION from "../actions/setButton_action"

export default (state, action) => {
    if(state===undefined) { return {button:true}}
    switch(action.type){
        case ACTION.SET_BUTTON:
            return {
                ...state, button : action.button
            }
        default:
            return {...state}
    }
}