
import { connect } from "react-redux"
import MyPageContent from "../../../../containers/pages/mypage/ContentContainer"
const mapStateToProps = (state) => {
    return {
        userId: state.user_reducer.userId,
        username: state.user_reducer.username,
        email: state.user_reducer.email,
        role: state.user_reducer.role,
    }
}

export default connect(mapStateToProps, null)(MyPageContent)