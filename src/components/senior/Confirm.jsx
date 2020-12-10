import React from "react"
import postSeniorToServer from "../../business/service/post_senior_to_server"
import Index from "../atoms/Button";

const Confirm = (props) => {
    const onClick = () => {
        postSeniorToServer(props);
    }
    
    return(
    <>
        <Index width="90%" height="2.5rem" value="확인" onClick={onClick}/>
    </>
    )
}

export default Confirm