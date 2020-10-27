import React from "react"
import InputForm from "./InputForm"
import Confirm from "./Confirm"
import GuideButton from "./GuideButton"
import Function from "./Function"

const AdminView = () => {
  
  return (
  <>
    
    <div className="admin-view">
        <InputForm></InputForm>
        <Confirm></Confirm>
        <Function></Function>
        <GuideButton></GuideButton>  
    </div>
  </>
  );
}

export default AdminView