import { connect } from "react-redux"
import NoticeUpdateForm from "../components/organisms/create/NoticeUpdateForm"

const mapStateToProps = (state, props) => {
    console.log(state)
    console.log(props)
    return {
        titleOnChange: props.titleOnChange,
        regionOnChange: props.regionOnChange,
        needsOnChange: props.needsOnChange,
        dateOnChange: props.dateOnChange,
        timeOnChange: props.timeOnChange,
        deadlineOnChange: props.deadlineOnChange,

        region: state.transferSeniorToNotice_reducer.region,
        date: state.transferSeniorToNotice_reducer.date,
        needs: state.transferSeniorToNotice_reducer.needs
    }
}


export default connect (mapStateToProps, null)(NoticeUpdateForm)