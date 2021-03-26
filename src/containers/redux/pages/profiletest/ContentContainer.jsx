import { connect } from "react-redux"
import ContentContainer from "../../../pages/profiletest/ContentContainer"
import ACTION from "../../../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        role: state.user_reducer.role,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_USER: function (payload) {
            dispatch(ACTION.SET_USER__ACTION_FUNC(payload))


        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)