import React from "react"
import postSeniorToServer from "../../business/service/post_senior_to_server"
import Button from "../atoms/Button";

const Confirm = (props) => {
    const onClick = () => {
        postSeniorToServer(props);
    }
    
    return(
    <>
        <Button width="90%" height="2.5rem" value="확인" onClick={onClick}/>
    </>
    )
}

export default Confirm