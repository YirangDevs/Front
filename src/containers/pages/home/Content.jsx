import { connect } from "react-redux"
import Content from "../../../components/home/Content"

const mapStateToProps = (state) => {
    
    return {
        logined : state.login_reducer.logined,
        loading: state.login_reducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)