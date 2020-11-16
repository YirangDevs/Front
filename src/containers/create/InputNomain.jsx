import { connect } from "react-redux"
import InputNoMain from "../../components/create/InputNomain";
import ACTION from "../../store/actions/action"

const mapDispatchToProps = (dispatch) => {
    return {

        // SET_USER: function(payload){
        //     dispatch(ACTION.SET_USER__ACTION_FUNC(payload))
        // }
        SET_CONFIG: function (payload) {
            dispatch(ACTION.SET_CONFIG__ACTION_FUNC(payload))
        }
    }
}

export default connect(null, mapDispatchToProps)(InputNoMain)