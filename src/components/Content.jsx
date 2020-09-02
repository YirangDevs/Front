import React from "react";
import NoticeContent from "./NoticeContent";
import KakaoLoginBtn from "./KakaoLoginBtn";
import MenuContent from "./MenuContent";

const Content = (props) => {
  
  return (
  <>
    
    <div className="content__wrapper">
      <NoticeContent></NoticeContent>
      {
        
        (props.logined) ? <MenuContent></MenuContent> : <KakaoLoginBtn></KakaoLoginBtn>
      }
    </div>
  </>
  );
}

export default Content
