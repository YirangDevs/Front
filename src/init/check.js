
import store from "../store/store"

let check = {

    manage : () =>{
        localStorage.removeItem("SELECT_ID")
        console.log(store.getState().login_reducer.logined)
        console.log(store.getState().user_reducer.role)
        // if(store.getState().login_reducer.logined && store.getState().user_reducer.role == "ADMIN")
        // {
        //     console.log("mange Start")
        // }
        // else {
        //     alert("권한이 없습니다.")
        //     console.log(store.getState().login_reducer.logined)
        //     console.log(store.getState().user_reducer.role)
        //     window.history.back();
        // };
    }


}

export default check;