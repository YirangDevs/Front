const fetchRegion = async(setSeniors, setError, e) => {
    try {
        setError(null);
        setSeniors(null);
        const promise = await new Promise(async(resolve, reject) => {
            const region=e.target.value; //selectbox 값
            let file=await fetch('http://localhost:7000/seniors/area?area='+region, {
                method: 'GET',
            }).then((res) => res.json());
            if (file) {
                resolve(file);
                console.log(file);
            } else reject(new Error('User non exist'));
        }).then((resolve) => {
            setSeniors(resolve);
            console.log(resolve);
        });
    }catch(e) {
        new Error();
    }
}

export default fetchRegion;