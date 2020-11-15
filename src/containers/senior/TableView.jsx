import { connect } from "react-redux"
import TableView from "../../components/senior/TableView"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        id : state.senior_reducer.id,
        name : state.senior_reducer.name,
        sex : state.senior_reducer.sex,
        region : state.senior_reducer.region,
        phone : state.senior_reducer.phone,
        type : state.senior_reducer.type,
        date : state.senior_reducer.date
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        INPUT_SENIORS : function(payload) {
            dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC(payload))
        },
        SET_BUTTON : function(payload) {
            dispatch(ACTION.SET_BUTTON__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableView)