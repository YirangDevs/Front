/**
 * Created by Yongwon on 2021-03-08
 * Email: yongwon0824@naver.com
 */

import { connect } from "react-redux"
import ContentContainer from "../../../pages/home/ContentContainer"
const mapStateToProps = (state, props) => {
    return {
        logined : state.login_reducer.logined,
    }
}


export default connect (mapStateToProps, null)(ContentContainer)