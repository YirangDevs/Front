import auth_action from "./auth_action"
import user_action from "./user_action"
import senior_action from "./senior_action"
import inputSenior_action from "./inputSenior_action"
import setButton_action from "./setButton_action"
import notice_action from "./notice_action"
import select_action from "./select_action"
import noticetotalnum_action from "./noticetotalnum_action"

export default {
    ...auth_action,
    ...user_action,
    ...senior_action,
    ...inputSenior_action,
    ...setButton_action,
    ...notice_action,
    ...select_action,
    ...noticetotalnum_action,
}