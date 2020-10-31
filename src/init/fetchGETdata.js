


export default async (setError , setUsers) => {
    try {
        //요청이 시작 할 때는 error , user  초기화
        setError(null);
        setUsers(null);
        const promise = await new Promise(async (resolve, reject) => {
            let file = await fetch('http://localhost:9000/notices/page?page=0', {
                method: 'GET',

            }).then((res) => res.json());
            if (file) {
                setUsers(file.notice);
                console.log(file.notice);
                console.log(file.notice.id);
                
            } else reject(new Error('User non exist'));
        })
        
        // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
        setError(e);
    }
    
}

