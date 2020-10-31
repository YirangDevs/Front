import ACTION from "../actions/notice_action"

export default (state, action)=>{
    if(state===undefined) { return { }}
    switch(action.type){
        
        case ACTION.SET_CONFIG:
            return {
                ...state,  ...action.notice
            }
        case ACTION.DELETE_CONFIG:
            {
                return{
                    
                }
            }

        default:
            return { ...state }
    }
}

// const initialState = {

// "notice":

// {

// "id": 0,

// "title": "0",

// "nor": "0",

// "dov": "0",

// "tov": "0"

// }


// }