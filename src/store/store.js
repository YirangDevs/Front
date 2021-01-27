import {createStore, combineReducers} from "redux"
import login_reducer from "./reducers/login_reducer"
import user_reducer from "./reducers/user_reducer"
import inputSenior_reducer from "./reducers/inputSenior_reducer"
import setButton_reducer from "./reducers/setButton_reducer"
import notice_reducer from "./reducers/notice_reducer"
import select_reducer from "./reducers/select_reducer"
import noticetotalnum_reducer from "./reducers/noticetotalnum_reducer"
import transferSeniorToNotice_reducer from "./reducers/transferSeniorToNotice_reducer"
import notification_reducer from "./reducers/notification_reducer";

export default createStore(combineReducers({
    login_reducer,
    user_reducer,
    inputSenior_reducer,
    setButton_reducer,
    notice_reducer,
    select_reducer,
    noticetotalnum_reducer,
    transferSeniorToNotice_reducer,
    notification_reducer

}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())