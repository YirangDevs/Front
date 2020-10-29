import React from "react";
import {useEffect} from "react"
import NoticeContent from "./NoticeContent";
import KakaoLoginBtn from "./KakaoLoginBtn";
import MenuContent from "./MenuContent";
import Loading from "./Loading"
import YAT from "../../business/service/yat"

const Content = (props) => {

  useEffect(()=>{
    YAT.exist().then(()=>{
      props.SET_LOADING();
    }).catch((err)=>{
      props.SET_LOADING_OUT();
      console.log(err)
    })
  })
  
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
