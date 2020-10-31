import { connect } from "react-redux"
import DoneButton from "../../components/create/DoneButton"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        title: state.notice_reducer.title,
        region: state.notice_reducer.region,
        nor: state.notice_reducer.nor,
        dov: state.notice_reducer.dov,
        tov: state.notice_reducer.tov,
        dod: state.notice_reducer.dod,
        content: state.notice_reducer.content,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // LOGOUT: function (payload) {
        //     dispatch(ACTION.LOGOUT_ACTION_FUNC(payload))
        //     dispatch({ type: ACTION.DELETE_USER })
        SUBMIT: function (payload) {
            dispatch({ type: ACTION.DELETE_CONFIG })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DoneButton)