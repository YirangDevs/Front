export default {
    UPLOAD_SENIORS : "UPLOAD_SENIORS",
    RESET_SENIORS : "RESET_SENIORS",
    OPEN_MODAL : "OPEN_MODAL",
    CLOSE_MODAL : "CLOSE_MODAL",

    UPLOAD_SENIORS__ACTION_FUNC: (payload) => ({type : "UPLOAD_SENIORS", ...payload}),
    RESET_SENIORS__ACTION_FUNC: (payload) => ({type: "RESET_SENIORS", ...payload}), 
    OPEN_MODAL__ACTION_FUNC: (payload) => ({type: "OPEN_MODAL", ...payload}),
    CLOSE_MODAL__ACTION_FUNC: (payload) => ({type: "CLOSE_MODAL", ...payload})
}