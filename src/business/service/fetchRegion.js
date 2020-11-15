const fetchRegion = async(region) => {
    try {
        return await new Promise(async(resolve, reject) => {

            let data=await fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/area?region='+region, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("YAT")
                }
            }).then((res) => {

                    if(!res.ok) throw Error("없음")


                    return res.json()

                })
                .catch((e)=>{
                    console.log("에러남 "+e)
                    resolve([])
                })

            if (data) {
                data=JSON.stringify(data)
                data=data.replace(/FEMALE/g, "여")
                data=data.replace(/MALE/g, "남")
                data=data.replace(/WORK/g, "노력봉사")
                data=data.replace(/TALK/g, "말벗봉사")
                data=JSON.parse(data)

                resolve(data.seniors);
            } else reject(new Error('User non exist'));
        })
    }catch(e) {
        

    }
}

export default fetchRegion;