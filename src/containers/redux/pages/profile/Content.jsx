import { connect } from "react-redux"
import Content from "../../../../components/organisms/profile/Content"
import ACTION from "../../../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
        email: state.user_reducer.email,


    }
}

export default connect(mapStateToProps, null)(Content)