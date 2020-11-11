
import _ from "../config/env"

        //요청이 시작 할 때는 error , user  초기화
let getNotice = () => new Promise(async (resolve, reject)=> {
    let notice = await fetch(_.HOST_URL + ":8080/v1/apis/manage/notices?page="+Number(0), {
    method: 'GET',
    headers: {
        Authorization: "Bearer " + localStorage.getItem("YAT"),
    }}).then((res) => res.json());
    if(notice)resolve(notice)
    else reject(new Error("notice non exist"))
})
export default getNotice;
        // 데이터는 response.data 안에 들어있습니다




// let file = await fetch("http://localhost:9000/notices/page?page=0", {
//                 method: 'GET',
//                 headers: {
//                     Authorization: "Bearer " + localStorage.getItem("YAT"),
//                 },
//             }