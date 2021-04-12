import {connect} from "react-redux"
import ProfileButton from "../../../../components/atoms/ProfileButton"
const mapStateToProps = (state, props) => {
    return {
        url: state.user_reducer.imgUrl,
    }
}

export default connect(mapStateToProps, null)(ProfileButton)