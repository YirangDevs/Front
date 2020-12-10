import React from "react"
import Header from "../../layout/Header/index"
import TopBar from "../../components/molecules/TopBar";
import Image from "../../components/atoms/Image/index"
const MainImagePath = "../../../img/main-img.png"

const Home = () => (
    <>
            <Header>
                <TopBar></TopBar>
                <Image src={MainImagePath} width={100}></Image>
            </Header>
        </>
)

export default Home