
import { connect } from "react-redux"
import MyPageContent from "../../../../components/organisms/mypage/Content"
const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
        email: state.login_reducer.email || null,
    }
}

export default connect(mapStateToProps, null)(MyPageContent)