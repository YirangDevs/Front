/**
 * @description 전체 유저권한 가져오기
 * @method GET
 * @request @headers YAT Token
 */

 const getAllUsers = () => {
     console.log(localStorage.getItem("YAT"))
     return fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/admins/user-auths', {
         method : 'GET',
         headers: {
            'Authorization': "Bearer " + localStorage.getItem("YAT")
         }
     }).then((res)=>{
         return res.json()
     }).then((data)=>{
         data = JSON.stringify(data)
         data = data.replace(/FEMALE/g, "여성")
         data = data.replace(/MALE/g, "남성")
         data = data.replace(/SUPER_ADMIN/g, "슈퍼관리자")
         data = data.replace(/ADMIN/g, "관리자")
         data = data.replace(/VOLUNTEER/g, "봉사자")
         data = data.replace(/UNKNOWN/g, "-")
         data = JSON.parse(data)
         return data
     })
 }

 export default getAllUsers