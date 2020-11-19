import { connect } from "react-redux"
import RenderSenior from "../../components/senior/RenderSenior"
import ACTION from "../../store/actions/action"


const mapDispatchToProps = (dispatch) => {
    return {
        INPUT_SENIORS : function(payload) {
            dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC(payload))
        },
        SET_BUTTON : function(payload) {
            dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC(payload))
        }

        }
}

export default connect(null, mapDispatchToProps)(RenderSenior)