import { connect } from "react-redux"
import Content from "../../../../components/organisms/profile/Content"
import ACTION from "../../../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
        email: state.user_reducer.email,


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_USER: function (payload) {
            dispatch(ACTION.SET_USER__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)