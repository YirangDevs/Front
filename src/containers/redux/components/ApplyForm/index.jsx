/**
 * Created by Yongwon on 2021-03-08
 * Email: yongwon0824@naver.com
 */

import {connect} from "react-redux"
import ApplyForm from "../../../../components/molecules/ApplyForm/"
const mapStateToProps = (state, props) => {
    return {
        phone : state.user_reducer.phone,
        sex : state.user_reducer.sex,
        email : state.user_reducer.email,
        name : state.user_reducer.username,
        emailValidation : state.user_reducer.emailValidation,
        logined : state.login_reducer.logined,
    }
}

export default connect(mapStateToProps, null)(ApplyForm)