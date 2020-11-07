import { connect } from "react-redux"
import InputNomain from "../../components/read/InputNomain"

const mapStateToProps = (state) => {
    return {
        region: state.select_reducer.selectRegion,
        dov: state.select_reducer.selectDov,
        tov: state.select_reducer.selectTov,
        dod: state.select_reducer.selectDod,
    }
}



export default connect(mapStateToProps, null)(InputNomain)