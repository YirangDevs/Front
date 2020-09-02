import React from "react";
import NoticeContent from "./NoticeContent";
import KakaoLoginBtn from "./KakaoLoginBtn";
import MenuContent from "./MenuContent";

const Content = () => (
  <>
    <div className="content__wrapper">
      <NoticeContent></NoticeContent>
      <MenuContent></MenuContent>
    </div>
  </>
);

export default Content;
