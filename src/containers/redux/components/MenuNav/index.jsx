import React from "react"
import {connect} from "react-redux"
import MenuNav from "../../../../components/molecules/MenuNav"
const mapStateToProps = (state, props) => {
    return {
        role : state.user_reducer.role,
    }
}

export default connect(mapStateToProps, null)(MenuNav)