import ACTION from "../actions/senior_action"

export default (state, action)=>{
    if(state===undefined) { return {isModalOpen: false, data: null}}
    switch(action.type){
        
        case ACTION.UPLOAD_SENIORS:
            return {
                ...state, ...action, data: action.data
            }
        case ACTION.RESET_SENIORS:
            return {
                ...state
            }
        case ACTION.OPEN_MODAL:
            return {
                ...state, isModalOpen : true
            }
        case ACTION.CLOSE_MODAL:
            return {
                ...state, ...action, isModalOpen : false, data: null
            }
        
        default:
            return { ...state }
    }
}
