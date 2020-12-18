import { connect } from "react-redux"
import EditDelete from "../../components/senior/EditDelete"

const mapStateToProps = (state) => {
    return {
        id : state.inputSenior_reducer.id,
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

export default connect (mapStateToProps, null)(EditDelete)