import React from "react";
import MenuNav from "./MenuNav";
import MenuInfo from "../../containers/pages/home/MenuInfo";

const MenuContent = () => (
  <>
    <div className="menu content__menu">
      <MenuNav></MenuNav>
      <MenuInfo></MenuInfo>
    </div>
  </>
);

export default MenuContent;
