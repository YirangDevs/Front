import {connect} from "react-redux"
import PageMenuNav from "../../../../components/molecules/PageNav"
const mapStateToProps = (state, props) => {
    return {
        role : state.user_reducer.role,
    }
}

export default connect(mapStateToProps, null)(PageMenuNav)