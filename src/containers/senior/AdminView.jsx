import { connect } from "react-redux"
import AdminView from "../../components/senior/AdminView"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        button : state.setButton_reducer.button
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_BUTTON : function(payload) {
            dispatch(ACTION.SET_BUTTON__ACTION_FUNC(payload))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AdminView)