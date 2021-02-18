/**
 * @description 관리자에서 봉사자로 권한 변경
 * @method DELETE
 * @request @headers YAT token
 */

 const changeAdminToUser = (userID) => {
    return fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/admins/'+userID, {
        method: 'DELETE',
        headers : {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        }
    }).then(res=>console.log(res))
 }

 export default changeAdminToUser