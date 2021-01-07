import auth_action from "./auth_action"
import user_action from "./user_action"
import select_action from "./select_action"
import noticeTotalNum_action from "./noticeTotalNum_action"
import transferSeniorToNotice_action from "./transferSeniorToNotice_action"

export default {
    ...auth_action,
    ...user_action,
    ...select_action,
    ...noticeTotalNum_action,
    ...transferSeniorToNotice_action
}