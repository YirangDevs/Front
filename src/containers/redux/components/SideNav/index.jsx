import { connect } from "react-redux"
import SideNav from "../../../../components/molecules/SideNav/index"

const mapStateToProps = (state) => {
    return {
        imgUrl: state.user_reducer.imgUrl
    }
}

export default connect(mapStateToProps, null)(SideNav)