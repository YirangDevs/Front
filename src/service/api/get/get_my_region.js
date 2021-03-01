import NotificationPool from "../../../containers/redux/components/NotificationPool/";
/**
 * @description 본인에게 할당된 지역 리스트로 select box 구성
 * @method GET
 * @request @headers YAT token
 */
const getMyRegion = () => {
    return fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/admins/region', {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + localStorage.getItem("YAT")
        }
    }).then((res)=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
        let data = res.json()
        return data
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from get_my_region",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from get_my_region\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default getMyRegion