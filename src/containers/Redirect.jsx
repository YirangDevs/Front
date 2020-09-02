import React from "react"
import { connect } from "react-redux"
import Redirect from "../components/Redirect"
import ACTION from "../store/actions/action"

const mapStateToProps = (state, ownProps) => {
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        Logined: function(payload){
            dispatch(ACTION.LOGIN_ACTION_FUNC(payload))
        }
    }
}

export default connect(null, mapDispatchToProps)(Redirect)