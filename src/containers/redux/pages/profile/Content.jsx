import { connect } from "react-redux"
import Content from "../../../../components/organisms/profile/Content"

const mapStateToProps = (state) => {
    return {
        username: state.user_reducer.username,
        email: state.user_reducer.email,


    }
}

export default connect(mapStateToProps, null)(Content)