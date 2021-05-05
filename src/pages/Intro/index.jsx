import React, { memo } from "react"
import Header from "../../containers/redux/components/Header"
import ContentContainer from "../../containers/redux/pages/Intro/ContentContainer"


const Intro = () => (
    <>
        <Header position={"absolute"} theme={"dark"} />
        <ContentContainer></ContentContainer>
    </>
)

export default memo(Intro)