import React from "react"
import TopBar from "./TopBar"
import MainImg from "./MainImg"
import Content from "./Content"

const Container = () => (
    <>
        <div className="container">
            <TopBar></TopBar>
            <MainImg></MainImg>
            <Content></Content>
        </div>
    </>
)

export default Container;