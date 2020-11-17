import { connect } from "react-redux"
import DetailAddressForm from "../../components/senior/DetailAddressForm"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        address: state.inputSenior_reducer.address
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        INPUT_SENIORS : function(payload) {
            dispatch(ACTION.INPUT_SENIORS__ACTION_FUNC(payload))
        }

        }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailAddressForm)