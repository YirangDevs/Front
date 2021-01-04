/**
 * @description 개별구역요청
 * @method GET
 * @request @headers YAT token
 * @request
 * @parameters region
 */

const getArea = (region) => {
        return fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/area?region='+region, {
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
            refactor=refactor.replace(/FEMALE/g, "여")
            refactor=refactor.replace(/MALE/g, "남")
            refactor=refactor.replace(/WORK/g, "노력봉사")
            refactor=refactor.replace(/TALK/g, "말벗봉사")
            refactor=JSON.parse(refactor)
            return refactor.seniors
        }).catch(async(error)=>{
            let err =  await error.then()
            console.log("Error from get_area\n"+err.errorCode+"\n"+err.errorName)
            //에러처리
            throw err
        })
}

export default getArea;