import { connect } from "react-redux"
import InputMain from "../../components/read/InputMain"


const mapStateToProps = (state) => {
    return {
        title: state.select_reducer.selectTitle,
        nor: state.select_reducer.selectNor,
        noa: state.select_reducer.selectNoa,

    }
}


export default connect(mapStateToProps, null)(InputMain)