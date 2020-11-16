import auth_action from "./auth_action"
import user_action from "./user_action"
import notice_action from "./notice_action"
import select_action from "./select_action"
export default {
    ...auth_action,
    ...user_action,
    ...notice_action,
    ...select_action
}