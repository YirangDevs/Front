import ACTION from "../actions/inputSenior_action"

export default (state, action) => {
    if(state===undefined) { return initial}
    switch(action.type){
        case ACTION.INPUT_SENIORS:
            return {
                ...state, ...action.senior
            }
        default:
            return {...state}
    }
}

const initial = {
    id: "",
    name : "",
    sex : "",
    type : "",
    priority : "",
    date : "",
    phone : "",
    region : "",
    address : ""
}
