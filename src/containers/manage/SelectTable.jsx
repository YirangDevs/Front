import { connect } from "react-redux"
import SelectTable from "../../components/manage/SelectTable";
import ACTION from "../../store/actions/action"

const mapStateToProps = (store) => {
    return {
        id: store.select_reducer.selectId,
        title: store.select_reducer.selectTitle,
        content: store.select_reducer.selectContent,
        nor: store.select_reducer.selectNor,
        dov: store.select_reducer.selectDov,
        tov: store.select_reducer.selectTov,
        dod: store.select_reducer.selectDod,
        region: store.select_reducer.selectRegion
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