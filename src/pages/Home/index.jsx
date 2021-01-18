import React from "react"
import Header from "../../containers/redux/components/Header/index";
import Image from "../../components/atoms/Image/index"
import MainImagePath from "../../img/main-img.jpg"
import Content from "../../components/organisms/home/Content"

const Home = () => (
    <>
        <Header position={"absolute"}/>
        <Content></Content>
    </>
)

export default Home