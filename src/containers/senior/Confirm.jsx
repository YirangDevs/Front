import { connect } from "react-redux"
import Confirm from "../../components/senior/Confirm"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        name : state.inputSenior_reducer.name,
        sex : state.inputSenior_reducer.sex,
        type : state.inputSenior_reducer.type,
        priority : state.inputSenior_reducer.priority,
        date : state.inputSenior_reducer.date,
        phone : state.inputSenior_reducer.phone,
        region : state.inputSenior_reducer.region,
        address : state.inputSenior_reducer.address
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        INPUT_SENIORS : function(payload) {
            dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)