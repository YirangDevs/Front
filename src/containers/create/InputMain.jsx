import { connect } from "react-redux"
import InputMain from "../../components/create/InputMain";
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

export default connect(null, mapDispatchToProps)(InputMain)