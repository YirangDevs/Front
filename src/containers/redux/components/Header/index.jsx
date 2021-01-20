import React from "react"
import {connect} from "react-redux"
import Header from "../../../../components/organisms/Header"
const mapStateToProps = (state, props) => {
    return {
        role : state.user_reducer.role,
        logined : state.login_reducer.logined,
    }
}

export default connect(mapStateToProps, null)(Header)