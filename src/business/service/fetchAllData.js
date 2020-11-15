const fetchAllData = async() => {
        return await new Promise(async (resolve, reject) => {
            let data = await fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/myArea', {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("YAT")
                }
            }).then((res) => {

                if (!res.ok) throw Error()
                return res.json()
            }).catch((e) => {
                console.log("에러남 " + e)
                resolve([])
            });
            if(data){
                data = JSON.stringify(data)
                data = data.replace(/FEMALE/g, "여")
                data = data.replace(/MALE/g, "남")
                data = data.replace(/WORK/g, "노력봉사")
                data = data.replace(/TALK/g, "말벗봉사")
                data = JSON.parse(data)
                data = data.seniors
                console.log(data)
                resolve(data);
            }else{
                reject([])
            }


            // let data=await fetch('http://localhost:7000/seniors/view', {
            //         method: 'GET',
            //         headers : {
            //             'Authorization' : "Bearer "+ localStorage.getItem("YAT")
            //         }
            //     }).then((res) => res.json());
            //     if (data) {
            //         //console.log(data)
            //         resolve(data);
            //     } else reject(new Error('User non exist'));
            // }).then((resolve) => {
            //     setSeniors(resolve);
            // });
        })
}

export default fetchAllData;