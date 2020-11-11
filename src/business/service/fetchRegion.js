const fetchRegion = async(setSeniors, setError, e) => {
    try {
        setError(null);
        setSeniors(null);
        await new Promise(async(resolve, reject) => {
            const region=e.target.value; //selectbox 값
            let file=await fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/area?region='+region, {
                method: 'GET',
            }).then((res) => {
                if(!res.ok){
                    throw new Error("없음")
                }
                return res.json()})
                .catch((e)=>{
                    console.log("에러남 "+e)
                resolve([])
            })
            if (file) {
                file=JSON.stringify(file)
                file=file.replace(/FEMAIL/g, "여")
                file=file.replace(/MAIL/g, "남")
                file=file.replace(/WORK/g, "노력봉사")
                file=file.replace(/TALK/g, "말벗봉사")
                file=JSON.parse(file)
                resolve(file.seniors);
            } else reject(new Error('User non exist'));
        }).then((resolve) => {
            setSeniors(resolve);
            
        })
    }catch(e) {
        
        new Error();
    }
}

export default fetchRegion;