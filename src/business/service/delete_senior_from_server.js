const deleteSeniorFromServer = async (id) => {
    console.log(id)
    return fetch("http://ec2-3-35-99-114.ap-northeast-2.compute.amazonaws.com:8080/v1/apis/seniors/"+id, {
        method: "DELETE",
        headers: {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        }
    });
}

export default deleteSeniorFromServer