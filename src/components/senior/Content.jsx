import React from "react";
import VolunteerView from "./VolunteerView"
import AdminView from "../../containers/senior/AdminView"

const Content = () => {
  
  return (
  <>
    
    <div className="content">
        <VolunteerView></VolunteerView>
        <AdminView></AdminView>
    </div>
  </>
  );
}

export default Content

