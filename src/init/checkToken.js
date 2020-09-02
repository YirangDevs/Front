export default ()=> {
    let ACCESS_TOKEN = localStorage.getItem("KAKAO_ACCESS_TOKEN")
    if(ACCESS_TOKEN==null) return false
    else return true
}