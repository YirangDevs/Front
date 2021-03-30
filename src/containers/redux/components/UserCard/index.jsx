import { connect } from "react-redux"
import UserCard from "../../../../components/molecules/UserCard"
const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
        email: state.user_reducer.email,
        emailValidation: state.user_reducer.emailValidation,
    }
}

export default connect(mapStateToProps, null)(UserCard)