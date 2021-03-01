
import { connect } from "react-redux"
import ContentContainer from "../../../../containers/pages/profile/ContentContainer"
const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
        role: state.user_reducer.role,
        email: state.login_reducer.email || null,
        imgUrl: state.user_reducer.imgUrl,
    }
}

export default connect(mapStateToProps, null)(ContentContainer)