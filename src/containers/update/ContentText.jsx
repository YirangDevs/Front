import { connect } from "react-redux"
import ContentText from "../../components/update/ContentText"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        Content: state.notice_reducer.Content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_CONFIG: function (payload) {
            dispatch(ACTION.SET_CONFIG__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentText)