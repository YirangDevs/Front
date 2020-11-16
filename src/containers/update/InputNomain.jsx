import { connect } from "react-redux"
import InputNomain from "../../components/update/InputNomain"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        Nor: state.notice_reducer.Nor,
        Dov: state.notice_reducer.Dov,
        Tov: state.notice_reducer.Tov,
        Dod: state.notice_reducer.Dod
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_CONFIG: function (payload) {
            dispatch(ACTION.SET_CONFIG__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputNomain)