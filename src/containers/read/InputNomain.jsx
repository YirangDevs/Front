import { connect } from "react-redux"
import InputNomain from "../../components/read/InputNomain"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        region: "region x",
        dov: state.select_reducer.selectDov,
        tov: state.select_reducer.selectTov,
        dod: state.select_reducer.selectDod,
    }
}



export default connect(mapStateToProps, null)(InputNomain)