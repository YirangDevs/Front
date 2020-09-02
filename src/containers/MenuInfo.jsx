import { connect } from "react-redux"
import MenuInfo from "../components/MenuInfo"

const mapStateToProps = (state) => {
    return {
        username : state.username

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuInfo)