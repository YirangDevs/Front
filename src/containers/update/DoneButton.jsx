import { connect } from "react-redux"
import DoneButton from "../../components/update/DoneButton"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        Title: state.notice_reducer.Title,
        Content: state.notice_reducer.Content,
        Nor: state.notice_reducer.Nor,
        Dov: state.notice_reducer.Dov,
        Tov: state.notice_reducer.Tov,
        Dod: state.notice_reducer.Dod,
        Region: state.notice_reducer.Region,
        Id: state.select_reducer.selectId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // LOGOUT: function (payload) {
        //     dispatch(ACTION.LOGOUT_ACTION_FUNC(payload))
        //     dispatch({ type: ACTION.DELETE_USER })
        SUBMIT: function () {
            dispatch({ type: ACTION.DELETE_CONFIG })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneButton)