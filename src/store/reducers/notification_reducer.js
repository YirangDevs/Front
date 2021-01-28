import ACTION from "../actions/notification_action"

export default (state , action)=>{
    if(state===undefined) { return {notification : [] }}
    switch(action.type){

        case ACTION.ADD_NOTIFICATION:
            return {
                notification : state.notification.concat([action.notification])
            }
        case ACTION.DELETE_NOTIFICATION:
            return {
                notification : [...state.notification].filter((notification)=>{

                    if(notification.uuid==action.uuid){ return false }
                    else{ return true;}
                })
            }
        default:
            return { ...state }
    }
}




