import NotificationPool from "../../../containers/redux/components/NotificationPool/";
import _ from "../../../config/env";
/**
 * @description 개별구역요청
 * @method GET
 * @request @headers YAT token
 * @request
 * @parameters region
 */
const getArea = (region) => {
        return fetch(`${_.SERVER_URL}:8080/v1/apis/seniors/area?region=${region}`, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("YAT")
                }
        }).then((res) => {
                if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
                if(!res.ok) throw res.json()
                return res.json()
        }).then(data=>{
            let refactor=JSON.stringify(data)
            refactor=refactor.replace(/FEMALE/g, "여성")
            refactor=refactor.replace(/MALE/g, "남성")
            refactor=refactor.replace(/WORK/g, "노력봉사")
            refactor=refactor.replace(/TALK/g, "말벗봉사")
            refactor=JSON.parse(refactor)
            return refactor.seniors
        }).catch(async(error)=>{
            let err =  await error.then()
            NotificationPool.api.add({
                title : "Error from get_area",
                content : err.errorName + "("+err.errorCode+")",
                status : "error"
            })
            console.log("Error from get_area\n"+err.errorCode+"\n"+err.errorName)
            //에러처리
            throw err
        })
}

export default getArea;