import { connect } from "react-redux"
import NoticeForm from "../../../../components/molecules/NoticeForm"

const mapStateToProps = (state, props) => {
    return {
        titleOnChange: props.titleOnChange,
        timeOnChange: props.timeOnChange,
        deadlineOnChange: props.deadlineOnChange,

        region: state.transferSeniorToNotice_reducer.region,
        dov: state.transferSeniorToNotice_reducer.dov,
        nor: state.transferSeniorToNotice_reducer.nor,
        excelData: state.transferSeniorToNotice_reducer.excelData,
    }
}


export default connect (mapStateToProps, null)(NoticeForm)