import YAT from "../util/Yat/yat"

export default ()=> {
    return new Promise((resolve, reject)=>{
        let ACCESS_TOKEN = localStorage.getItem("YAT")
        if(ACCESS_TOKEN){
            //토큰뜯기 -> 유효기간확인 -> 유효하면 true 안하면 false

            //base64 디코딩
            const decodedToken = YAT.decode(ACCESS_TOKEN);
            const tokenExpired = YAT.IsExpiredIn(decodedToken);
            if(tokenExpired){
                resolve(ACCESS_TOKEN)
            }else{
                reject(new Error("Token is expired"))
            }
        }
        else reject(new Error("Token is non exists"))
    })
}