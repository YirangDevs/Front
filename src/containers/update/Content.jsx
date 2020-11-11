import { connect } from "react-redux"
import Content from "../../components/update/Content"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        selectId: state.select_reducer.selectId,


    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SET_CONFIG: function (payload) {
            dispatch(ACTION.SET_CONFIG__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)