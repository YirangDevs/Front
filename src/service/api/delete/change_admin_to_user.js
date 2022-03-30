/**
 * @description 관리자에서 봉사자로 권한 변경
 * @method DELETE
 * @request @headers YAT token
 */
 import _ from "../../../config/env";

 const changeAdminToUser = (userID) => {
    return fetch(`${_.SERVER_URL}:8080/v1/apis/admins/${userID}`, {
        method: 'DELETE',
        headers : {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        }
    }).then()
 }

 export default changeAdminToUser