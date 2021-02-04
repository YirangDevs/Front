/**
 * @description 전체 유저권한 가져오기
 * @method GET
 * @request @headers YAT Token
 */

 const getAllUsers = () => {
     return fetch('', {
         method : 'GET',
         headers: {
            'Authorization': "Bearer " + localStorage.getItem("YAT")
         }
     }).then((res)=>{
         console.log(res)
     })
 }