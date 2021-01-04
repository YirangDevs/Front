/**
 * @description 할당된 모든 구역 받아오기
 * @method GET
 * @request @headers YAT token
 * @request @body data{title , content , region , nor , dov , tov , dod}
 */
const getAllAreas = () => {
        return fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/myArea', {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("YAT")
                }
            }).then((res) => {
                if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
                if (!res.ok) throw res.json()
                return res.json()
            }).then(data=> {
                data = JSON.stringify(data)
                data = data.replace(/FEMALE/g, "여성")
                data = data.replace(/MALE/g, "남성")
                data = data.replace(/WORK/g, "노력봉사")
                data = data.replace(/TALK/g, "말벗봉사")
                data = JSON.parse(data)
                data = data.seniors
                return data
            }).catch(async(error)=>{
                let err =  await error.then()
                console.log("Error from get_all_areas\n"+err.errorCode+"\n"+err.errorName)
                //에러처리
                throw err
        })
}

export default getAllAreas;