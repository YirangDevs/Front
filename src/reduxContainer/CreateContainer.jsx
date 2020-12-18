import { connect } from "react-redux"
import NoticeUpdateForm from "../components/organisms/create/NoticeUpdateForm"

const mapStateToProps = (state) => {
    return {
        region: state.transferSeniorToNotice_reducer.region,
        date: state.transferSeniorToNotice_reducer.date,
        needs: state.transferSeniorToNotice_reducer.needs
    }
}


export default connect (mapStateToProps, null)(NoticeUpdateForm)