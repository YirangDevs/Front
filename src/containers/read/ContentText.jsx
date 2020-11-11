import { connect } from "react-redux"
import ContentText from "../../components/read/ContentText"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        content: state.select_reducer.selectContent,
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