/**
 * @description 봉사자에서 관리자로 권한 변경
 * @method POST
 * @request @headers YAT token
 */

 const changeUserToAdmin = (userID) => {
     return fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/admins/'+userID, {
         method: 'POST',
         headers : {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
         }
     }).then(res=>{
         console.log(res)
         if(!res.ok) throw res.json()
     }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from put_changeRegion\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
     })
 }

 export default changeUserToAdmin