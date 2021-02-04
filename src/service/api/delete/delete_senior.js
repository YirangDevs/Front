import NotificationPool from "../../../containers/redux/components/NotificationPool/";

const deleteSenior = async (id) => {
    return fetch("http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/"+id, {
        method: "DELETE",
        headers: {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        }
    }).then(res=>{
        if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
        if(!res.ok) throw res.json()
    }).catch(async(error)=>{
        let err =  await error.then()
        NotificationPool.api.add({
            title : "Error from delete_seniors",
            content : err.errorName + "("+err.errorCode+")",
            status : "error"
        })
        console.log("Error from delete_seniors\n"+err.errorCode+"\n"+err.errorName)
        //에러처리
        throw err
    })
}

export default deleteSenior