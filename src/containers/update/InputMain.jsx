import { connect } from "react-redux"
import InputMain from "../../components/update/InputMain"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        Title: state.notice_reducer.Title,
        Region: state.notice_reducer.Region
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_CONFIG: function (payload) {
            dispatch(ACTION.SET_CONFIG__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMain)