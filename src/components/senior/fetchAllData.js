const fetchAllData = async(setSeniors, setError) => {
    try {
        setError(null);
        setSeniors(null);
        const promise = await new Promise(async(resolve, reject) => {
            let file=await fetch('http://localhost:7000/seniors/view', {
                method: 'GET',
            }).then((res) => res.json());
            if (file) {
                resolve(file);
            } else reject(new Error('User non exist'));
        }).then((resolve) => {
            setSeniors(resolve);
        });
    }catch(e) {
        //setError(e);
        new Error();
    }
}

export default fetchAllData;