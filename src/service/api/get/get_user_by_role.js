/**
 * @description 관리자/봉사자 구분해서 출력
 * @method GET
 * @request @header YAT token
 */


 const getUserByRole = ({role}) => {
     return fetch(''+role, {
         method: 'GET',
         headers : {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
         }
     }).then(res=>console.log(res))
 }

 export default getUserByRole