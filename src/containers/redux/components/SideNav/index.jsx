import { connect } from "react-redux"
import SideNav from "../../../../components/molecules/SideNav/index"

const mapStateToProps = (state) => {
    return {
        imgUrl: state.user_reducer.imgUrl,
        logined : state.login_reducer.logined,
        role : state.user_reducer.role
    }
}

export default connect(mapStateToProps, null)(SideNav)