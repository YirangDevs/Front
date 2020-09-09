import decoding from "../business/service/decode_yat"

export default ()=> {
    return new Promise((resolve, reject)=>{
        let ACCESS_TOKEN = localStorage.getItem("YAT")
        if(ACCESS_TOKEN){
            //토큰뜯기 -> 유효기간확인 -> 유효하면 true 안하면 false

            //base64 디코딩
            const decodedToken = decoding(ACCESS_TOKEN);

            resolve(true)
        }
        else throw new Error("Token non exists")
    })
    
}