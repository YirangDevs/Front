import { connect } from "react-redux"
import SelectTable from "../../components/manage/SelectTable";
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        id: state.select_reducer.selectId,
        title: state.select_reducer.selectTitle,
        content: state.select_reducer.selectContent,
        nor: state.select_reducer.selectNor,
        dov: state.select_reducer.selectDov,
        tov: state.select_reducer.selectTov,
        dod: state.select_reducer.selectDod,
        region: state.select_reducer.selectRegion
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        SET_SELECT: function (payload) {
            dispatch(ACTION.SELECT_CONFIG__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTable)