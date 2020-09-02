import { connect } from "react-redux"
import Content from "../components/Content"

const mapStateToProps = (state) => {
    return {
        logined : state.logined
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)