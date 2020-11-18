import { connect } from "react-redux"
import PriorityDatePhoneForm from "../../components/senior/PriorityDatePhoneForm"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        priority: state.inputSenior_reducer.priority,
        date: state.inputSenior_reducer.date,
        phone: state.inputSenior_reducer.phone
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        INPUT_SENIORS : function(payload) {
            dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC(payload))
        }

        }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriorityDatePhoneForm)