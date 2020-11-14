import React from "react"
import postSeniorToServer from "../../business/service/post_senior_to_server"
import ButtonBox from "../atoms/ButtonBox";

const Confirm = (props) => {
    const onClick = () => {
        postSeniorToServer(props);
    }
    
    return(
    <>
        <ButtonBox width="90%" height="2.5rem" background="#f1f3f6" color="#707070" margin="2% 0" border="1px solid #ccd4e0" value="확인" onClick={onClick}></ButtonBox>
    </>
    )
}

export default Confirm