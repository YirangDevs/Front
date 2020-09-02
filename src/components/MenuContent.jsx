import React from "react";
import MenuNav from "./MenuNav";
import MenuInfo from "../containers/MenuInfo";

const MenuContent = () => (
  <>
    <div className="content__menu__wrapper">
      <MenuNav></MenuNav>
      <MenuInfo></MenuInfo>
    </div>
  </>
);

export default MenuContent;
