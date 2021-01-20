import React from "react"
import Header from "../../containers/redux/components/Header/index";
import ContentContainer from "../../containers/pages/home/ContentContainer";

const Home = () => (
    <>
        <Header position={"absolute"}/>
        <ContentContainer></ContentContainer>
    </>
)

export default Home