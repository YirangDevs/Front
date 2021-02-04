/**
 * @description 관리자에서 봉사자로 권한 변경
 * @method DELETE
 * @request @headers YAT token
 */

 const changeAdminToUser = ({userID}) => {
    return fetch(''+Number(userID), {
        method: 'DELETE',
        headers : {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        }
    }).then(res=>console.log(res))
 }

 export default changeAdminToUser