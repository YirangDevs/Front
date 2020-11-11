const editSeniorFromServer = async (id, props) => {
    let payload=JSON.stringify(props);
    
    return fetch("http://localhost:7000/seniors/edit/"+id, {
        method: 'PUT',
        header : {
            'Content-type' : 'application/json',
            'Authorization' : "Bearer "+ localStorage.getItem("YAT")
        },
        body: payload
    }).then(res=>res.json())
}

export default editSeniorFromServer