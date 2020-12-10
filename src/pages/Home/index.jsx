import React from "react"
import Header from "../../layout/Header/index"
import TopBar from "../../components/molecules/TopBar";
import Image from "../../components/atoms/Image/index"
import MainImg from "../../img/main-img.jpg"

const Home = () => (
    <>
            <Header>
                <TopBar></TopBar>
                <Image src={MainImg} width={100}></Image>
            </Header>
        </>
)

export default Home