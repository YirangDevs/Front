import NotificationPool from "../../../containers/redux/components/NotificationPool/";
import _ from "../../../config/env";
/**
 * @description 할당된 모든 구역 받아오기
 * @method GET
 * @request @headers YAT token
 * @request @body data{title , content , region , nor , dov , tov , dod}
 */
const getAllAreas = () => {
        return fetch(`${_.SERVER_URL}:8080/v1/apis/seniors/myArea`, {
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
                NotificationPool.api.add({
                    title : "Error from get_all_areas",
                    content : err.errorName + "("+err.errorCode+")",
                    status : "error"
                })
                console.log("Error from get_all_areas\n"+err.errorCode+"\n"+err.errorName)
                //에러처리
                throw err
        })
}

export default getAllAreas;