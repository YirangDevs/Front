import { connect } from "react-redux"
import ContentContainer from "../../../pages/profile/ContentContainer"
import ACTION from "../../../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
        role: state.user_reducer.role,
        logined: state.login_reducer.logined,
        emailValidation: state.user_reducer.emailValidation,
        firstRegion: state.user_reducer.firstRegion,
        secondRegion: state.user_reducer.secondRegion,
        email: state.user_reducer.email,
        imgUrl: state.user_reducer.imgUrl || null

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