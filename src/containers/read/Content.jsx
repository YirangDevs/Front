import { connect } from "react-redux"
import Content from "../../components/read/Content"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        selectId: state.select_reducer.selectId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_SELECT: function (payload) {
            dispatch(ACTION.SELECT_CONFIG__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)