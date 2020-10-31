import { connect } from "react-redux"
import Star from "../../components/home/Star"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
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

export default connect(mapStateToProps, mapDispatchToProps)(Star)