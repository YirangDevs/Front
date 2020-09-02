import { connect } from "react-redux"
import MenuInfo from "../components/MenuInfo"
import ACTION from "../store/actions/action"

const mapStateToProps = (state) => {
    return {
        username : state.user_reducer.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LOGOUT : function(payload){
            window.Kakao.Auth.logout(function() {
                dispatch(ACTION.LOGOUT_ACTION_FUNC(payload))
                dispatch({type:ACTION.DELETE_USER})
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuInfo)