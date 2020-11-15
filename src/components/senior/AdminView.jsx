import React from "react"
import InputForm from "./InputForm"
import Confirm from "../../containers/senior/Confirm"
import EditDelete from "../../containers/senior/EditDelete"
import GuideButton from "./GuideButton"
import Function from "../../containers/senior/Function"

const AdminView = (props) => {
  return (
  <>
    
    <div className="admin-view">
        <InputForm></InputForm>
        {props.button? <Confirm></Confirm>:<EditDelete></EditDelete>}
        <Function></Function>
        <GuideButton></GuideButton>  
    </div>
  </>
  );
}

export default AdminView