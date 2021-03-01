/**
 * @description 관리자 담당지역 변경
 * @method PUT
 * @request @header YAT token
 */

 const editUserAdminRegion = (userID, regions) => {
     console.log(regions)
     let payload = JSON.stringify(regions)
     return fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/admins/'+userID, {
         method: 'PUT',
         headers : {
            "Content-Type": "application/json",
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
         },
         body : payload
     }).then(res=>{
         console.log(res)
         if(!res.ok) throw res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        console.log("Error from put_changeRegion\n"+err.error)
        //에러처리
        throw err
    })
 }

 export default editUserAdminRegion