const fetchAllData = async(setSeniors, setError) => {
    try {
        setError(null);
        setSeniors(null);
        await new Promise(async(resolve, reject) => {
        //     let file=await fetch('http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/myArea', {
        //         method: 'GET',
        //         headers : {
        //             'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        //         }
        //     }).then((res) => res.json());
        //     if (file) {
        //         file=JSON.stringify(file)
        //         file=file.replace(/FEMAIL/g, "여")
        //         file=file.replace(/MAIL/g, "남")
        //         file=file.replace(/WORK/g, "재가봉사")
        //         file=file.replace(/TALK/g, "말벗봉사")
        //         file=JSON.parse(file)
        //         resolve(file.seniors);
        //     } else reject(new Error('User non exist'));
        // }).then((resolve) => {
        //     setSeniors(resolve);
        // });
        
        let file=await fetch('http://localhost:7000/seniors/view', {
                method: 'GET',
                headers : {
                    'Authorization' : "Bearer "+ localStorage.getItem("YAT")
                }
            }).then((res) => res.json());
            if (file) {
                //console.log(file)
                resolve(file);
            } else reject(new Error('User non exist'));
        }).then((resolve) => {
            setSeniors(resolve);
        });

    }catch(e) {
        new Error();
    }
}

export default fetchAllData;