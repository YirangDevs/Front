import React from "react";
import NoticeContent from "./NoticeContent";
import KakaoLoginBtn from "./KakaoLoginBtn";
import MenuContent from "./MenuContent";
import Loading from "./Loading"

const Content = (props) => {

  
  return (
  <>
    
    <div className="content container__content">
      <NoticeContent></NoticeContent>
      {
        //loading = YAT가 있으면 true 없으면 false
        (props.loading) ? (props.logined) ? <MenuContent></MenuContent> : <Loading></Loading> : <KakaoLoginBtn></KakaoLoginBtn>
      }
    </div>
  </>
  );
}

export default Content
