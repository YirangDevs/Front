import React from "react"
import postSeniorToServer from "../../business/service/post_senior_to_server"

const Confirm = (props) => {
    const onClick = () => {
        postSeniorToServer(props);
    }
    
    return(
    <>
        <input type="button" value="확인" onClick={onClick} className="confirm__button"/>
    </>
    )
}

export default Confirm