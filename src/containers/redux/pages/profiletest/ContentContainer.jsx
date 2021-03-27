import { connect } from "react-redux"
import ContentContainer from "../../../pages/profiletest/ContentContainer"
import ACTION from "../../../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        role: state.user_reducer.role,
        username: state.user_reducer.username,
        realname: state.user_reducer.realname,
        email: state.user_reducer.email,
        emailValidation: state.user_reducer.emailValidation,
        firstRegion: state.user_reducer.firstRegion,
        secondRegion: state.user_reducer.secondRegion,
        imgUrl: state.user_reducer.imgUrl,
        sex: state.user_reducer.sex,
        phone: state.user_reducer.phone
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