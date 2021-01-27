import React from "react"
import {connect} from "react-redux"
import MenuIconNav from "../../../../components/molecules/MenuIconNav"
const mapStateToProps = (state, props) => {
    return {
        role : state.user_reducer.role,
    }
}

export default connect(mapStateToProps, null)(MenuIconNav)