import ACTION from "../store/actions/action"
import store from "../store/store"


export default () =>{
    if(!store.getState().select_reducer.selectId)
    {
        console.log("localStorge에서 id받는중,,,")
        store.dispatch(ACTION.SELECT_CONFIG__ACTION_FUNC({
            select : {
                selectId : localStorage.getItem("SELECT_ID")
            }
        }))
    }
}