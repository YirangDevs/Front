import { connect } from "react-redux"
import NameGenderForm from "../../components/senior/NameGenderForm"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        name : state.inputSenior_reducer.name,
        sex : state.inputSenior_reducer.sex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        INPUT_SENIORS : function(payload) {
            dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameGenderForm)