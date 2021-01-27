import React from "react"
import {useHistory} from "react-router-dom";

const LogoutRedirect =  ()=>{
    const history = useHistory()
    history.push("/")
    return (
        <>

        </>
    )
}



export default LogoutRedirect