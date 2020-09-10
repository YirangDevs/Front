import React from "react"
import TopBar from "./TopBar"
import MainImg from "./MainImg"
import Content from "../containers/Content"
import SideNav from "../containers/SideNav"
import run from "../init/start"
run();

const Container = () => (
    <>
        <div className="container">
            <SideNav></SideNav>
            <TopBar></TopBar>
            <MainImg></MainImg>
            <Content></Content>
        </div>
    </>
)

export default Container;