import { connect } from "react-redux"
import VolunteerRegionForm from "../../components/senior/VolunteerRegionForm"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        region: state.inputSenior_reducer.region
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        INPUT_SENIORS : function(payload) {
            dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC(payload))
        }

        }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerRegionForm)