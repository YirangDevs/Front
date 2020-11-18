import _ from "../../config/env"

let data = {

    getNum : async ()=>{
        const res = await fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices/nums", {
            method: 'GET',
        });
        return await res.json();
    },

    getList : async (pageNum) => {
        const res = await fetch(_.SERVER_URL + ":8080/v1/apis/manage/notices?page=" + Number(pageNum), {
            method: 'GET',
        })
        if(res)
            {
                console.log(res);
            }
        return await res.json();
    }
}

export default data