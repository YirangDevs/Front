import { connect } from "react-redux"
import SideNav from "../../../pages/sidenav/ContentContainer"

const mapStateToProps = (state) => {
    return {
        imgUrl: state.user_reducer.imgUrl
    }
}

export default connect(mapStateToProps, null)(SideNav)