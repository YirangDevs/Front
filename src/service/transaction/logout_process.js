import store from "../../store/store"
import ACTION from "../../store/actions/action"

const LogoutProcess = () => {
    store.dispatch(ACTION.LOGOUT_ACTION_FUNC())
    localStorage.removeItem("YAT")
}

export default LogoutProcess