import { connect } from "react-redux"
import Buttons from "../../components/readAllNotice/Buttons"

const mapStateToProps = (state) => {
    return {
        role: state.user_reducer.role,
    }
}


export default connect(mapStateToProps, null)(Buttons)