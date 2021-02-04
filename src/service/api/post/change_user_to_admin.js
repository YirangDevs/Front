/**
 * @description 봉사자에서 관리자로 권한 변경
 * @method POST
 * @request @headers YAT token
 */

 const changeUserToAdmin = ({userID}) => {
     return fetch(''+Number(userID), {
         method: 'POST',
         headers : {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
         }
     }).then(res=>console.log(res))
 }

 export default changeUserToAdmin