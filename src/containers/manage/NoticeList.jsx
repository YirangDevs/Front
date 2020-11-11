import { connect } from "react-redux"
import NoticeList from "../../components/manage/NoticeList";
import ACTION from "../../store/actions/action"


const mapDispatchToProps = (dispatch) => {
    return {
        SET_SELECT: function (payload) {
            dispatch(ACTION.SELECT_CONFIG__ACTION_FUNC(payload))
        }
    }
}

export default connect(null, mapDispatchToProps)(NoticeList)