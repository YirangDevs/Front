import { connect } from "react-redux"
import Preview from "../../components/senior/Preview"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        isModalOpen : state.senior_reducer.isModalOpen,
        senior : state.senior_reducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UPLOAD_SENIORS : function(payload) {
            dispatch(ACTION.UPLOAD_SENIORS__ACTION_FUNC(payload))
        },
        RESET_SENIORS : function(payload) {
            dispatch(ACTION.RESET_SENIORS__ACTION_FUNC(payload))
        },
        OPEN_MODAL : function(payload) {
            dispatch(ACTION.OPEN_MODAL__ACTION_FUNC(payload))
        },
        CLOSE_MODAL : function(payload) {
            dispatch(ACTION.CLOSE_MODAL__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)