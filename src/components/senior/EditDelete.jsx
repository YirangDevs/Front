import React from "react"
import deleteSeniorFromServer from "../../business/service/delete_senior_from_server"
import editSeniorFromServer from "../../business/service/edit_senior_from_server"
import Button from "../atoms/Button"

const EditDelete = (props) => {
    
    const onClickDelete = async () => {
        console.log(props.id)
        if(props.id != null) {
            await deleteSeniorFromServer(props.id)
            
            window.location.reload();
        }

    }
    const onClickEdit = async () => {
        const {id, ...newProps}=props;
        //console.log(newProps)
        //console.log(props.id)
        if(props.id != null) {
            await editSeniorFromServer(props.id, newProps)
           // window.location.reload();
        }
    }
    
    return(
    <>
    <div className="confirm">
    {/* <input type="button" value="수정" onClick={onClickEdit} className="edit__button"/>
        <input type="button" value="삭제" onClick={onClickDelete} className="delete__button"/> */}
        <Button width="50%" height="2.5rem" value="수정" onClick={onClickEdit}/>
        <Button width="50%" height="2.5rem" value="삭제" onClick={onClickDelete}/>
    </div>
        
    </>
    )
}

export default EditDelete