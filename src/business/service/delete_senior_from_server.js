const deleteSeniorFromServer = async (props) => {
    console.log(props)
    return fetch("http://localhost:7000/seniors/delete/"+props, {
        method: "DELETE",
        headers: {
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        }
    }).then((res) => res.json());
}

export default deleteSeniorFromServer