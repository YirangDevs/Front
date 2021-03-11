
import { connect } from "react-redux"
import UserInfo from "../../../../components/molecules/UserInfo"
const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
        email: state.login_reducer.email || null,
    }
}

export default connect(mapStateToProps, null)(UserInfo)