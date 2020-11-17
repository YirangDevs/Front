
import store from "../store/store"
import fetchdata from "../business/service/get_notice_list"
import action from "../store/actions/action"

let check = {

    manage : () =>{
        localStorage.removeItem("SELECT_ID")
        fetchdata.getNum()
        .then((resolve) => {
            console.log(resolve.totalNoticeNums);
            store.dispatch(action.SET_TOTALNUM__ACTION_FUNC({
                totalNum: {
                    totalNum: resolve.totalNoticeNums
                }
            }))
        })
    }


}

export default check;