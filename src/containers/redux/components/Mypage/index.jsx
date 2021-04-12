
import { connect } from "react-redux"
import MyPageContent from "../../../../components/organisms/mypage/Content"
const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
        email: state.user_reducer.email,
        role: state.user_reducer.role,
    }
}

export default connect(mapStateToProps, null)(MyPageContent)