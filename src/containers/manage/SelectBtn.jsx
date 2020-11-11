import { connect } from "react-redux"
import SelectBtn from "../../components/manage/SelectBtn"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        selectTitle: state.select_reducer.selectTitle,
        selectId: state.select_reducer.selectId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DELETE_SELECT: function (payload) {
            dispatch(ACTION.DELETE_SELECT__ACTION_FUNC(payload))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectBtn)