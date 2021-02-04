/**
 * @description 관리자 담당지역 변경
 * @method PUT
 * @request @header YAT token
 */

 const editUserAdminRegion = ({userID}) => {
     return fetch(''+Number(userID), {
         method: 'PUT',
         headers : {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
         }
     }).then(res=>console.log(res))
 }

 export default editUserAdminRegion