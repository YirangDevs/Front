
import { connect } from "react-redux"
import ProfileContent from "../../../../components/organisms/profile/Content"
const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
        email: state.login_reducer.email || null,
        role: state.user_reducer.role,
    }
}

export default connect(mapStateToProps, null)(ProfileContent)