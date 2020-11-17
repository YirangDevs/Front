import { connect } from "react-redux"
import VolunteerTypeForm from "../../components/senior/VolunteerTypeForm"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        type: state.inputSenior_reducer.type
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        INPUT_SENIORS : function(payload) {
            dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC(payload))
        }

        }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerTypeForm)