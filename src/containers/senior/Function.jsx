import { connect } from "react-redux"
import Function from "../../components/senior/Function"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        isModalOpen : state.senior_reducer.isModalOpen,
        data : state.senior_reducer.data,
        id : state.inputSenior_reducer.id,
        address : state.inputSenior_reducer.address,
        button : state.setButton_reducer.button
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
        },
        SET_BUTTON : function(payload) {
            dispatch(ACTION.SET_BUTTON__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Function)