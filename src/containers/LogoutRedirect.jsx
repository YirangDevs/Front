import { connect } from "react-redux"
import LogoutRedirect from "../components/LogoutRedirect";
import ACTION from "../store/actions/action"

const mapDispatchToProps = (dispatch) => {
    return {
        LOGOUT: function(payload){
            dispatch(ACTION.LOGOUT_ACTION_FUNC(payload))
        }
    }
}

export default connect(null, mapDispatchToProps)(LogoutRedirect)