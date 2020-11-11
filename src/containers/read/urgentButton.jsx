import { connect } from "react-redux"
import urgentButton from "../../components/read/urgentButton"


const mapStateToProps = (state) => {
    return {
        title: state.select_reducer.selectTitle,
        nor: state.select_reducer.selectNor,
        noa: state.select_reducer.selectNoa,

    }
}


export default connect(mapStateToProps, null)(urgentButton)