import { connect } from "react-redux"
import Content from "../../components/home/Content"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    
    return {
        logined : state.login_reducer.logined,
        loading: state.login_reducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       SET_LOADING : function(payload){
           dispatch(ACTION.LOADING_ACTION_FUNC(payload))
       },
       SET_LOADING_OUT : function(payload){
        dispatch(ACTION.LOADING_OUT_ACTION_FUNC(payload))
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)